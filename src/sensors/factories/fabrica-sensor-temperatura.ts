import { SensorFactory } from "./sensor.factory";
import { Sensor } from "../interfaces/sensor.interface";
import { SensorTemperatura } from "../types/sensor-temperatura";

export class FabricaSensorTemperatura extends SensorFactory {

  crearSensor(): Sensor {

    return new SensorTemperatura();

  }

}