import { PartialType } from '@nestjs/mapped-types';
import { CreatePenggunaDto } from './create-pengguna.dto.js';

export class UpdatePenggunaDto extends PartialType(CreatePenggunaDto) {}
                       