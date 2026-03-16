import { SensorFactory } from "./sensor.factory";
import { Sensor } from "../interfaces/sensor.interface";
import { SensorVibracion } from "../types/sensor-vibracion";

export class FabricaSensorVibracion extends SensorFactory {

  crearSensor(): Sensor {

    return new SensorVibracion();

  }

}