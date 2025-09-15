import { Test, TestingModule } from '@nestjs/testing';
import { LoginJoinController } from './login-join.controller';

describe('LoginJoinController', () => {
  let controller: LoginJoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginJoinController],
    }).compile();

    controller = module.get<LoginJoinController>(LoginJoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
