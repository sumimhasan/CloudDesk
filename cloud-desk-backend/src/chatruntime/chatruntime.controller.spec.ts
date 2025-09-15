import { Test, TestingModule } from '@nestjs/testing';
import { ChatruntimeController } from './chatruntime.controller';

describe('ChatruntimeController', () => {
  let controller: ChatruntimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatruntimeController],
    }).compile();

    controller = module.get<ChatruntimeController>(ChatruntimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
