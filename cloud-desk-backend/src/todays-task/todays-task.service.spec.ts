import { Test, TestingModule } from '@nestjs/testing';
import { TodaysTaskService } from './todays-task.service';

describe('TodaysTaskService', () => {
  let service: TodaysTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodaysTaskService],
    }).compile();

    service = module.get<TodaysTaskService>(TodaysTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
