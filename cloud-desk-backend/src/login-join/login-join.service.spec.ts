import { Test, TestingModule } from '@nestjs/testing';
import { LoginJoinService } from './login-join.service';

describe('LoginJoinService', () => {
  let service: LoginJoinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginJoinService],
    }).compile();

    service = module.get<LoginJoinService>(LoginJoinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
