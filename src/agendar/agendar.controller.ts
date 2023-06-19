import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CriaAgendamentoDTO } from './dto/CriaAgendamento.dto';
import { AgendarService } from './agendar.service';
import { AgendarEntity } from './agendar.entity';
import { ListaAgendarDTO } from './dto/ListaAgendar.dto';

@Controller('/agendar')
export class AgendarController {
  constructor(private agendarService: AgendarService) {}

  @Post()
  async criaAgendamento(@Body() dadosAgendamento: CriaAgendamentoDTO) {
    const agendaEntity = new AgendarEntity();
    agendaEntity.especialista = dadosAgendamento.especialista;
    agendaEntity.paciente = dadosAgendamento.paciente;
    agendaEntity.data = dadosAgendamento.data;
    agendaEntity.id = uuid();

    this.agendarService.criaAgenda(agendaEntity);

    return {
      agenda: new ListaAgendarDTO(agendaEntity.id, agendaEntity.paciente),
      messagem: 'paciente agendado com sucesso',
    };
  }

  @Get()
  async listAgendas() {
    const agendasSalvas = await this.agendarService.listaAgendas();

    return agendasSalvas;
  }

  @Put('/:id')
  async atualizaAgendamento(
    @Param('id') id: string,
    @Body() novosDados: AgendarEntity,
  ) {
    const agendaAtualizada = await this.agendarService.atualizaAgenda(
      id,
      novosDados,
    );

    return {
      usuario: agendaAtualizada,
      messagem: 'agenda atualizada com sucesso',
    };
  }
}
