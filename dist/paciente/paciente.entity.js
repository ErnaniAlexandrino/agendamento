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
exports.PacienteEntity = void 0;
const typeorm_1 = require("typeorm");
const paciente_endereco_entity_1 = require("./paciente-endereco.entity");
let PacienteEntity = exports.PacienteEntity = class PacienteEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PacienteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cpf', length: 25, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 100, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', length: 70, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ativo', default: false }),
    __metadata("design:type", Boolean)
], PacienteEntity.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'senha', length: 255, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone', nullable: false }),
    __metadata("design:type", Number)
], PacienteEntity.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'plano_saude', default: false }),
    __metadata("design:type", Boolean)
], PacienteEntity.prototype, "planoSaude", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => paciente_endereco_entity_1.PacienteEnderecoEntity, (pacienteEnderecoEntity) => pacienteEnderecoEntity.paciente, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], PacienteEntity.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "deletedAt", void 0);
exports.PacienteEntity = PacienteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pacientes' })
], PacienteEntity);
//# sourceMappingURL=paciente.entity.js.map