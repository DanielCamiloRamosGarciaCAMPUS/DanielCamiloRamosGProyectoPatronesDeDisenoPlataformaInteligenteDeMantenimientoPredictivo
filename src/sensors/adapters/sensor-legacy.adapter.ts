import { SensorCompatible } from './sensor-compatible.interface';
import { SensorExternoLegacy } from './sensor-legacy';

export class SensorLegacyAdapter implements SensorCompatible {
  constructor(private readonly sensorLegacy: SensorExternoLegacy) {}

  leerDato(): number {
    return this.sensorLegacy.obtenerMedicion();
  }
}