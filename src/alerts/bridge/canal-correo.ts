import { CanalNotificacion } from './canal-notificacion.interface';

export class CanalCorreo implements CanalNotificacion {
  enviarMensaje(mensaje: string): string {
    return `Correo enviado con mensaje: ${mensaje}`;
  }
}