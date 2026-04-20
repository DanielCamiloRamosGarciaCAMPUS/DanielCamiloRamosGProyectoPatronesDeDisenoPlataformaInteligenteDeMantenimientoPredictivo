import { ComponenteActivo } from './componente-activo';

export class ActivoIndividual extends ComponenteActivo {
  constructor(private nombre: string) {
    super();
  }

  mostrarEstado(): string {
    return `Activo individual: ${this.nombre}`;
  }
}