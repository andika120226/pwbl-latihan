import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePenggunaDto } from './dto/create-pengguna.dto.js';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PenggunaService {
  // buat constructor untuk menginject prisma service
  constructor(private readonly prisma: PrismaService) {}
  async create(createPenggunaDto: CreatePenggunaDto) {
    // return 'This action adds a new pengguna';

    // cek apakah username sudah ada
    const check = await this.prisma.tb_pengguna.findFirst({
      where: {
        username: createPenggunaDto.username,
      },
    });

    // jika username ditemukan
    if (check) {
      throw new ConflictException({
        succes: false,
        message: 'Username Pengguna Sudah Terdaftar !',
        data: null,
      });
    }

    // jika username tidak ditemukan
    // buat variabel untuk salt(bycrypt)
    const salt = 10;
    // simpan data pengguna
    const data = await this.prisma.tb_pengguna.create({
      data: {
        nama: createPenggunaDto.nama,
        username: createPenggunaDto.username,
        password: await bcrypt.hash(createPenggunaDto.password, salt),
      },
    });
    // tampilkan hasil respon
    return {
      succes: true,
      message: 'Data Pengguna Berhasil Disimpan !',
      data: data,
    };
  }

  async findAll() {
    // return `This action returns all pengguna`;
    // tampilkan seluruh data pengguna
    const data = await this.prisma.tb_pengguna.findMany();

    // jika data pengguna tidak ada / ditemukan
    if (data.length === 0) {
      // cara 1 (universal exception)
      // throw new HttpException({
      //   succes: false,
      //   message: 'Data Pengguna Tidak Ditemukan !',
      //   data: null,
      // }, 404);

      // cara 2 (specific exception)
      throw new NotFoundException({
        succes: false,
        message: 'Data Pengguna Tidak Ditemukan !',
        data: null,
      });
    }

    // jika data pengguna ditemukan
    // tampilkan hasil respon
    return {
      succes: true,
      message: null,
      data: data,
    };
  }

  async findOne(id: number) {
    // return `This action returns a #${id} pengguna`;
    try {
      // tampilkan dengan pengguna berdasarkan id
      const data = await this.prisma.tb_pengguna.findUnique({
        where: {
          id: id,
        },
      });

      // jika data (id pengguna) tidak ditemukan
      if (!data) {
        throw new NotFoundException({
          succes: false,
          message: 'Data Pengguna Tidak Ditemukan !',
          data: null,
        });
      }

      // tampilkan hasil respon
      return {
        succes: true,
        message: null,
        data: data,
      };
    } catch (error) {
      // jika error yang terjadi adalah 404
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException({
        succes: false,
        message: 'ID Harus Berupa Angka !',
        data: null,
      });
    }
  }

  async update(id: number, _updatePenggunaDto: UpdatePenggunaDto) {
    return `This action updates a #${id} pengguna`;
     try {
      // tampilkan data pengguna berdasarkan id
      const data = await this.prisma.tb_pengguna.findUnique({
        where: {
          id: id,
        },
      });

      // jika data (id pengguna) tidak ditemukan
      if (!data) {
        throw new NotFoundException({
          succes: false,
          message: 'Data Pengguna Tidak Ditemukan !',
          data: null,
        });
      }

      // ubah data pengguna
      

      // tampilkan hasil respon
      return {
        succes: true,
        message: 'Data Pengguna Berhasil Dihapus !',
        data: data,
      };
    } catch (error) {
      // jika error yang terjadi adalah 404
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException({
        succes: false,
        message: 'ID Harus Berupa Angka !',
        data: null,
      });
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} pengguna`;
    try {
      // tampilkan data pengguna berdasarkan id
      const data = await this.prisma.tb_pengguna.findUnique({
        where: {
          id: id,
        },
      });

      // jika data (id pengguna) tidak ditemukan
      if (!data) {
        throw new NotFoundException({
          succes: false,
          message: 'Data Pengguna Tidak Ditemukan !',
          data: null,
        });
      }

      // hapus data pengguna
      await this.prisma.tb_pengguna.delete({
        where: {
          id: id,
        },
      });

      // tampilkan hasil respon
      return {
        succes: true,
        message: 'Data Pengguna Berhasil Dihapus !',
        data: data,
      };
    } catch (error) {
      // jika error yang terjadi adalah 404
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException({
        succes: false,
        message: 'ID Harus Berupa Angka !',
        data: null,
      });
    }
  }
}
