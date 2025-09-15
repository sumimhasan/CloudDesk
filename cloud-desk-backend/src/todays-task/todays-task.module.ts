import { Module } from '@nestjs/common';
import { TodaysTaskController } from './todays-task.controller';
import { TodaysTaskService } from './todays-task.service';

@Module({
  controllers: [TodaysTaskController],
  providers: [TodaysTaskService]
})
export class TodaysTaskModule {}
