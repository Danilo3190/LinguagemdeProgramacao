let vetor = [25, 57, 48, 37, 12, 92, 86, 33];
let trocas = 0;

for (let i = 0; i < vetor.length - 1; i++) {
  for (let j = 0; j < vetor.length - i - 1; j++) {
    if (vetor[j] > vetor[j + 1]) {
      [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]]; // troca usando 
      trocas++;
    }
  }
}

console.log("Vetor ordenado:", vetor);
console.log("Total de trocas realizadas:", trocas);
//-------------------------------------------------------------------------
//let vetor = [25, 57, 48, 37, 12, 92, 86, 33];

for (let i = 0; i < vetor.length - 1; i++) {
  for (let j = 0; j < vetor.length - i - 1; j++) {
    if (vetor[j] > vetor[j + 1]) {
      [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]]; // troca os elementos
    }
  }
}

console.log("Vetor ordenado:", vetor);
///---------------------------------------------------------------------------
function bubbleSort(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]]; // troca os elementos
      }
    }
  }
  return vetor;
}
let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
let ordenado = bubbleSort(numeros);
console.log("Vetor ordenado:", ordenado);

