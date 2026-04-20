import { LecturaSensor } from './lectura-sensor.interface';

export abstract class LecturaDecorator implements LecturaSensor {
  constructor(protected lectura: LecturaSensor) {}

  procesar(): string {
    return this.lectura.procesar();
  }
}