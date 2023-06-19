import { PacienteEntity } from '../paciente.entity';
export declare class EndPacienteDTO {
    id: string;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    estado: string;
    paciente: PacienteEntity;
}
export declare class CriaPacienteDTO {
    cpf: string;
    nome: string;
    email: string;
    ativo: boolean;
    senha: string;
    telefone: number;
    planoSaude: boolean;
    endereco: EndPacienteDTO[];
}
