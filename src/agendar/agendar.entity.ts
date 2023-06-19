import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'agendas' })
export class AgendarEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'especialista', length: 255, nullable: false })
  especialista: string;

  @Column({ name: 'paciente', length: 255, nullable: false })
  paciente: string;

  @Column({ name: 'data', length: 255, nullable: false })
  data: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
