import { SubsistemaSensor } from './subsistema-sensor';
import { SubsistemaAnalisis } from './subsistema-analisis';
import { SubsistemaAlerta } from './subsistema-alerta';

export class MonitoreoFacade {
  private sensor: SubsistemaSensor;
  private analisis: SubsistemaAnalisis;
  private alerta: SubsistemaAlerta;

  constructor() {
    this.sensor = new SubsistemaSensor();
    this.analisis = new SubsistemaAnalisis();
    this.alerta = new SubsistemaAlerta();
  }

  ejecutarMonitoreo(): string {
    const valor = this.sensor.leerDato();
    const resultadoAnalisis = this.analisis.analizar(valor);
    const alerta = this.alerta.generar(resultadoAnalisis);

    return `Valor leído: ${valor} | Resultado: ${resultadoAnalisis} | ${alerta}`;
  }
}