import { Controller, Get, Query } from '@nestjs/common';
import { SensorFactory } from './sensor.factory';
import { MotorPredictivoService } from '../predictivo/motor-predictivo.service';

@Controller('sensores')
export class SensoresController {

  @Get('probar')
  probarSensor(
    @Query('tipo') tipo: string,
    @Query('id') id: string,
  ) {

    const sensor = SensorFactory.crearSensor(tipo, id);

    const valor = sensor.leerDato();

    const motor = MotorPredictivoService.getInstance();

    const resultado = motor.analizarSensor(valor, sensor.umbralCritico);

    return {
      sensor: sensor.tipo,
      valorActual: valor,
      umbral: sensor.umbralCritico,
      analisis: resultado
    };
  }
}