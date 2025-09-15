import { Module } from '@nestjs/common';
import { ChatruntimeController } from './chatruntime.controller';
import { ChatruntimeService } from './chatruntime.service';

@Module({
  controllers: [ChatruntimeController],
  providers: [ChatruntimeService]
})
export class ChatruntimeModule {}
