import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MahasiswaService } from './mahasiswa/mahasiswa.service.js';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller.js';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module.js';
import { DosenModule } from './dosen/dosen.module.js';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PenggunaModule } from './pengguna/pengguna.module.js';

@Module({
  imports: [MahasiswaModule, DosenModule,ConfigModule.forRoot({ isGlobal: true }), PrismaModule, PenggunaModule],
  controllers: [AppController, MahasiswaController],
  providers: [AppService, MahasiswaService, PrismaService],
})
export class AppModule {}
