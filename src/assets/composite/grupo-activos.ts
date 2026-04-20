import { ComponenteActivo } from './componente-activo';

export class GrupoActivos extends ComponenteActivo {
  private componentes: ComponenteActivo[] = [];

  constructor(private nombre: string) {
    super();
  }

  agregar(componente: ComponenteActivo): void {
    this.componentes.push(componente);
  }

  mostrarEstado(): string {
    let resultado = `Grupo: ${this.nombre}\n`;

    for (const componente of this.componentes) {
      resultado += componente.mostrarEstado() + '\n';
    }

    return resultado.trim();
  }
}