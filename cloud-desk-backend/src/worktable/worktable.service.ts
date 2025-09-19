// src/task/task.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    viewMode?: 'all' | 'user' | 'my',
    searchUser?: string,
    status?: string,
    sortField?: 'Due Date' | 'Priority' | 'Status',
    currentUserId?: number, // for "my" tasks — if you later link session to member
  ): Promise<any[]> {
    // Build Prisma where filter
    let where: any = {};

    if (status && status !== 'All') {
      where.status = status.toUpperCase(); // assuming your enum is PENDING, IN_PROGRESS, DONE
    }

    if (viewMode === 'my') {
      // You need a way to map current user → member.id
      // For now, since frontend uses "Me", and no auth, we skip filtering by real user
      // TODO: Later, map JWT user → member.id
      // where.assigne = currentUserId;
      // For now, we do nothing — frontend filters "Me" locally
    }

    if (viewMode === 'user' && searchUser) {
      // Search by member username
      where.member = {
        username: {
          contains: searchUser,
          mode: 'insensitive',
        },
      };
    }

    // Get raw tasks with member relation
    let tasks = await this.prisma.task.findMany({
      where,
      include: {
        member: true, // to get username for assignee display
      },
    });

    // Map to frontend-friendly format
    let mapped = tasks.map((task) => ({
      id: task.id,
      title: task.title,
      assignee: task.member.username, // 👈 frontend expects "assignee" (string)
      dueDate: task.dueDate.toISOString().split('T')[0], // "YYYY-MM-DD"
      status: this.mapStatusToFrontend(task.status),
      priority: this.mapPriorityToFrontend(task.priority),
    }));

    // Apply sorting
    if (sortField) {
      mapped.sort((a, b) => {
        if (sortField === 'Due Date') {
          return a.dueDate.localeCompare(b.dueDate);
        }
        if (sortField === 'Priority') {
          const map = { High: 3, Medium: 2, Low: 1 };
          return map[b.priority] - map[a.priority];
        }
        if (sortField === 'Status') {
          const map = { Done: 3, 'In Progress': 2, Todo: 1 };
          return map[b.status] - map[a.status];
        }
        return 0;
      });
    }

    return mapped;
  }

  // --- Helper: Map Prisma enum → frontend string
  private mapStatusToFrontend(status: string): 'Todo' | 'In Progress' | 'Done' {
    switch (status) {
      case 'PENDING':
        return 'Todo';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'DONE':
        return 'Done';
      default:
        return 'Todo';
    }
  }

  private mapPriorityToFrontend(priority: string): 'Low' | 'Medium' | 'High' {
    switch (priority) {
      case 'LOW':
        return 'Low';
      case 'MEDIUM':
        return 'Medium';
      case 'HIGH':
        return 'High';
      default:
        return 'Low';
    }
  }

  // --- Create Task
  async create(data: {
    title: string;
    assigne: number; // member ID
    dueDate: string | Date;
    status?: string;
    priority?: string;
  }): Promise<any> {
    const newTask = await this.prisma.task.create({
      data: {
        title: data.title,
        assigne: data.assigne,
        dueDate: new Date(data.dueDate),
        status: (data.status || 'PENDING').toUpperCase() as any,
        priority: (data.priority || 'MEDIUM').toUpperCase() as any,
      },
      include: {
        member: true,
      },
    });

    return {
      id: newTask.id,
      title: newTask.title,
      assignee: newTask.member.username,
      dueDate: newTask.dueDate.toISOString().split('T')[0],
      status: this.mapStatusToFrontend(newTask.status),
      priority: this.mapPriorityToFrontend(newTask.priority),
    };
  }
}