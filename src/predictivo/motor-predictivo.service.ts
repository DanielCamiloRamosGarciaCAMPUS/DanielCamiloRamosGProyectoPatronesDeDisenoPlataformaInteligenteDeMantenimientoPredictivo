export class MotorPredictivoService {

  private static instancia: MotorPredictivoService;

  private constructor() {}

  public static getInstance(): MotorPredictivoService {
    if (!MotorPredictivoService.instancia) {
      MotorPredictivoService.instancia = new MotorPredictivoService();
    }
    return MotorPredictivoService.instancia;
  }

  public analizarSensor(valor: number, umbral: number): string {
    if (valor > umbral) {
      return '⚠️ Riesgo detectado: posible falla inminente';
    }
    return '✅ Funcionamiento normal';
  }
}