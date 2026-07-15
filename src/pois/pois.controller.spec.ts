import { Test, TestingModule } from '@nestjs/testing';
import { PoisController } from './pois.controller';

describe('PoisController', () => {
  let controller: PoisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoisController],
    }).compile();

    controller = module.get<PoisController>(PoisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
