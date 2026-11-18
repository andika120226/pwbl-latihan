import { Module } from '@nestjs/common';
import { DosenService } from './dosen.service.js';
import { DosenController } from './dosen.controller.js';

@Module({
  controllers: [DosenController],
  providers: [DosenService],
})
export class DosenModule {}
