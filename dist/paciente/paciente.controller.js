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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const paciente_repository_1 = require("./paciente.repository");
const CriaPaciente_dto_1 = require("./dto/CriaPaciente.dto");
const paciente_entity_1 = require("./paciente.entity");
const uuid_1 = require("uuid");
const ListaPaciente_dto_1 = require("./dto/ListaPaciente.dto");
const paciente_service_1 = require("./paciente.service");
let PacienteController = exports.PacienteController = class PacienteController {
    constructor(pacienteRepository, pacienteService) {
        this.pacienteRepository = pacienteRepository;
        this.pacienteService = pacienteService;
    }
    async cadPaciente(data) {
        const pacienteEntity = new paciente_entity_1.PacienteEntity();
        pacienteEntity.id = (0, uuid_1.v4)();
        pacienteEntity.cpf = data.cpf;
        pacienteEntity.nome = data.nome;
        pacienteEntity.email = data.email;
        pacienteEntity.ativo = data.ativo;
        pacienteEntity.senha = data.senha;
        pacienteEntity.telefone = data.telefone;
        pacienteEntity.planoSaude = data.planoSaude;
        pacienteEntity.endereco = data.endereco;
        const pacienteCad = this.pacienteRepository.salvaArray(pacienteEntity);
        return pacienteCad;
    }
    async listaPacientes() {
        const pacientesSave = await this.pacienteRepository.listar();
        const pacienteLista = pacientesSave.map((paciente) => new ListaPaciente_dto_1.ListaUsuarioDTO(paciente.id, paciente.nome, paciente.cpf));
        return pacienteLista;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaPaciente_dto_1.CriaPacienteDTO]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "cadPaciente", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "listaPacientes", null);
exports.PacienteController = PacienteController = __decorate([
    (0, common_1.Controller)('/pacientes'),
    __metadata("design:paramtypes", [paciente_repository_1.PacienteRepository,
        paciente_service_1.PacienteService])
], PacienteController);
//# sourceMappingURL=paciente.controller.js.map