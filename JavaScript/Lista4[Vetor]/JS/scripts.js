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
    function exe4(){
    // declaração do vetor
    let vetor = []
    // usuário informa 15 números
    for(let i=0;i<15;i++){
        vetor.push(Number(prompt(`Informe o ${i+1}o. número `)))
    }
    // verifica os número iguais a 30 e mostrar a posição onde estão
    let posicoes = []
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            posicoes.push(i)
        }
    }
    alert(`Número 30 encontrado nas posições ${posicoes}`)
}
function exe5(){
    // declaração dos vetores
    let logica = [], linguagem = []
    // entrada de dados
    for(let i=0;i<15;i++){
        logica.push(Number(prompt(`Informe o ${i+1}o. aluno que faz a disciplina Lógica`)))
    }
    for(let i=0;i<10;i++){
        linguagem.push(Number(prompt(`Informe o ${i+1}o. aluno que faz a disciplina Linguagem`)))
    }
    // encontrar a intersecção
    let interseccao = []
    
    for(let i=0;i<15;i++){ // percorre o vetor logica
        // indexOf() percorre o vetor linguagem e procura por logica[i]
        let posicao = linguagem.indexOf(logica[i])
        if (posicao != -1){ // caso encontrou
            interseccao.push(logica[i])
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem ${interseccao}`)
}
function exe6(){
    let vendas = [], percentuais = [], nomes = []
    for(let i=0;i<5;i++){
        nomes.push(prompt(`Informe nome do ${i+1}o vendedor`))
        vendas.push(Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)))
        percentuais.push(Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)))
    }
}
 function exe7(){
    let vetor = []
    for (let i=0; i<5; i++){
        vetor.push(Number(prompt(`Informe o numero ${i}°`)))
    }
    //conta os nagativos  e soma os positivos
    let conta = 0
    let soma = 0
    for(let i=0;i<5; i++){
        if(vetor[i] < 0){
            conta++
     }
    else{
        soma += vetor[i]
     }
}
alert(`Contagem de negativos ${conta} e soma dos positivos ${soma}`)
 }
 function exe8(){
    let nomes = [], medias = []
    //entrada de dados 
    for(let i=0; i<7; i++)
    if(medias[i] > maior ){
        maior = medias[i]
    }
    //nome do aluno com maior media
    let posicao = medias.indexOf(maior)
    alert(`Nome do aluno com maior media ${maior} é ${nomes[posicao]}`)
    for(let i=0;i<7; i++){
        if(medias[i]<7){
            alert(`${nome[i]} precisa tirar ${10- medias[i]}`)
        }
      
    }

 }
 function exe9(){
    let nomes = [], codigos = [], precos = []
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe nome do produto ${i+1}`))
        codigos.push(Number(prompt(`Informe código do produto ${i+1}`)))
        precos.push(Number(prompt(`Informe preço do produto ${i+1}`)))
        // let x = (int) (Math.random() * 10)
    }
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        let novo
        if (codigos[i] % 2 == 0 && precos[i] > 1000){
            novo = precos[i] + precos[i] * 20/100
        }
        else if (codigos[i] % 2 == 0){
            novo = precos[i] + precos[i] * 15/100
        }
        else if (precos[i] > 100){
            novo = precos[i] + precos[i] * 10/100
        }
        else {
            novo = precos[i]
        }
        alert(`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${novo}`)
    }
}
function exe10(){
    let vetor1 = [] , vetor2 = []
    let vetorr1 = [] , vettorr2 = []
    //entrada de dados
    for(let i=0;i<10;i++){
        vetor1.push(Number(prompt(`Informe o ${i+1} o elemento do vetor 1`)))
    }

    for(let i=0;i<5;i++){
        vetor2.push(Number(prompt(`Informe o ${i+1} o elemento do vetor 2`)))
    }
    //calcular o vetor resultante 1
    //calcular a soma dos elementos do vetor 2
    let somaVet2 = 0
    for(let i=o;i<5;i++){
        somaVet2 += vetor2[i]
    }
    //cria o vetor resultante 1
    for(let i=0;i<10;i++){
        if(vetor1[i] % 2 == 0 ){
            vetor1.push(vetor1[i] + somaVet2)
        }
    }
alert(`Vetor resultante 1 ${vetor1} `)
//calcula vetor resultante 2
for(let i=0;i<10;i++){//para cada elemento do vetor 1
    if(vetor1[i] % 2 == 0){//verifica se elemento é impar
        let qtdeDivisores = 0
        for(let j=0;j<5;j++){//para cada elemento de vetor 2
            if(vetor1[i % vetor2[j] == 0]){//encontrou um divisor
                qtdeDivisores++//conta +1 nos divisores
            }
        }
        vettorr2.push(qtdeDivisores)//adicionar contadores no vetor2
    }

}
alert(`Vetor resulatado 2 ${vettorr2}`) //adicinar contador no vetor2
 }
