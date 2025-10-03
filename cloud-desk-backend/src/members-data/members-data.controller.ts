// src/member/member.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { MemberService } from './members-data.service';
import { Member } from '@prisma/client';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Member> {
    return this.memberService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createMemberDto: { userid: number; username: string; iactive?: boolean },
  ): Promise<Member> {
    return this.memberService.create(createMemberDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: Partial<{ userid: number; username: string; iactive: boolean }>,
  ): Promise<Member> {
    return this.memberService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    await this.memberService.remove(+id);
  }
}