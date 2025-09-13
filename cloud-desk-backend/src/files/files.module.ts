// files.module.ts
import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      dest: join(__dirname, '..', 'uploads'), // folder for file storage
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
