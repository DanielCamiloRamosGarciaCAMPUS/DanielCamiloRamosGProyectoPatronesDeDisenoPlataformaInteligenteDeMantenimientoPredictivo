export class SubsistemaAlerta {
  generar(resultado: string): string {
    if (resultado === 'Anomalía detectada') {
      return 'ALERTA: posible falla detectada';
    }

    return 'Sin alertas';
  }
}