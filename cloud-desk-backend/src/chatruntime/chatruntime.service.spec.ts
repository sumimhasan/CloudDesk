import { Test, TestingModule } from '@nestjs/testing';
import { ChatruntimeService } from './chatruntime.service';

describe('ChatruntimeService', () => {
  let service: ChatruntimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatruntimeService],
    }).compile();

    service = module.get<ChatruntimeService>(ChatruntimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
