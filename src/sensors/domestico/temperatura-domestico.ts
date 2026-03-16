import { SensorTemperatura } from "../abstract/temperatura.interface";

export class SensorTemperaturaDomestico implements SensorTemperatura {

  leerDato(): number {

    return 35;

  }

}