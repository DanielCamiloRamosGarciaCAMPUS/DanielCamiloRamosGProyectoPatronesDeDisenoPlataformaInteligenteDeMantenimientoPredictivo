import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [AssetsModule, SensorsModule],
})
export class AppModule {}