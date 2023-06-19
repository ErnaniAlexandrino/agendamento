import { PacienteEnderecoEntity } from './paciente-endereco.entity';
export declare class PacienteEntity {
    id: string;
    cpf: string;
    nome: string;
    email: string;
    ativo: boolean;
    senha: string;
    telefone: number;
    planoSaude: boolean;
    endereco: PacienteEnderecoEntity[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
