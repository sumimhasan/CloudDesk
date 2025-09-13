import { Test, TestingModule } from '@nestjs/testing';
import { MembersDataController } from './members-data.controller';

describe('MembersDataController', () => {
  let controller: MembersDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembersDataController],
    }).compile();

    controller = module.get<MembersDataController>(MembersDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
