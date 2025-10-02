function gerarAleatorio(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(Math.floor(Math.random() * tam));
  }
}

function gerarOrdenado(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(i);
  }
}

function gerarInvertido(tam, vetor) {
  for (var i = 0; i < tam; i++) {
    vetor.push(tam - i);
  }
}

function bubbleSort(vetor) {
  for (var i = 0; i < vetor.length - 1; i++) {
    for (var j = 0; j < vetor.length - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        var temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
}

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
function Quicksort(vetor, left, right) {
  var i = left;
  var j = right;
  var aux;
  var pivotidx = Math.floor((left + right) / 2);
  var pivot = parseInt(vetor[pivotidx]);

  // partição
  while (i <= j) {
    while (parseInt(vetor[i]) < pivot) {
      i++;
    }
    while (parseInt(vetor[j]) > pivot) {
      j--;
    }
    if (i <= j) {
      aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
      i++;
      j--;
    }
  }

  // recursão
  if (left < j) {
    Quicksort(vetor, left, j);
  }
  if (i < right) {
    Quicksort(vetor, i, right);
  }

  return vetor;
}

function medirTempo(nomeAlgoritmo, tipoVetor, vetor, algoritmo) {
  var inicio = performance.now();
  algoritmo(vetor);
  var fim = performance.now();
  var tempo = (fim - inicio).toFixed(2);
  console.log(nomeAlgoritmo + " | " + tipoVetor + " | " + vetor.length + " elementos | " + tempo + " ms");
}

function executarTestes() {
  var tamanhos = [100, 1000, 10000, 100000 ];

  var algoritmos = {
    "Bubble Sort": bubbleSort,
    "Seleção Direta": selecaoDireta,
    "Inserção Direta": insercaoDireta,
    "Quicksort" : Quicksort
  }

  for (var t = 0; t < tamanhos.length; t++) {
    var TAM = tamanhos[t];

    var vetorAleatorio = [];
    var vetorOrdenado = [];
    var vetorInvertido = [];

    gerarAleatorio(TAM, vetorAleatorio);
    gerarOrdenado(TAM, vetorOrdenado);
    gerarInvertido(TAM, vetorInvertido);

    var tipos = {
      "Aleatório": vetorAleatorio,
      "Ordenado": vetorOrdenado,
      "Invertido": vetorInvertido
    };

    for (var nomeAlgoritmo in algoritmos) {
      for (var tipo in tipos) {
        var copia = tipos[tipo].slice();
        medirTempo(nomeAlgoritmo, tipo, copia, algoritmos[nomeAlgoritmo]);
      }
      console.log("\n");
    }
  }
}

executarTestes();
//------------------------------------------------------------------------------------------



function gerarAleatorio(tam, vetor) {
  for (let i = 0; i < tam; i++) {
    vetor.push(Math.floor(Math.random() * tam));
  }
}

function gerarOrdenado(tam, vetor) {
  for (let i = 0; i < tam; i++) {
    vetor.push(i);
  }
}

function gerarInvertido(tam, vetor) {
  for (let i = 0; i < tam; i++) {
    vetor.push(tam - i);
  }
}

function bubbleSort(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
}

function selecaoDireta(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    let menor = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) menor = j;
    }
    if (menor !== i) {
      let temp = vetor[i];
      vetor[i] = vetor[menor];
      vetor[menor] = temp;
    }
  }
}

function insercaoDireta(vetor) {
  for (let i = 1; i < vetor.length; i++) {
    let chave = vetor[i];
    let j = i - 1;
    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = chave;
  }
}

function Quicksort(vetor, left, right) {
  let i = left;
  let j = right;
  let aux;
  let pivotidx = Math.floor((left + right) / 2);
  let pivot = vetor[pivotidx];

  while (i <= j) {
    while (vetor[i] < pivot) i++;
    while (vetor[j] > pivot) j--;
    if (i <= j) {
      aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
      i++;
      j--;
    }
  }

  if (left < j) Quicksort(vetor, left, j);
  if (i < right) Quicksort(vetor, i, right);
}

function executarTestes() {
  const tamanhos = [100, 1000, 10000, 100000];

  const algoritmos = {
    "Bubble Sort": bubbleSort,
    "Seleção Direta": selecaoDireta,
    "Inserção Direta": insercaoDireta,
    "Quicksort": vetor => Quicksort(vetor, 0, vetor.length - 1)
  };

  for (const nomeAlgoritmo in algoritmos) {
    console.group(` ${nomeAlgoritmo}`);
    for (const TAM of tamanhos) {
      const vetorAleatorio = [];
      const vetorOrdenado = [];
      const vetorInvertido = [];

      gerarAleatorio(TAM, vetorAleatorio);
      gerarOrdenado(TAM, vetorOrdenado);
      gerarInvertido(TAM, vetorInvertido);

      const tipos = {
        "Aleatório": vetorAleatorio,
        "Ordenado": vetorOrdenado,
        "Invertido": vetorInvertido
      };

      const resultados = [];

      for (const tipo in tipos) {
        const copia = tipos[tipo].slice();
        const inicio = performance.now();
        algoritmos[nomeAlgoritmo](copia);
        const fim = performance.now();
        const tempo = (fim - inicio).toFixed(2);

        resultados.push({
          Tipo: tipo,
          Tamanho: TAM,
          Tempo_ms: tempo
        });
      }

      console.groupCollapsed(` Tamanho ${TAM}`);
      console.table(resultados);
      console.groupEnd();
    }
    console.groupEnd();
  }
}

executarTestes();



  
