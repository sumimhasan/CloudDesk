// src/todays-task/todays-task.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { TodaysTaskService } from './todays-task.service';

@Controller('todays-tasks')
export class TodaysTaskController {
  constructor(private readonly todaysTaskService: TodaysTaskService) {}

  @Get()
  async getTodaysTasks(@Query('userId') userId: number) {
    return this.todaysTaskService.findTodaysTasks(userId);
  }
}
