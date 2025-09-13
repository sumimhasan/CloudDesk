import { Test, TestingModule } from '@nestjs/testing';
import { WorktableController } from './worktable.controller';

describe('WorktableController', () => {
  let controller: WorktableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorktableController],
    }).compile();

    controller = module.get<WorktableController>(WorktableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
