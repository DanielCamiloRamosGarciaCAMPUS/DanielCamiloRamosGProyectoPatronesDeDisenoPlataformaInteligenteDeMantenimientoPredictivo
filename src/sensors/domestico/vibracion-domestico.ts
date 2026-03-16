import { SensorVibracion } from "../abstract/vibracion.interface";

export class SensorVibracionDomestico implements SensorVibracion {

  leerDato(): number {

    return 10;

  }

}