import { Module } from '@nestjs/common';
import { MyofficeController } from './myoffice.controller';
import { MyofficeService } from './myoffice.service';

@Module({
  controllers: [MyofficeController],
  providers: [MyofficeService]
})
export class MyofficeModule {}
