function calcularInteres() {
    // Obtener el monto inicial ingresado por el usuario
    const montoInicial = parseFloat(document.getElementById("montoInicial").value);
    
    // Tasa de interés mensual (1.25%)
    const tasaMensual = 0.0125;

    // Monto mensual ingresado (250.00 Bs.)
    const montoMensual = 250.00;

    // Calcular el interés mensual
    let saldo = montoInicial;
    for (let mes = 1; mes <= 12; mes++) {
        saldo = saldo + montoMensual;
        saldo = saldo + saldo * tasaMensual;
    }

    // Calcular el interés total
    const interesTotal = saldo - (montoInicial + 250 * 12);

    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El interés total al final del año es de: ${interesTotal.toFixed(2)} Bs.`;
}