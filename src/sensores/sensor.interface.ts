export interface Sensor {
  id: string;
  tipo: string;
  valorActual: number;
  umbralCritico: number;

  leerDato(): number;
  verificarUmbral(): boolean;
}