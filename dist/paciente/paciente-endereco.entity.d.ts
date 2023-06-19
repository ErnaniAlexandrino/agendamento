import { PacienteEntity } from './paciente.entity';
export declare class PacienteEnderecoEntity {
    id: string;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    estado: string;
    paciente: PacienteEntity;
}
