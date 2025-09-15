import { Test, TestingModule } from '@nestjs/testing';
import { ChatdataService } from './chatdata.service';

describe('ChatdataService', () => {
  let service: ChatdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatdataService],
    }).compile();

    service = module.get<ChatdataService>(ChatdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
