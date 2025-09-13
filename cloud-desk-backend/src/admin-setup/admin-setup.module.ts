import { Module } from '@nestjs/common';
import { AdminSetupController } from './admin-setup.controller';
import { AdminSetupService } from './admin-setup.service';

@Module({
  controllers: [AdminSetupController],
  providers: [AdminSetupService]
})
export class AdminSetupModule {}
