import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PacienteRepository } from './paciente.repository';
import { CriaPacienteDTO } from './dto/CriaPaciente.dto';
import { PacienteEntity } from './paciente.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaPaciente.dto';
import { AtualizaPacienteDTO } from './dto/AtualizaPaciente.dto';
import { PacienteService } from './paciente.service';

@Controller('/pacientes')
export class PacienteController {
  constructor(
    private readonly pacienteRepository: PacienteRepository,
    private readonly pacienteService: PacienteService,
  ) {}

  @Post()
  async cadPaciente(@Body() data: CriaPacienteDTO) {
    const pacienteEntity = new PacienteEntity();

    pacienteEntity.id = uuid();
    pacienteEntity.cpf = data.cpf;
    pacienteEntity.nome = data.nome;
    pacienteEntity.email = data.email;
    pacienteEntity.ativo = data.ativo;
    pacienteEntity.senha = data.senha;
    pacienteEntity.telefone = data.telefone;
    pacienteEntity.planoSaude = data.planoSaude;
    pacienteEntity.endereco = data.endereco;

    // a linha abaixo salva em array local
    const pacienteCad = this.pacienteRepository.salvaArray(pacienteEntity);

    // linha abaixo salva paciente no bd
    //const pacienteCad = this.pacienteService.criaPaciente(pacienteEntity);
    return pacienteCad;
  }

  @Get()
  async listaPacientes() {
    const pacientesSave = await this.pacienteRepository.listar();
    const pacienteLista = pacientesSave.map(
      (paciente) =>
        new ListaUsuarioDTO(paciente.id, paciente.nome, paciente.cpf),
    );

    return pacienteLista;
  }

  // @Patch('/:id')
  // async atualizaPaciente(
  //   @Param('id') id: string,
  //   @Body() dadosAtualizados: AtualizaPacienteDTO,
  // ) {
  //   const pacienteAtualizado = await this.pacienteRepository.atualiza(
  //     id,
  //     dadosAtualizados,
  //   );

  //   return {
  //     dados: pacienteAtualizado,
  //     message: 'Paciente atualizado com sucesso!',
  //   };
  // }
}
