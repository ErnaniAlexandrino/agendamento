import { Injectable } from '@nestjs/common';
import { PacienteEntity } from './paciente.entity';

@Injectable()
export class PacienteRepository {
  private pacientes: PacienteEntity[] = [];

  async salvaArray(paciente: PacienteEntity) {
    this.pacientes.push(paciente);
  }

  async listar() {
    return this.pacientes;
  }

  async existeEmail(email: string) {
    const existPaciente = this.pacientes.find(
      (paciente) => paciente.email === email,
    );
    return existPaciente !== undefined;
  }

  private buscaPaciente(id: string) {
    const existePaciente = this.pacientes.find(
      (paciente) => paciente.id === id,
    );

    if (!existePaciente) {
      throw new Error('Paciente não existe');
    }

    return existePaciente;
  }

  async atualiza(id: string, dados: Partial<PacienteEntity>) {
    const paciente = this.buscaPaciente(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      paciente[chave] = valor;
    });

    return paciente;
  }
}
