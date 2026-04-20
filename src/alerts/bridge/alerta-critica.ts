import { Alerta } from './alerta.abstract';
import { CanalNotificacion } from './canal-notificacion.interface';

export class AlertaCritica extends Alerta {
  constructor(canal: CanalNotificacion) {
    super(canal);
  }

  enviar(): string {
    return this.canal.enviarMensaje('ALERTA CRÍTICA: posible falla grave detectada');
  }
}