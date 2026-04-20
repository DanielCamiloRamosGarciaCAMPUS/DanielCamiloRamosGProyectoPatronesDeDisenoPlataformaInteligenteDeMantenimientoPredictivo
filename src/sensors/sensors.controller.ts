import { Controller, Post, Body } from '@nestjs/common';
import { SensorsService } from './sensors.service';

@Controller('sensors')
export class SensorsController {

  constructor(private readonly sensorsService: SensorsService) {}

  // ENDPOINT DEL SINGLETON
  @Post("analizar")
  analizar(@Body() body: any) {

    return this.sensorsService.analizarValorSensor(body.valor);

  }

  // ENDPOINT DEL FACTORY METHOD
  @Post("leer")
  leer(@Body() body:any){

    return this.sensorsService.leerSensor(body.tipo);

  }

//ENDPOINT ABSTRACT METHOD
@Post("familia")
crearFamilia(@Body() body:any){

return this.sensorsService.crearFamiliaSensores(body.tipo);

}

@Post("maquina")
crearMaquina(){

return this.sensorsService.construirMaquina();

}

// ENDPOINT PROTOTYPE
@Post("clonar-configuracion")
clonarConfiguracion(@Body() body: any) {

  return this.sensorsService.clonarConfiguracion(body);

}

// ENDPOINT ADAPTER
@Post("adaptado")
leerAdaptado() {

  return this.sensorsService.leerSensorAdaptado();

}

// ENDPOINT BRIDGE
@Post("alerta-bridge")
procesarAlerta(@Body() body: any) {

  return this.sensorsService.procesarAlertaBridge(body.tipoAlerta, body.canal);

}

// ENDPOINT DECORATOR
@Post("lectura-decorada")
procesarLecturaDecorada() {

  return this.sensorsService.procesarLecturaDecorada();

}

// ENDPOINT COMPOSITE
@Post("composite")
mostrarComposite() {

  return this.sensorsService.mostrarEstructuraActivos();

}

// ENDPOINT FACADE
@Post("facade")
ejecutarFacade() {

  return this.sensorsService.ejecutarFacade();

}

}


