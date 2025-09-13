import { Module } from '@nestjs/common';
import { ChatdataController } from './chatdata.controller';
import { ChatdataService } from './chatdata.service';

@Module({
  controllers: [ChatdataController],
  providers: [ChatdataService]
})
export class ChatdataModule {}
