import { Module } from '@nestjs/common';
import { AgendarController } from './agendar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendarService } from './agendar.service';
import { AgendarEntity } from './agendar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgendarEntity])],
  controllers: [AgendarController],
  providers: [AgendarService],
})
export class AgendarModule {}
