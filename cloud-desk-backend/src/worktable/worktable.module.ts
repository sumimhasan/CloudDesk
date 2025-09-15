import { Module } from '@nestjs/common';
import { WorktableController } from './worktable.controller';
import { WorktableService } from './worktable.service';

@Module({
  controllers: [WorktableController],
  providers: [WorktableService]
})
export class WorktableModule {}
