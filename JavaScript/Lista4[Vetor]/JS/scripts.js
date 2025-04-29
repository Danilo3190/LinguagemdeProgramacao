function exe1(){
    let numeros = []
    for(let i=0;i<6;i++){
        // insere número no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    // calcula os pares e ímpares
    let pares = [] // guarda os números pares
    let impares = [] // guarda os números ímpares
    // numeros.length // retorna a qtde de elementos no vetor
    for(let i=0;i<numeros.length;i++){
        if (numeros[i] % 2 == 0){ // par
            pares.push(numeros[i])
        }
        else { // ímpar
            impares.push(numeros[i])
        }
    }
    alert("Números pares " + pares + " e a qtde " + pares.length)
    // template string
    alert(`Números ímpares ${impares} e a qtde ${impares.length}`)
}
function exe2(){
    let numeros = []
    for(let i=0;i<7;i++){
        // insere número no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    let multiplos2 = [], multiplos3 = [], multiplos2e3 = []
    for(let i=0;i<numeros.length;i++){
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            multiplos2e3.push(numeros[i])
        }
        else if (numeros[i] % 2 == 0){
            multiplos2.push(numeros[i])
        }
        else if (numeros[i] % 3 == 0){
            multiplos3.push(numeros[i])
        }
    }
    alert(`Múltiplos de 2 ${multiplos2} Múltiplos de 3 ${multiplos3} e Múltiplos de 2 e de 3 ${multiplos2e3}`)
}
function exe3(){
    //cadastar codigo e quantidade em estoque 
    let codigos = [] , estoque = [] //declara os vetores
    for (let i =0; i<3;i++){
        codigos.push(prompt(`Informe o codigo do produto`))
        estoque.push(Number(prompt(`Informe a quantidade em estoque`)))
    }
        //comprando...
        let cliente = Number(prompt(`Informe codigo do cliente`))
        do{

            let codigo = prompt(`Informe a quantidade para compra `)
            let quantidade = Number(prompt(`informe a quabtidade do produto para compra`))

            //procura pra ver se o produto
            let posicao = codigo.indexOf(codigo)//função pra procurar um elemento/ quando ele nao acha retorna -1
            if(posicao == -1){//produto nao existe
                alert(`Codigo ${codigo} inexistente`)

            }
            else{//produto existe
                //tem em estoque
                if(estoque[posicao] >= quantidade){
                //atualiza o estoque
                estoque[posicao] = estoque[posicao] - quantidade
                alert(`Pedido atendido . Obrigado volte sempre`)
            }
            else{
                alert(`Não temos estoques suficente desta mercadoria`)
            }
            
        }
        cliente = Number(prompt(`Informe codigo do novo cliente . Digite 0 para encerrar`))
     }//fecha o do
while (cliente != 0)
    alert(`${codigos} ${estoque}`)
        
        
    }




