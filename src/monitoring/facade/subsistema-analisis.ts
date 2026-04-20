export class SubsistemaAnalisis {
  analizar(valor: number): string {
    if (valor > 80) {
      return 'Anomalía detectada';
    }

    return 'Funcionamiento normal';
  }
}
