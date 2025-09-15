import { Test, TestingModule } from '@nestjs/testing';
import { WorktableService } from './worktable.service';

describe('WorktableService', () => {
  let service: WorktableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorktableService],
    }).compile();

    service = module.get<WorktableService>(WorktableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
