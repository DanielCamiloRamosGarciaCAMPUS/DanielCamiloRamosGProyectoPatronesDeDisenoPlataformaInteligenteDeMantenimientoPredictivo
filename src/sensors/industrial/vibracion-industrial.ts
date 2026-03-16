import { SensorVibracion } from "../abstract/vibracion.interface";

export class SensorVibracionIndustrial implements SensorVibracion {

  leerDato(): number {

    return 85;

  }

}