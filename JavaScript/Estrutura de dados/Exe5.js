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

function medirTempo(nomeAlgoritmo, tipoVetor, vetor, algoritmo) {
  var inicio = performance.now();
  algoritmo(vetor);
  var fim = performance.now();
  var tempo = (fim - inicio).toFixed(2);
  console.log(nomeAlgoritmo + " | " + tipoVetor + " | " + vetor.length + " elementos | " + tempo + " ms");
}

function executarTestes() {
  var tamanhos = [100, 1000, 10000];

  var algoritmos = {
    "Bubble Sort": bubbleSort,
    "Seleção Direta": selecaoDireta,
    "Inserção Direta": insercaoDireta
  };

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

  
