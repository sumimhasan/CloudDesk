import { Module } from '@nestjs/common';
import { LoginJoinController } from './login-join.controller';
import { LoginJoinService } from './login-join.service';

@Module({
  controllers: [LoginJoinController],
  providers: [LoginJoinService]
})
export class LoginJoinModule {}
