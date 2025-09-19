// src/task/task.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(
    @Query('view') viewMode?: 'all' | 'user' | 'my',
    @Query('searchUser') searchUser?: string,
    @Query('status') status?: string,
    @Query('sort') sortField?: 'Due Date' | 'Priority' | 'Status',
  ) {
    return this.taskService.findAll(viewMode, searchUser, status, sortField);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body()
    createTaskDto: {
      title: string;
      assigne: number;
      dueDate: string;
      status?: string;
      priority?: string;
    },
  ) {
    return this.taskService.create(createTaskDto);
  }
}