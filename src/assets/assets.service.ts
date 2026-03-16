import { Injectable } from '@nestjs/common';
import { Asset } from './asset.entity';

@Injectable()
export class AssetsService {

  private assets: Asset[] = [];

  crearActivo(asset: Asset) {
    this.assets.push(asset);
    return asset;
  }

  obtenerActivos() {
    return this.assets;
  }

}