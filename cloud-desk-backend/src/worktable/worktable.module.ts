// src/task/task.module.ts
import { Module } from '@nestjs/common';
import  {TaskController} from './worktable.controller';
import {TaskService} from './worktable.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
  exports: [TaskService],
})
export class TaskModule {}