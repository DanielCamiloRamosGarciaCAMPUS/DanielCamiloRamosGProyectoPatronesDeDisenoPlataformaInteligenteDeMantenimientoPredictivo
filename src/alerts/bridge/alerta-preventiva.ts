import { Alerta } from './alerta.abstract';
import { CanalNotificacion } from './canal-notificacion.interface';

export class AlertaPreventiva extends Alerta {
  constructor(canal: CanalNotificacion) {
    super(canal);
  }

  enviar(): string {
    return this.canal.enviarMensaje('ALERTA PREVENTIVA: revisar comportamiento del activo');
  }
}