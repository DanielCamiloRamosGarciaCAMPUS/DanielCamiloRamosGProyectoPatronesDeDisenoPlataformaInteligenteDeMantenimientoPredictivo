import { LecturaSensor } from './lectura-sensor.interface';

export class LecturaBaseSensor implements LecturaSensor {
  procesar(): string {
    return 'Lectura base del sensor procesada';
  }
}