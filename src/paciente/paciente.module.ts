import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteRepository } from './paciente.repository';
import { EmailUnicoValidator } from './validacao/email-unico.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteEntity } from './paciente.entity';
import { PacienteService } from './paciente.service';

@Module({
  imports: [TypeOrmModule.forFeature([PacienteEntity])],
  controllers: [PacienteController],
  providers: [PacienteRepository, EmailUnicoValidator, PacienteService],
})
export class PacienteModule {}
