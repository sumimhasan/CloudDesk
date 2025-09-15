import { Test, TestingModule } from '@nestjs/testing';
import { TodaysTaskController } from './todays-task.controller';

describe('TodaysTaskController', () => {
  let controller: TodaysTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodaysTaskController],
    }).compile();

    controller = module.get<TodaysTaskController>(TodaysTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
