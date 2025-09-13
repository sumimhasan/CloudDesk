import { Module } from '@nestjs/common';
import { MembersDataController } from './members-data.controller';
import { MembersDataService } from './members-data.service';

@Module({
  controllers: [MembersDataController],
  providers: [MembersDataService]
})
export class MembersDataModule {}
