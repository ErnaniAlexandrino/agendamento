export declare class EndPacienteDTO {
    id: string;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    estado: string;
    paciente: EndPacienteDTO[];
}
export declare class AtualizaPacienteDTO {
    id: string;
    cpf: string;
    nome: string;
    email: string;
    ativo: boolean;
    senha: string;
    telefone: number;
    planoSaude: boolean;
    endereco: EndPacienteDTO[];
}
