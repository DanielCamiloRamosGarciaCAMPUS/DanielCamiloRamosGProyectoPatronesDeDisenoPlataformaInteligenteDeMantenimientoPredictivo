import { Sensor } from './sensor.interface';

export class SensorTemperatura implements Sensor {
  id: string;
  tipo = 'temperatura';
  valorActual: number;
  umbralCritico = 80;

  constructor(id: string) {
    this.id = id;
  }

  leerDato(): number {
    this.valorActual = Math.random() * 100;
    return this.valorActual;
  }

  verificarUmbral(): boolean {
    return this.valorActual > this.umbralCritico;
  }
}