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
exports.AgendarEntity = void 0;
const typeorm_1 = require("typeorm");
let AgendarEntity = exports.AgendarEntity = class AgendarEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AgendarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'especialista', length: 255, nullable: false }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "especialista", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paciente', length: 255, nullable: false }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data', length: 255, nullable: false }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], AgendarEntity.prototype, "deletedAt", void 0);
exports.AgendarEntity = AgendarEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'agendas' })
], AgendarEntity);
//# sourceMappingURL=agendar.entity.js.map