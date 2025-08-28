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
//-----------------------------------------------------------------------------------------------------------

function selecaoDireta(vetor) {
  let aux = vetor.length;

  for (let i = 0; i < aux - 1; i++) {
    let menor = i;
    console.log(vetor)
    for (let j = i + 1; j <aux; j++) {
      if (vetor[j] < vetor[menor]) {
        menor = j;
      }
    }

    // Troca os elementos
    if (menor !== i) {
      let temp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = temp;
    }
  }
}

// Sua lista original
let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
let ordenados = selecaoDireta(numeros);

console.log("Lista ordenada:", ordenados);


//-------------------------------------------------------------------------------------------------
function insercaoDireta(vetor) {
  for (var i = 1; i < vetor.length; i++) {
   
    var chave = vetor[i];
    var j = i - 1;

    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j--;
    }

    vetor[j + 1] = chave;
    console.log(vetor)
  }


}

numeros = [25, 57, 48, 37, 12, 92, 86, 33];
ordenados = insercaoDireta(numeros);
//console.log("Lista ordenada:", ordenados);



