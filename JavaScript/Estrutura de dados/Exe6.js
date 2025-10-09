var fila = []
var x
x = parseInt(prompt("Informe um numero"))
fila.push(x)
fila.push(1)
fila.push(2)

alert("Fila : " + fila)

x = fila.shift()
console.log("elemento : " + x)
console.log("Fila: " + fila)

//----------------------------------------------------------------------

function limpar(fila) {
  while (fila.length != 0) {
    fila.shift();
  }
}

// Exemplo de uso:
var fila = [1, 2, 3, 4, 5];
console.log("Antes:", fila);+

limpar(fila);
console.log("Depois:", fila); // Deve mostrar []

//-------------------------------------------------------------
function limpar(pilha){
  while(pilha.length != 0){
    pilha.pop()
  }
}
function top(pilha){
  if(pilha,length != 0){
    var x = pilha.pop()
    pilha.push(x)
    return -1
  }
}
function executar(pilha)
var pilha = []
var  x = 7


pilha.push(x)
pilha.push(1)
pilha.push(7)

console.log("Pilha : " + pilha)
x = pilha.pop()
console.log("Elemento removido: " + x)
console.log("pilha: " + pilha)

pilha.push(10)
pilha.push(45)
console.log("pilha: " + pilha)
console.log("topo: " +top(pilha))
console,log("Pilha: " +pilha )
limpar(pilha)
console.log("Pilha: " +pilha)

executarTestes()

//----------------------------------------------------------------------------

function intercalarFilas(fila1, fila2) {
  var resultado = [];
  var i = 0;

  console.log(" Fila 1:", fila1);
  console.log(" Fila 2:", fila2);

  while (i < fila1.length || i < fila2.length) {
    if (i < fila1.length) {
      resultado.push(fila1[i]);
      console.log(` Inserindo da Fila 1: ${fila1[i]}`);
    }
    if (i < fila2.length) {
      resultado.push(fila2[i]);
      console.log(` Inserindo da Fila 2: ${fila2[i]}`);
    }
    i++;
  }

  console.log(" Fila intercalada:", resultado);
  return resultado;
}

//  Teste
var filaA = [1, 3, 5];
var filaB = [2, 4, 6, 8, 10];

var filaFinal = intercalarFilas(filaA, filaB);

//-------------------------------------------------

function inverterPalavrasComPilha(texto) {
  let palavras = texto.split(" "); 
  let resultado = [];

  for (let palavra of palavras) {
    let pilha = [];


    for (let letra of palavra) {
      pilha.push(letra);
    }

   
    let invertida = "";
    while (pilha.length > 0) {
      invertida += pilha.pop();
    }

    resultado.push(invertida); 
  }

  let textoFinal = resultado.join(" "); 
  console.log(" Texto original:", texto);
  console.log(" Texto com palavras invertidas:", textoFinal);
  return textoFinal;
}

//  Teste do programa
let frase1 = "exercicio muito complicado";
inverterPalavrasComPilha(frase1);


//-------------------------------------------------------------

function inverterPalavrasComPilha(texto) {
  let resultado = "";   
  let palavra = "";   
  let pilha = [];          

  for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i];

    if (caractere !== " ") {
      
      pilha.push(caractere);
    } else {

      while (pilha.length > 0) {
        palavra += pilha.pop();
      }

      resultado += palavra + " ";
      palavra = ""; 
    }
  }

 
  while (pilha.length > 0) {
    palavra += pilha.pop();
  }
  resultado += palavra;

 
  console.log(" Texto original: " + texto);
  console.log(" Texto invertido: " + resultado);
  return resultado;
}



let frase2 = "exercicio muito complicado";
inverterPalavrasComPilha(frase2);


//-----------------------------
function intercalar(vetor1,vetor2){
  var vetor3 = []
  while(vetor1.length != 0){
    vetor3.push(vetor1.shift())
    vetor3.push(vetor2.shift())

  }
  console.log(vetor3)
}
var vetor1 = [1,3,5,7]
var vetor2 = [2,4,6,8]

intercalar(vetor1,vetor2)

//--------------------------

  var frase = "abc xyz"
  var pilha = []
  var letra, i = 0
  var  fraseinvertida = " "

  while(i < frase.length){
    while(frase[i] != " " && i < frase.length){
      pilha.push(frase[i])
      i++

    }
    while(pilha.length != 0){
      letra = pilha.pop()
      fraseinvertida += letra
    }
      fraseinvertida += " "
    i++
  }
    console.log(fraseinvertida)
    

