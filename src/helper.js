// Obtener la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calculo de precios según la marca del auto
export function calcularMarca(brand) {
  let incremento;
  switch (brand) {
    case "americano":
      incremento = 1.15;
      break;
    case "europeo":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Muestra la primera letra en mayuscula
export function primeraMayuscula(txt) {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}
