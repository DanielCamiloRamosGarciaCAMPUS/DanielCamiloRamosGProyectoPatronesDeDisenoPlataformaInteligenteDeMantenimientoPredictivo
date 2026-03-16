import { Injectable } from '@nestjs/common';
import { MotorAnalisisPredictivo } from '../analysis/analysis-engine.singleton';

import { FabricaSensorTemperatura } from './factories/fabrica-sensor-temperatura';
import { FabricaSensorVibracion } from './factories/fabrica-sensor-vibracion';
import { FabricaSensorPresion } from './factories/fabrica-sensor-presion';

import { FabricaSensoresIndustriales } from './factories/fabrica-industrial';
import { FabricaSensoresDomesticos } from './factories/fabrica-domestica';

import { ConstructorMaquinaIndustrial } from '../machines/constructor-maquina-industrial';
import { DirectorMaquina } from '../machines/director-maquina';



@Injectable()
export class SensorsService {

  // =========================
  // PATRÓN SINGLETON
  // =========================

  analizarValorSensor(valor: number) {

    const motor = MotorAnalisisPredictivo.obtenerInstancia();

    return motor.analizarDatos(valor);

  }


  // =========================
  // PATRÓN FACTORY METHOD
  // =========================

  leerSensor(tipo: string) {

    let sensor;

    if (tipo === "temperatura") {

      const fabrica = new FabricaSensorTemperatura();
      sensor = fabrica.crearSensor();

    }
    else if (tipo === "vibracion") {

      const fabrica = new FabricaSensorVibracion();
      sensor = fabrica.crearSensor();

    }
    else if (tipo === "presion") {

      const fabrica = new FabricaSensorPresion();
      sensor = fabrica.crearSensor();

    }
    else {

      return "Tipo de sensor no válido";

    }

    return sensor.leerDato();

  }


  // =========================
  // PATRÓN ABSTRACT FACTORY
  // =========================

  crearFamiliaSensores(tipo: string) {

    let fabrica;

    if (tipo === "industrial") {

      fabrica = new FabricaSensoresIndustriales();

    }
    else {

      fabrica = new FabricaSensoresDomesticos();

    }

    const sensorTemp = fabrica.crearSensorTemperatura();
    const sensorVib = fabrica.crearSensorVibracion();

    return {

      temperatura: sensorTemp.leerDato(),
      vibracion: sensorVib.leerDato()

    };

  }

// =========================
// PATRÓN BUILDER
// =========================

construirMaquina() {

  const builder = new ConstructorMaquinaIndustrial();

  const director = new DirectorMaquina();

  director.construirMaquinaCompleta(builder);

  return builder.obtenerResultado();

}

}