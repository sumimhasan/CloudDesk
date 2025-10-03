// src/member/member.module.ts
import { Module } from '@nestjs/common';
import { MemberService } from './members-data.service';
import { MemberController } from './members-data.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MemberController],
  providers: [MemberService, PrismaService],
  exports: [MemberService],
})
export class MemberModule {}