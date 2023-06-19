import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { PacienteRepository } from '../paciente.repository';
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private pacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcoesDeValidacao: ValidationOptions) => (objeto: any, propriedade: string) => void;
