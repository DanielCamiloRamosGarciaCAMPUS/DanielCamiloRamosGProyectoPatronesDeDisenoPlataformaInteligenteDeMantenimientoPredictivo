import { CanalNotificacion } from './canal-notificacion.interface';

export class CanalPanel implements CanalNotificacion {
  enviarMensaje(mensaje: string): string {
    return `Notificación mostrada en panel: ${mensaje}`;
  }
}