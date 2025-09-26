import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AdminSetupModule } from './admin-setup/admin-setup.module';
import { ChatdataModule } from './chatdata/chatdata.module';
import { ChatruntimeModule } from './chatruntime/chat.module';
import { FilesModule } from './files/files.module';
import { LoginJoinModule } from './login-join/login-join.module';
import { MembersDataModule } from './members-data/members-data.module';
import { MyofficeModule } from './myoffice/myoffice.module';
import { TodaysTaskModule } from './todays-task/todays-task.module';
import { WorktableModule } from './worktable/worktable.module';

@Module({
  imports: [AdminSetupModule, ChatdataModule, ChatruntimeModule, FilesModule, LoginJoinModule, MembersDataModule, MyofficeModule, TodaysTaskModule, WorktableModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
