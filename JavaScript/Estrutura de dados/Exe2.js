// Função Bubble Sort
function bubbleSort(vetor) {
  var aux;
  for (let i = 0; i < vetor.lenght - 1; i++) {
    for (let j = 0; j < vetor.lenght - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        // Troca os elementos
        aux = vetor[j]
       vetor[j] = vetor[j + 1];
       vetor[j + 1] = aux;
        trocas++; // Conta a troca
      }
    }
  }
}
//
//programa principal
vet = []
for (let i = 0;i <vetor.length; i++){
    vet[i] = [25, 57, 48, 37, 12, 92, 86, 33]
}

// Executa a ordenação
console.log(vet)
bubbleSort(vetor)
console.log("Vetor ordenado:", vetor);
console.log("Total de trocas realizadas:", trocas);
