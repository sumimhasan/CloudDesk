import { Test, TestingModule } from '@nestjs/testing';
import { MyofficeService } from './myoffice.service';

describe('MyofficeService', () => {
  let service: MyofficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyofficeService],
    }).compile();

    service = module.get<MyofficeService>(MyofficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
