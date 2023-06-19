import { CriaAgendamentoDTO } from './dto/CriaAgendamento.dto';
import { AgendarService } from './agendar.service';
import { AgendarEntity } from './agendar.entity';
import { ListaAgendarDTO } from './dto/ListaAgendar.dto';
export declare class AgendarController {
    private agendarService;
    constructor(agendarService: AgendarService);
    criaAgendamento(dadosAgendamento: CriaAgendamentoDTO): Promise<{
        agenda: ListaAgendarDTO;
        messagem: string;
    }>;
    listAgendas(): Promise<ListaAgendarDTO[]>;
    atualizaAgendamento(id: string, novosDados: AgendarEntity): Promise<{
        usuario: void;
        messagem: string;
    }>;
}
