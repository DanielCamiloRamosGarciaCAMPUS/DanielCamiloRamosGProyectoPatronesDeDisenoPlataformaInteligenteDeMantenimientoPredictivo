import { SensorTemperatura } from "./temperatura.interface";
import { SensorVibracion } from "./vibracion.interface";

export interface FabricaSensores {

  crearSensorTemperatura(): SensorTemperatura;

  crearSensorVibracion(): SensorVibracion;

}