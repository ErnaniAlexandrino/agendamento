import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';
import { PacienteEntity } from '../paciente.entity';

export class EndPacienteDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  cep: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  rua: string;

  @Min(0, { message: 'número obrigatório' })
  numero: number;

  @IsString()
  complemento: string;

  @IsNotEmpty({ message: 'Necessário adicionar a sigla do estado' })
  estado: string;

  paciente: PacienteEntity;
}

export class CriaPacienteDTO {
  @IsNotEmpty({ message: 'CPF não pode ser vazio!' })
  cpf: string;

  @IsNotEmpty({ message: 'Nome obrigatório!' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado não é validado' })
  @EmailUnico({ message: 'email já cadastrado' })
  email: string;

  @IsBoolean()
  @Transform(({ value }) => value === true)
  ativo: boolean;

  @MinLength(4, { message: 'minimo de 4 caracteres' })
  senha: string;

  @IsNumber({ maxDecimalPlaces: 11, allowNaN: false, allowInfinity: false })
  @Min(11, { message: 'O valor precisa ser maior que zero' })
  telefone: number;

  @IsBoolean()
  @Transform(({ value }) => value === true)
  planoSaude: boolean;

  @ValidateNested()
  @IsArray()
  @Type(() => EndPacienteDTO)
  endereco: EndPacienteDTO[];
}
