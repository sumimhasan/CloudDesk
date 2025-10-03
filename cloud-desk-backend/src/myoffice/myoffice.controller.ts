import { Controller, Get } from '@nestjs/common';
import { MyofficeService } from './myoffice.service';

@Controller('myoffice')
export class MyofficeController {
  constructor(private readonly myofficeService: MyofficeService) {}

  // Always return the single team
  @Get()
  async getTeam() {
    return this.myofficeService.getTeam();
  }
}
