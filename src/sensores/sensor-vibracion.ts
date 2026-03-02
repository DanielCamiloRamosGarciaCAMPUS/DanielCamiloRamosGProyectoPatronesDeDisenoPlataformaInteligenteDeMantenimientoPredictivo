import { Sensor } from './sensor.interface';

export class SensorVibracion implements Sensor {
  id: string;
  tipo = 'vibracion';
  valorActual: number;
  umbralCritico = 50;

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