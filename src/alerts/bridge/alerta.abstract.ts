import { CanalNotificacion } from './canal-notificacion.interface';

export abstract class Alerta {
  constructor(protected canal: CanalNotificacion) {}

  abstract enviar(): string;
}