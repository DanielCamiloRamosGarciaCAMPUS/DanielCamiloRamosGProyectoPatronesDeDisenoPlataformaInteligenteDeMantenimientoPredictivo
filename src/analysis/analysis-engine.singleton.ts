export class MotorAnalisisPredictivo {

  private static instancia: MotorAnalisisPredictivo;

  private constructor() {}

  public static obtenerInstancia(): MotorAnalisisPredictivo {

    if (!MotorAnalisisPredictivo.instancia) {
      MotorAnalisisPredictivo.instancia = new MotorAnalisisPredictivo();
    }

    return MotorAnalisisPredictivo.instancia;
  }

  analizarDatos(valor: number) {

    console.log("Analizando valor:", valor);

    return this.detectarAnomalia(valor);
  }

  detectarAnomalia(valor: number) {

    if (valor > 80) {
      return "ALERTA: posible falla detectada";
    }

    return "Valor normal";
  }

}