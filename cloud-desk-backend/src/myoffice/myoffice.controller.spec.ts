import { Test, TestingModule } from '@nestjs/testing';
import { MyofficeController } from './myoffice.controller';

describe('MyofficeController', () => {
  let controller: MyofficeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyofficeController],
    }).compile();

    controller = module.get<MyofficeController>(MyofficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
