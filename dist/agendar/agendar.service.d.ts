import { AgendarEntity } from './agendar.entity';
import { Repository } from 'typeorm';
import { ListaAgendarDTO } from './dto/ListaAgendar.dto';
export declare class AgendarService {
    private readonly agendarRepository;
    constructor(agendarRepository: Repository<AgendarEntity>);
    criaAgenda(agendarEntity: AgendarEntity): Promise<void>;
    atualizaAgenda(id: string, agendarEntity: AgendarEntity): Promise<void>;
    listaAgendas(): Promise<ListaAgendarDTO[]>;
}
