import { SensorFactory } from "./sensor.factory";
import { Sensor } from "../interfaces/sensor.interface";
import { SensorPresion } from "../types/sensor-presion";

export class FabricaSensorPresion extends SensorFactory {

  crearSensor(): Sensor {

    return new SensorPresion();

  }

}