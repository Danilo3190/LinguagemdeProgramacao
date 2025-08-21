function inserir(vet,qdt){
    if(vet)
    for(var i=0;i<qdt;i++){
        vet.push(Number(prompt("Informar um numero")))
    }
}
function remover(vet,indice){
    for(let i=indice+1;i<vet.length;i++){
        vet[i-1] = vet[i]
    }
        vet.length = vet.length -1
}
function buscar (vet,elem){
    for(let i=0;i<vet.length;i++){
        if(vet[i] == elem){
            return i
        }
    }
    return -1
}
function soma_par_impar(vet){
    let par = 0
    let impar = 0
    for(let i=0; i<vet.length;i++){
        if(vet[i] % 2 == 0){
            par += vet[i]
        }
        else{
            impar += vet[i]

        }
    }
    console.log("A soma dos elementos pares = ",par)
    console.log("A soma dos elementos impar = ",impar)
}
function soma_indices(vet, inicio, fim){
    soma = 0
    for(i=inicio;i<=fim;i++){
        soma += vet[i]
    }
    return soma
}







//-------------------------------Programa Principal-----------------------------------------------------------
var vet = []

var qdt = Number(prompt("Digite a quantidade de elementos:"))
if((vet.length+qdt)< 50){
    inserir(vet,qdt)
}
else{
    console.log("Quantidade ultrapassa 50 elementos")

}
console.log(vet)

let cod = prompt(`Deseja remover por indice ou valor:`)
if(cod == "i"){
    let indice = Number(prompt(`Digite o indice que deseja remover:`))
    remover(vet,indice)
    console.log(vet)
}
soma_par_impar(vet)

let resp = soma_indices(vet,2,4)
console.log(resp)






