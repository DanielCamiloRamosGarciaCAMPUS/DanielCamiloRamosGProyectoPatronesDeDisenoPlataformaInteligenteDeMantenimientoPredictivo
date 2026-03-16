import { Maquina } from "./maquina";

export interface MaquinaBuilder {

agregarSensorTemperatura(): void;

agregarSensorVibracion(): void;

agregarSistemaAlerta(): void;

agregarSistemaMonitoreo(): void;

obtenerResultado(): Maquina;

}