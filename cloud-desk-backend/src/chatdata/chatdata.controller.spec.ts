import { Test, TestingModule } from '@nestjs/testing';
import { ChatdataController } from './chatdata.controller';

describe('ChatdataController', () => {
  let controller: ChatdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatdataController],
    }).compile();

    controller = module.get<ChatdataController>(ChatdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
