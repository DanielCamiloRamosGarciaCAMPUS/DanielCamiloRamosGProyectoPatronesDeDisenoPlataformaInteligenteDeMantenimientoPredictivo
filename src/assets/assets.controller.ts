import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Asset } from './asset.entity';

@Controller('assets')
export class AssetsController {

  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  crearActivo(@Body() asset: Asset) {
    return this.assetsService.crearActivo(asset);
  }

  @Get()
  obtenerActivos() {
    return this.assetsService.obtenerActivos();
  }

}