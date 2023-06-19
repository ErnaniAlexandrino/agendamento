"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepository = void 0;
const common_1 = require("@nestjs/common");
let PacienteRepository = exports.PacienteRepository = class PacienteRepository {
    constructor() {
        this.pacientes = [];
    }
    async salvaArray(paciente) {
        this.pacientes.push(paciente);
    }
    async listar() {
        return this.pacientes;
    }
    async existeEmail(email) {
        const existPaciente = this.pacientes.find((paciente) => paciente.email === email);
        return existPaciente !== undefined;
    }
    buscaPaciente(id) {
        const existePaciente = this.pacientes.find((paciente) => paciente.id === id);
        if (!existePaciente) {
            throw new Error('Paciente não existe');
        }
        return existePaciente;
    }
    async atualiza(id, dados) {
        const paciente = this.buscaPaciente(id);
        Object.entries(dados).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            paciente[chave] = valor;
        });
        return paciente;
    }
};
exports.PacienteRepository = PacienteRepository = __decorate([
    (0, common_1.Injectable)()
], PacienteRepository);
//# sourceMappingURL=paciente.repository.js.map