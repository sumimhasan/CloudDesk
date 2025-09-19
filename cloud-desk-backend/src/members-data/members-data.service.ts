// src/member/member.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Member } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Member[]> {
    return this.prisma.member.findMany({
      // ❌ Do NOT include user (private)
      include: {
        tasks: true, // ✅ assuming tasks are public — remove if not
      },
    });
  }

  async findOne(id: number): Promise<Member> {
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: {
        tasks: true, // ✅ public
      },
    });

    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }

    return member;
  }

  async create(data: {
    userid: number;
    username: string;
    iactive?: boolean;
  }): Promise<Member> {
    return this.prisma.member.create({
      data,
      include: {
        tasks: true,
      },
    });
  }

  async update(
    id: number,
    data: Partial<{ userid: number; username: string; iactive: boolean }>,
  ): Promise<Member> {
    const member = await this.prisma.member.update({
      where: { id },
      data,
      include: {
        tasks: true,
      },
    });

    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }

    return member;
  }

  async remove(id: number): Promise<Member> {
    const member = await this.prisma.member.delete({
      where: { id },
      include: {
        tasks: true,
      },
    });

    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }

    return member;
  }
}