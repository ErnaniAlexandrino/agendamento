import { PacienteEntity } from './paciente.entity';
import { Repository } from 'typeorm';
export declare class PacienteService {
    private readonly pacienteRepository;
    constructor(pacienteRepository: Repository<PacienteEntity>);
    criaPaciente(pacienteEntity: PacienteEntity): Promise<void>;
}
