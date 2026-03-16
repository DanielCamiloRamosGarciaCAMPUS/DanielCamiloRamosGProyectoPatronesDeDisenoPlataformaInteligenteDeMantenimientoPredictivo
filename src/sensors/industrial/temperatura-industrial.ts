import { SensorTemperatura } from "../abstract/temperatura.interface";

export class SensorTemperaturaIndustrial implements SensorTemperatura {

  leerDato(): number {

    return 120;

  }

}