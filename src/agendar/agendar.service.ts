import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendarEntity } from './agendar.entity';
import { Repository } from 'typeorm';
import { ListaAgendarDTO } from './dto/ListaAgendar.dto';

@Injectable()
export class AgendarService {
  constructor(
    @InjectRepository(AgendarEntity)
    private readonly agendarRepository: Repository<AgendarEntity>,
  ) {}

  async criaAgenda(agendarEntity: AgendarEntity) {
    await this.agendarRepository.save(agendarEntity);
  }

  async atualizaAgenda(id: string, agendarEntity: AgendarEntity) {
    await this.agendarRepository.update(id, agendarEntity);
  }

  async listaAgendas() {
    const agendas = await this.agendarRepository.find();
    const agendasLista = agendas.map(
      (agenda) => new ListaAgendarDTO(agenda.id, agenda.paciente),
    );

    return agendasLista;
  }
}
