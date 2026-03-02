import { Sensor } from './sensor.interface';
import { SensorTemperatura } from './sensor-temperatura';
import { SensorVibracion } from './sensor-vibracion';

export class SensorFactory {
  static crearSensor(tipo: string, id: string): Sensor {
    switch (tipo) {
      case 'temperatura':
        return new SensorTemperatura(id);
      case 'vibracion':
        return new SensorVibracion(id);
      default:
        throw new Error('Tipo de sensor no soportado');
    }
  }
}