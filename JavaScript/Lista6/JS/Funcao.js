function entrada(vet){
    vet[0] = 'A'
    vet[1] = 'B'
    vet[2] = 'C'
}
function processa(){
   vet[0] =vet[0] + 'U'
   vet[1] =vet[1] + 'U'
   vet[2] =vet[2] + 'U'

}
function saida(vet){
    alert(`Saida de dados`)
}
function main(){
    let vetor =[]
    //passsado vetor vetor com paramito da função
    //vet vai receber uma referencia de vetor
    entrada(vetor)
    processa(vetor)
    saida(vetor)
}
function entrada(va){
}
function processa(va){
    va = va + 10
}
