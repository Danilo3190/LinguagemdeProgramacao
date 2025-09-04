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

//-----------------------------------------------------------------------------------------------------------------------

// Gerar vetor aleatório
function gerarAleatorio(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(Math.floor(Math.random() * tam));
  }
}

// Gerar vetor ordenado
function gerarOrdenado(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(i);
  }
}

// Gerar vetor invertido
function gerarInvertido(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(tam - i);
  }
}

// Bubble Sort (modifica vetor diretamente)
function bubbleSort(vetor) {
  for (var i = 0; i < vetor.length - 1; i++) {
    for (var j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        var temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
}

// Seleção Direta (modifica vetor diretamente)
function selecaoDireta(vetor) {
  for (var i = 0; i < vetor.length - 1; i++) {
    var menor = i;
    for (var j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) menor = j;
    }
    if (menor !== i) {
      var temp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = temp;
    }
  }
}

// Inserção Direta (modifica vetor diretamente)
function insercaoDireta(vetor) {
  for (var i = 1; i < vetor.length; i++) {
    var chave = vetor[i];
    var j = i - 1;
    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = chave;
  }
}

// Medir tempo de execução
function medirTempo(nomeAlgoritmo, tipoVetor, vetor, algoritmo) {
  var inicio = performance.now();
  algoritmo(vetor); // vetor é modificado diretamente
  var fim = performance.now();
  var tempo = (fim - inicio).toFixed(2);
  console.log(nomeAlgoritmo + " | " + tipoVetor + "  " + tempo + " ms");
}

// Função principal
function executarTestes() {
  var TAM = 1000;

  var vetorAleatorio = []
  var vetorOrdenado = []
  var vetorInvertido = []

  gerarAleatorio(TAM, vetorAleatorio);
  gerarOrdenado(TAM, vetorOrdenado);
  gerarInvertido(TAM, vetorInvertido);

  var algoritmos = {
    "Bubble Sort": bubbleSort,
    "Seleção Direta": selecaoDireta,
    "Inserção Direta": insercaoDireta
  }

  var tipos = {
    "Aleatório": vetorAleatorio,
    "Ordenado": vetorOrdenado,
    "Invertido": vetorInvertido
  }

  for (var nomeAlgoritmo in algoritmos) {
    for (var tipo in tipos) {
      var copia = tipos[tipo].slice(); 
      medirTempo(nomeAlgoritmo, tipo, copia, algoritmos[nomeAlgoritmo]);
    }
    console.log("\n");
  }
}

executarTestes();

//---------------------------------------------------------------------------------------------------------------------------

// Gerar vetor aleatório
function gerarAleatorio(tam, vetor) {
  let i = 0;
  while (i < tam) {
    vetor.push(Math.floor(Math.random() * tam));
    i++;
  }
}

// Gerar vetor ordenado
function gerarOrdenado(tam, vetor) {
  let i = 0;
  while (i < tam) {
    vetor.push(i);
    i++;
  }
}

// Gerar vetor invertido
function gerarInvertido(tam, vetor) {
  let i = tam - 1;
  while (i >= 0) {
    vetor.push(i);
    i--;
  }
}

// Bubble Sort
function bubbleSort(vetor) {
  let i = 0;
  while (i < vetor.length - 1) {
    let j = 0;
    while (j < vetor.length - i - 1) {
      if (vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
      j++;
    }
    i++;
  }
}

// Seleção Direta
function selecaoDireta(vetor) {
  let i = 0;
  while (i < vetor.length - 1) {
    let menor = i;
    let j = i + 1;
    while (j < vetor.length) {
      if (vetor[j] < vetor[menor]) menor = j;
      j++;
    }
    if (menor !== i) {
      let temp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = temp;
    }
    i++;
  }
}

// Inserção Direta
function insercaoDireta(vetor) {
  let i = 1;
  while (i < vetor.length) {
    let chave = vetor[i];
    let j = i - 1;
    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = chave;
    i++;
  }
}

// Medir tempo de execução
function medirTempo(nomeAlgoritmo, tipoVetor, vetor, algoritmo) {
  let inicio = performance.now();
  algoritmo(vetor);
  let fim = performance.now();
  let tempo = (fim - inicio).toFixed(2);
  console.log(nomeAlgoritmo + " | " + tipoVetor + " → " + tempo + " ms");
}

// Função principal
function executarTestes() {
  var TAM = 1000;

  let vetorAleatorio = [];
  let vetorOrdenado = [];
  let vetorInvertido = [];

  gerarAleatorio(TAM, vetorAleatorio);
  gerarOrdenado(TAM, vetorOrdenado);
  gerarInvertido(TAM, vetorInvertido);

  var algoritmos = {
    "Bubble Sort": bubbleSort,
    "Seleção Direta": selecaoDireta,
    "Inserção Direta": insercaoDireta
  };

  var tipos = {
    "Aleatório": vetorAleatorio,
    "Ordenado": vetorOrdenado,
    "Invertido": vetorInvertido
  };

  for (let nomeAlgoritmo in algoritmos) {
    for (let tipo in tipos) {
      let copia = tipos[tipo].slice();
      medirTempo(nomeAlgoritmo, tipo, copia, algoritmos[nomeAlgoritmo]);
    }
    console.log("—".repeat(40));
  }
}

executarTestes();







  