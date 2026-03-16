import { Sensor } from "../interfaces/sensor.interface";

export class SensorTemperatura implements Sensor {

  leerDato(): number {

    return 75;

  }

}