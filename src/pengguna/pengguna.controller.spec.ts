import { Test, TestingModule } from '@nestjs/testing';
import { PenggunaController } from './pengguna.controller.js';
import { PenggunaService } from './pengguna.service.js';

describe('PenggunaController', () => {
  let controller: PenggunaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenggunaController],
      providers: [PenggunaService],
    }).compile();

    controller = module.get<PenggunaController>(PenggunaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
