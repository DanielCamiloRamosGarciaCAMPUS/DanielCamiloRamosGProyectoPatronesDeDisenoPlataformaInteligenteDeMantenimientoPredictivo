import { LecturaDecorator } from './lectura.decorator';
import { LecturaSensor } from './lectura-sensor.interface';

export class LogDecorator extends LecturaDecorator {
  constructor(lectura: LecturaSensor) {
    super(lectura);
  }

  procesar(): string {
    return `${super.procesar()} | Registro en log completado`;
  }
}