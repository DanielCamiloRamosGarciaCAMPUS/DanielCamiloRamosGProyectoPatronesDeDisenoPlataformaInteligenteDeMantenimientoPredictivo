import { Sensor } from "../interfaces/sensor.interface";

export abstract class SensorFactory {

  abstract crearSensor(): Sensor;

}