import { FabricaSensores } from "../abstract/sensor-abstract.factory";
import { SensorTemperatura } from "../abstract/temperatura.interface";
import { SensorVibracion } from "../abstract/vibracion.interface";

import { SensorTemperaturaIndustrial } from "../industrial/temperatura-industrial";
import { SensorVibracionIndustrial } from "../industrial/vibracion-industrial";

export class FabricaSensoresIndustriales implements FabricaSensores {

  crearSensorTemperatura(): SensorTemperatura {

    return new SensorTemperaturaIndustrial();

  }

  crearSensorVibracion(): SensorVibracion {

    return new SensorVibracionIndustrial();

  }

}