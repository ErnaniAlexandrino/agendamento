import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PacienteEnderecoEntity } from './paciente-endereco.entity';

@Entity({ name: 'pacientes' })
export class PacienteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cpf', length: 25, nullable: false })
  cpf: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'ativo', default: false })
  ativo: boolean;

  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @Column({ name: 'telefone', nullable: false })
  telefone: number;

  @Column({ name: 'plano_saude', default: false })
  planoSaude: boolean;

  @OneToMany(
    () => PacienteEnderecoEntity,
    (pacienteEnderecoEntity) => pacienteEnderecoEntity.paciente,
    { cascade: true, eager: true },
  )
  endereco: PacienteEnderecoEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  // endereco: EndPaciente[];
}
