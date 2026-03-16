import { Module } from '@nestjs/common';
import { TechniciansService } from './technicians.service';

@Module({
  providers: [TechniciansService]
})
export class TechniciansModule {}
