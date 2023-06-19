import { IsNotEmpty } from 'class-validator';

export class CriaAgendamentoDTO {
  @IsNotEmpty({ message: 'Id do especialista não enviado' })
  especialista: string;

  @IsNotEmpty({ message: 'paciente não especificado' })
  paciente: string;

  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  data: string;
}
