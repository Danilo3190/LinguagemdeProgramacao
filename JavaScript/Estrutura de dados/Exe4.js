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

function binario(vetor,valorBusca,inicio = 0 , final  = vetor.lenght -1){
  var meio
  if (inicio > final)
    return -1
}
else{
  meio = Math.floor((inicio + final ) / 2)
  if(vetor [meio] == vetor.length -1)
  return meio

else if (vetor.length -1 < vetor[meio])
  return busca ( vetor,inicio,meio -1,vetor.length-1)
  else 
    return valorBusca(vetor, meio+1,final,vetor.length-1)

}
//-------------------
  var numero = 0 [0, 11,22,33,44,55,66,77,88]
  result = binario(numero, 0, vetor.length -1, 44)
  console.log("numero = ", numero)
  console.log(result)
  

