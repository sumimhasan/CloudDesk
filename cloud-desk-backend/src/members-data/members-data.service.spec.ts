import { Test, TestingModule } from '@nestjs/testing';
import { MembersDataService } from './members-data.service';

describe('MembersDataService', () => {
  let service: MembersDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembersDataService],
    }).compile();

    service = module.get<MembersDataService>(MembersDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
