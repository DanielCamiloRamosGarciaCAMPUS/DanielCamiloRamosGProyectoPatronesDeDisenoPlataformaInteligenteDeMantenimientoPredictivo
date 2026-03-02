import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensoresModule } from './sensores/sensores.module';
import { ActivosModule } from './activos/activos.module';
import { PredictivoModule } from './predictivo/predictivo.module';
import { AlertasModule } from './alertas/alertas.module';
import { OrdenesModule } from './ordenes/ordenes.module';

@Module({
  imports: [SensoresModule, ActivosModule, PredictivoModule, AlertasModule, OrdenesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
