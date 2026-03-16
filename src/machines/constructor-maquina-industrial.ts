import { Maquina } from "./maquina";
import { MaquinaBuilder } from "./maquina.builder";

export class ConstructorMaquinaIndustrial implements MaquinaBuilder {

private maquina: Maquina;

constructor(){

this.maquina = new Maquina();

}

agregarSensorTemperatura(): void {

this.maquina.sensorTemperatura = true;

}

agregarSensorVibracion(): void {

this.maquina.sensorVibracion = true;

}

agregarSistemaAlerta(): void {

this.maquina.sistemaAlerta = true;

}

agregarSistemaMonitoreo(): void {

this.maquina.sistemaMonitoreo = true;

}

obtenerResultado(): Maquina {

return this.maquina;

}

}