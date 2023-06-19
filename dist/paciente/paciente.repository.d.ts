import { PacienteEntity } from './paciente.entity';
export declare class PacienteRepository {
    private pacientes;
    salvaArray(paciente: PacienteEntity): Promise<void>;
    listar(): Promise<PacienteEntity[]>;
    existeEmail(email: string): Promise<boolean>;
    private buscaPaciente;
    atualiza(id: string, dados: Partial<PacienteEntity>): Promise<PacienteEntity>;
}
