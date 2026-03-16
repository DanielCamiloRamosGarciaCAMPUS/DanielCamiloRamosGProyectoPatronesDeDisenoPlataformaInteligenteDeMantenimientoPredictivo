import { Sensor } from "../interfaces/sensor.interface";

export class SensorPresion implements Sensor {

  leerDato(): number {

    return 60;

  }

}