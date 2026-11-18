import { Module } from '@nestjs/common';
import { PenggunaService } from './pengguna.service.js';
import { PenggunaController } from './pengguna.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  controllers: [PenggunaController],
  providers: [PenggunaService, PrismaService],
})
export class PenggunaModule {}
