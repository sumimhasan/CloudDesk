// src/todays-task/todays-task.module.ts
import { Module } from '@nestjs/common';
import { TodaysTaskController } from './todays-task.controller';
import { TodaysTaskService } from './todays-task.service';
import { TaskService } from '../worktable/worktable.service';
import { TaskModule } from '../worktable/worktable.module';

@Module({
  imports: [TaskModule],
  controllers: [TodaysTaskController],
  providers: [TodaysTaskService, TaskService], // TaskService reused
})
export class TodaysTaskModule {}
