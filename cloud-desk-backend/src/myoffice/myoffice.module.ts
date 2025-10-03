import { Module } from '@nestjs/common';
import { MyofficeController } from './myoffice.controller';
import { MyofficeService } from './myoffice.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MyofficeController],
  providers: [MyofficeService, PrismaService],
})
export class MyofficeModule {}
