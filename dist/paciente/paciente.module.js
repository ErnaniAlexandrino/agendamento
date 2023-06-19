"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteModule = void 0;
const common_1 = require("@nestjs/common");
const paciente_controller_1 = require("./paciente.controller");
const paciente_repository_1 = require("./paciente.repository");
const email_unico_validator_1 = require("./validacao/email-unico.validator");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entity_1 = require("./paciente.entity");
const paciente_service_1 = require("./paciente.service");
let PacienteModule = exports.PacienteModule = class PacienteModule {
};
exports.PacienteModule = PacienteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([paciente_entity_1.PacienteEntity])],
        controllers: [paciente_controller_1.PacienteController],
        providers: [paciente_repository_1.PacienteRepository, email_unico_validator_1.EmailUnicoValidator, paciente_service_1.PacienteService],
    })
], PacienteModule);
//# sourceMappingURL=paciente.module.js.map