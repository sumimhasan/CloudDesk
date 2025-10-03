// src/todays-task/todays-task.service.ts
import { Injectable } from '@nestjs/common';
import { TaskService } from '../worktable/worktable.service';
import dayjs from 'dayjs';

@Injectable()
export class TodaysTaskService {
  constructor(private readonly taskService: TaskService) {}

  async findTodaysTasks(userId: number) {
    const today = dayjs().format('YYYY-MM-DD');
    const allTasks = await this.taskService.findAll('user', String(userId));
    return allTasks.filter(
      (task) => dayjs(task.dueDate).format('YYYY-MM-DD') === today,
    );
  }
}

