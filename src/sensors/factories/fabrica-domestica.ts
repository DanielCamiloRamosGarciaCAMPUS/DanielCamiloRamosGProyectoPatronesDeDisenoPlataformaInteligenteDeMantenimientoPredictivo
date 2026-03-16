import { FabricaSensores } from "../abstract/sensor-abstract.factory";
import { SensorTemperatura } from "../abstract/temperatura.interface";
import { SensorVibracion } from "../abstract/vibracion.interface";

import { SensorTemperaturaDomestico } from "../domestico/temperatura-domestico";
import { SensorVibracionDomestico } from "../domestico/vibracion-domestico";

export class FabricaSensoresDomesticos implements FabricaSensores {

  crearSensorTemperatura(): SensorTemperatura {

    return new SensorTemperaturaDomestico();

  }

  crearSensorVibracion(): SensorVibracion {

    return new SensorVibracionDomestico();

  }

}