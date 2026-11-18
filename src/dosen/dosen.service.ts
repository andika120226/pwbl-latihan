import { Injectable } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto.js';
import { UpdateDosenDto } from './dto/update-dosen.dto.js';

@Injectable()
export class DosenService {
  create(createDosenDto: CreateDosenDto) {
    return 'This action adds a new dosen';
  }

  findAll() {
    // return `This action returns all dosen`;
    return {
      succes: true,
      message: 'Tampil Data Dosen'
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} dosen`;
  }

  update(id: number, updateDosenDto: UpdateDosenDto) {
    return `This action updates a #${id} dosen`;
  }

  remove(id: number) {
    return `This action removes a #${id} dosen`;
  }
}
