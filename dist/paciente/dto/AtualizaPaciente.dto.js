"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizaPacienteDTO = exports.EndPacienteDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class EndPacienteDTO {
}
exports.EndPacienteDTO = EndPacienteDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome da cadasterística não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EndPacienteDTO.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição da característica não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EndPacienteDTO.prototype, "rua", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: 'número obrigatório' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EndPacienteDTO.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EndPacienteDTO.prototype, "complemento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Necessário adicionar a sigla do estado' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EndPacienteDTO.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => EndPacienteDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], EndPacienteDTO.prototype, "paciente", void 0);
class AtualizaPacienteDTO {
}
exports.AtualizaPacienteDTO = AtualizaPacienteDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'CPF não pode ser vazio!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaPacienteDTO.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome obrigatório!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaPacienteDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'O e-mail informado não é validado' }),
    (0, email_unico_validator_1.EmailUnico)({ message: 'email já cadastrado' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaPacienteDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === true),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AtualizaPacienteDTO.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.MinLength)(4, { message: 'minimo de 4 caracteres' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaPacienteDTO.prototype, "senha", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 11, allowNaN: false, allowInfinity: false }),
    (0, class_validator_1.Min)(11, { message: 'O valor precisa ser maior que zero' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AtualizaPacienteDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === true),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AtualizaPacienteDTO.prototype, "planoSaude", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => EndPacienteDTO),
    __metadata("design:type", Array)
], AtualizaPacienteDTO.prototype, "endereco", void 0);
//# sourceMappingURL=AtualizaPaciente.dto.js.map