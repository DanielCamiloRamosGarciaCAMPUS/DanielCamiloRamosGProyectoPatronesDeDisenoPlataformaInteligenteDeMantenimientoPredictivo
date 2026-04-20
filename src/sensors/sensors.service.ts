import { Injectable } from '@nestjs/common';
import { MotorAnalisisPredictivo } from '../analysis/analysis-engine.singleton';

import { FabricaSensorTemperatura } from './factories/fabrica-sensor-temperatura';
import { FabricaSensorVibracion } from './factories/fabrica-sensor-vibracion';
import { FabricaSensorPresion } from './factories/fabrica-sensor-presion';

import { FabricaSensoresIndustriales } from './factories/fabrica-industrial';
import { FabricaSensoresDomesticos } from './factories/fabrica-domestica';

import { ConstructorMaquinaIndustrial } from '../machines/constructor-maquina-industrial';
import { DirectorMaquina } from '../machines/director-maquina';

import { ConfiguracionMaquina } from '../machines/prototype/configuracion-maquina.prototype';
import { SensorExternoLegacy } from './adapters/sensor-legacy';
import { SensorLegacyAdapter } from './adapters/sensor-legacy.adapter';
import { CanalCorreo } from '../alerts/bridge/canal-correo';
import { CanalPanel } from '../alerts/bridge/canal-panel';
import { AlertaCritica } from '../alerts/bridge/alerta-critica';
import { AlertaPreventiva } from '../alerts/bridge/alerta-preventiva';
import { LecturaBaseSensor } from './decorator/lectura-base-sensor';
import { LogDecorator } from './decorator/log.decorator';
import { ValidacionDecorator } from './decorator/validacion.decorator';

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

  // =========================
  // PATRÓN PROTOTYPE
  // =========================

  clonarConfiguracion(body: any) {
    const configuracionBase = new ConfiguracionMaquina(
      body.nombreConfiguracion,
      body.sensorTemperatura,
      body.sensorVibracion,
      body.sistemaAlerta,
      body.sistemaMonitoreo
    );

    const clon = configuracionBase.clonar();
    clon.nombreConfiguracion = body.nuevoNombre;

    return clon;
  }

  
leerSensorAdaptado() {

  const sensorLegacy = new SensorExternoLegacy();

  const adaptador = new SensorLegacyAdapter(sensorLegacy);

  return adaptador.leerDato();

}

//PATRON BRIDGE 

procesarAlertaBridge(tipoAlerta: string, canal: string) {
  let canalNotificacion;
  let alerta;

  if (canal === 'correo') {
    canalNotificacion = new CanalCorreo();
  } else {
    canalNotificacion = new CanalPanel();
  }

  if (tipoAlerta === 'critica') {
    alerta = new AlertaCritica(canalNotificacion);
  } else {
    alerta = new AlertaPreventiva(canalNotificacion);
  }

  return alerta.enviar();
}

//PATRON DECORATOR 
procesarLecturaDecorada() {
  let lectura = new LecturaBaseSensor();

  lectura = new LogDecorator(lectura);
  lectura = new ValidacionDecorator(lectura);

  return lectura.procesar();
}



}