import { LecturaDecorator } from './lectura.decorator';
import { LecturaSensor } from './lectura-sensor.interface';

export class ValidacionDecorator extends LecturaDecorator {
  constructor(lectura: LecturaSensor) {
    super(lectura);
  }

  procesar(): string {
    return `${super.procesar()} | Validación de rango ejecutada`;
  }
}