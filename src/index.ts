//Algoritmo Múltiplos
let indice: number;
let cadena: string = "";
for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 == 0 || indice % 3 == 0) {
    cadena = cadena + indice + " ";
  }
}
console.log(cadena);
