import { PacienteRepository } from './paciente.repository';
import { CriaPacienteDTO } from './dto/CriaPaciente.dto';
import { ListaUsuarioDTO } from './dto/ListaPaciente.dto';
import { PacienteService } from './paciente.service';
export declare class PacienteController {
    private readonly pacienteRepository;
    private readonly pacienteService;
    constructor(pacienteRepository: PacienteRepository, pacienteService: PacienteService);
    cadPaciente(data: CriaPacienteDTO): Promise<void>;
    listaPacientes(): Promise<ListaUsuarioDTO[]>;
}
