import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { AgendarModule } from './agendar/agendar.module';

@Module({
  imports: [
    AgendarModule,
    PacienteModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
