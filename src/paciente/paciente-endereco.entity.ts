import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PacienteEntity } from './paciente.entity';

@Entity('paciente_enderecos')
export class PacienteEnderecoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cep', length: 50, nullable: false })
  cep: string;

  @Column({ name: 'rua', length: 255, nullable: false })
  rua: string;

  @Column({ name: 'numero', nullable: false })
  numero: number;

  @Column({ name: 'complemento', length: 255, nullable: true })
  complemento: string;

  @Column({ name: 'estado', length: 5, nullable: false })
  estado: string;

  @ManyToOne(() => PacienteEntity, (paciente) => paciente.endereco, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  paciente: PacienteEntity;
}
