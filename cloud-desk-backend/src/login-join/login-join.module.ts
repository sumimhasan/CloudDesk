import { Module } from '@nestjs/common';
import { AuthController } from './login-join.controller';
import { AuthService} from  './login-join.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class LoginJoinModule {}
