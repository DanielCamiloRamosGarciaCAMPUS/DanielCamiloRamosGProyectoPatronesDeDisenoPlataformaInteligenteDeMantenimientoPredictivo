import { Prototype } from './prototype.interface';

export class ConfiguracionMaquina implements Prototype<ConfiguracionMaquina> {
  constructor(
    public nombreConfiguracion: string,
    public sensorTemperatura: boolean,
    public sensorVibracion: boolean,
    public sistemaAlerta: boolean,
    public sistemaMonitoreo: boolean,
  ) {}

  clonar(): ConfiguracionMaquina {
    return new ConfiguracionMaquina(
      this.nombreConfiguracion,
      this.sensorTemperatura,
      this.sensorVibracion,
      this.sistemaAlerta,
      this.sistemaMonitoreo,
    );
  }
}