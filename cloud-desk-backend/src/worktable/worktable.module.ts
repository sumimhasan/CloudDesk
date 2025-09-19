// src/task/task.module.ts
import { Module } from '@nestjs/common';
import worktableController from './worktable.controller';
import worktableService from './worktable.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [worktableController],
  providers: [worktableService, PrismaService],
  exports: [worktableService],
})
export class TaskModule {}