import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TeamData } from '@prisma/client';

@Injectable()
export class MyofficeService {
  constructor(private prisma: PrismaService) {}

  // Fetch the first (and only) team in the table
  async getTeam(): Promise<TeamData | null> {
    return this.prisma.teamData.findFirst();
  }
}
