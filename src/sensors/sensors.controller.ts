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

}