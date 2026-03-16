import { MaquinaBuilder } from "./maquina.builder";

export class DirectorMaquina {

construirMaquinaCompleta(builder: MaquinaBuilder){

builder.agregarSensorTemperatura();
builder.agregarSensorVibracion();
builder.agregarSistemaAlerta();
builder.agregarSistemaMonitoreo();

}

}