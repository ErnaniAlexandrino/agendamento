import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class EndPacienteDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  @IsOptional()
  cep: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  @IsOptional()
  rua: string;

  @Min(0, { message: 'número obrigatório' })
  @IsOptional()
  numero: number;

  @IsString()
  @IsOptional()
  complemento: string;

  @IsNotEmpty({ message: 'Necessário adicionar a sigla do estado' })
  @IsOptional()
  estado: string;

  @ValidateNested()
  @IsArray()
  @Type(() => EndPacienteDTO)
  @IsOptional()
  paciente: EndPacienteDTO[];
}

export class AtualizaPacienteDTO {
  id: string;

  @IsNotEmpty({ message: 'CPF não pode ser vazio!' })
  @IsOptional()
  cpf: string;

  @IsNotEmpty({ message: 'Nome obrigatório!' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado não é validado' })
  @EmailUnico({ message: 'email já cadastrado' })
  @IsOptional()
  email: string;

  @IsBoolean()
  @Transform(({ value }) => value === true)
  @IsOptional()
  ativo: boolean;

  @MinLength(4, { message: 'minimo de 4 caracteres' })
  @IsOptional()
  senha: string;

  @IsNumber({ maxDecimalPlaces: 11, allowNaN: false, allowInfinity: false })
  @Min(11, { message: 'O valor precisa ser maior que zero' })
  @IsOptional()
  telefone: number;

  @IsBoolean()
  @Transform(({ value }) => value === true)
  @IsOptional()
  planoSaude: boolean;

  @ValidateNested()
  @IsArray()
  @IsOptional()
  @Type(() => EndPacienteDTO)
  endereco: EndPacienteDTO[];
}
