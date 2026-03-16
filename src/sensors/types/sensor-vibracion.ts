import { Sensor } from "../interfaces/sensor.interface";

export class SensorVibracion implements Sensor {

  leerDato(): number {

    return 40;

  }

}