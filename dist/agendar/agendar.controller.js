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
exports.AgendarController = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const CriaAgendamento_dto_1 = require("./dto/CriaAgendamento.dto");
const agendar_service_1 = require("./agendar.service");
const agendar_entity_1 = require("./agendar.entity");
const ListaAgendar_dto_1 = require("./dto/ListaAgendar.dto");
let AgendarController = exports.AgendarController = class AgendarController {
    constructor(agendarService) {
        this.agendarService = agendarService;
    }
    async criaAgendamento(dadosAgendamento) {
        const agendaEntity = new agendar_entity_1.AgendarEntity();
        agendaEntity.especialista = dadosAgendamento.especialista;
        agendaEntity.paciente = dadosAgendamento.paciente;
        agendaEntity.data = dadosAgendamento.data;
        agendaEntity.id = (0, uuid_1.v4)();
        this.agendarService.criaAgenda(agendaEntity);
        return {
            agenda: new ListaAgendar_dto_1.ListaAgendarDTO(agendaEntity.id, agendaEntity.paciente),
            messagem: 'paciente agendado com sucesso',
        };
    }
    async listAgendas() {
        const agendasSalvas = await this.agendarService.listaAgendas();
        return agendasSalvas;
    }
    async atualizaAgendamento(id, novosDados) {
        const agendaAtualizada = await this.agendarService.atualizaAgenda(id, novosDados);
        return {
            usuario: agendaAtualizada,
            messagem: 'agenda atualizada com sucesso',
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaAgendamento_dto_1.CriaAgendamentoDTO]),
    __metadata("design:returntype", Promise)
], AgendarController.prototype, "criaAgendamento", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendarController.prototype, "listAgendas", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, agendar_entity_1.AgendarEntity]),
    __metadata("design:returntype", Promise)
], AgendarController.prototype, "atualizaAgendamento", null);
exports.AgendarController = AgendarController = __decorate([
    (0, common_1.Controller)('/agendar'),
    __metadata("design:paramtypes", [agendar_service_1.AgendarService])
], AgendarController);
//# sourceMappingURL=agendar.controller.js.map