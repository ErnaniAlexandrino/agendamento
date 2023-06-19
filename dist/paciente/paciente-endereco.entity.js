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
exports.PacienteEnderecoEntity = void 0;
const typeorm_1 = require("typeorm");
const paciente_entity_1 = require("./paciente.entity");
let PacienteEnderecoEntity = exports.PacienteEnderecoEntity = class PacienteEnderecoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PacienteEnderecoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cep', length: 50, nullable: false }),
    __metadata("design:type", String)
], PacienteEnderecoEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rua', length: 255, nullable: false }),
    __metadata("design:type", String)
], PacienteEnderecoEntity.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero', nullable: false }),
    __metadata("design:type", Number)
], PacienteEnderecoEntity.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'complemento', length: 255, nullable: true }),
    __metadata("design:type", String)
], PacienteEnderecoEntity.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado', length: 5, nullable: false }),
    __metadata("design:type", String)
], PacienteEnderecoEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.PacienteEntity, (paciente) => paciente.endereco, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", paciente_entity_1.PacienteEntity)
], PacienteEnderecoEntity.prototype, "paciente", void 0);
exports.PacienteEnderecoEntity = PacienteEnderecoEntity = __decorate([
    (0, typeorm_1.Entity)('paciente_enderecos')
], PacienteEnderecoEntity);
//# sourceMappingURL=paciente-endereco.entity.js.map