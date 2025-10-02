/*
function fatorial(numero){

  if (numero == 0) {
    return 1
  }
    else{
      return (numero * fatorial(num -1))
    }
  
}
var resultado = fatorial(4)
console.log(resultado)

//----------------------------------------------------------------
function fibonacci(n) {
  
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var numero = 17;
var resultado = fibonacci(numero);

console.log(`O ${numero}º termo da sequência de Fibonacci é: ${resultado}`); 
//--------------------------------
function fib(n){
  if(n == 1 || n == 2) return 1 //ou || &&
}

//var result = fib(8)
console.log (fib(8))


//--------------------------------------------------

function potencia(base, expoente){
  if (expoente == 0) return 1
   return (base * potencia(base, expoente -1))
}
var result = potencia (5 ,2)
console.log(result)

//---------------------------------------------------

function buscaBinaria(vetor, valorBusca, inicio = 0, final = vetor.length - 1) {
  if (inicio > final) return -1;

 var meio = Math.floor((inicio + final) / 2);

  if (vetor[meio] === valorBusca) {
    return meio;
  } else if (valorBusca < vetor[meio]) {
    return buscaBinaria(vetor, valorBusca, inicio, meio - 1);
  } else {
    return buscaBinaria(vetor, valorBusca, meio + 1, final);
  }
}

var vetor = [0, 11, 22, 33, 44, 55, 66, 77, 88];
var valor = 44;
var resultado = buscaBinaria(vetor, valor);

console.log("Índice do valor:", resultado); // Saída esperada: 4

///--------------------------------------------------
function torreDeHanoi(numero, origem, destino, auxiliar) {
  if (numero == 1) {
    console.log(`Mova o disco 1 de ${origem} para ${destino}`);
    return;
  }

  torreDeHanoi(numero - 1, origem, auxiliar, destino);
  console.log(`Mova o disco ${n} de ${origem} para ${destino}`);
  torreDeHanoi(numero - 1, auxiliar, destino, origem);
}

// 3 discos
torreDeHanoi(3, 'A', 'C', 'B');
*/
//-----------------------------------------
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

// programa
let vet = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
Quicksort(vet, 0, vet.length - 1);
console.log(vet);
