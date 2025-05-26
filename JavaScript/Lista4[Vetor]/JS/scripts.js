function exe3(){
    //cadastrar codigo e qtd em estoque//orinetação objeto
     let vetor = []
     for(let i=0; i<3;i++){
         // cria objeto
         let objeto = {
             codigo: prompt(`Informe o código do produto`),
             estoque: Number(prompt(`Informe a qtde em estoque`)),
             preco: Number(prompt(`Informe o preço do produto`))
         }
         // adiciona objeto no vetor
         vetor.push(objeto)
     }
     // comprando ...
     let cliente = Number(prompt(`Informe código do cliente`))
     do {
         let codigo = prompt(`Informe código do produdo para compra`)
         let qtde = Number(prompt(`Informe a qtde do produto para compra`))
         // procura pra ver se o produto existe
         let produtoEncontrado
         let i
         for(i=0;i<3;i++){
             if (vetor[i].codigo == codigo){ // produtor encontrado
                 produtoEncontrado = vetor[i] // guarda produto em produtoEncontrado
                 break // pára de procurar - sair do for
             }
         }
         if (i == 3){ // produto não existe
             alert(`Código ${codigo} inexistente`)
         }
         else { // produto existe
             // tem em estoque suficiente
             if ( produtoEncontrado.estoque >= qtde){
                 // atualiza o estoque
                 produtoEncontrado.estoque -= qtde
                 alert(`Pedido atendido. Obrigado e volte sempre`)
             }
             else { 
                 alert(`Não temos estoque suficiente desta mercadoria`)
             }
         }
         cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))
     } // fecha o do
     while (cliente != 0)
     console.log(vetor)
 }



function exe6(){//orinetacão objeto
    let vetor = []
    // entrada de dados
    for(let i=0;i<3;i++){
        let objeto = {
        nome:(prompt(`Informe nome do ${i+1}o vendedor`)),
        vendas:(Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`))),
        percentual:(Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)))
        }
       
        // calcula a comissão // orientacao obj
        objeto.comissao =(objeto.vendas * objeto.percentual) / 100
        //add o obj no vetor
        vetor.push(objeto)
    }
  
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0;i<3;i++){
        relatorio += `\nVendedor: ${nomes[i].nome} vai receber ${vetor[i].comissao}`
    }
    alert(relatorio)
    // total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0;i<3;i++){
        somaVendas = somaVendas + vetor[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    // calcula o maior e menor valor de comissão
    let objMaior = vetor[0] // primeiro é o maior
    let objMenor = vetor[0] // primeiro é o menor
    for(let i=1;i<3;i++){
        if (vetor[i].comissao > Maior.comissao){
            Maior = vetor[i]
        }
        if (vetor[i] < Menor.comissao){
            Menor = vetor[i]
        }
    }
   
    alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
    alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe9(){//orientação obejto
        let vetor = []
        for(let i=0;i<10;i++){
            let obj = {
                nome : prompt(`Informe nome do produto ${i+1}`),
                codigo : Number(prompt(`Informe código do produto ${i+1}`)),
                preco : Number(prompt(`Informe preço do produto ${i+1}`)),
                novo: 0
            }
            vetor.push(obj)
        }
        // gerar o relatório com os novos preços
        for(let i=0;i<10;i++){
            if (vetor[i].codigo % 2 == 0 && vetor[i].preco > 1000){
                vetor[i].novo = vetor[i].preco + vetor[i].preco * 20/100
            }
            else if (vetor[i].codigo % 2 == 0){
                vetor[i].novo = vetor[i].preco + vetor[i].preco * 15/100
            }
            else if (vetor[i].preco > 100){
                vetor[i].novo = vetor[i].preco + vetor[i].preco * 10/100
            }
            else {
                vetor[i].novo = vetor[i].preco
            }
            alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
        }
    }
    function exe10(){
        let vetor1 = [], vetor2 = []
        let vetorr1 = [], vetorr2 = []
        // entrada de dados
        for(let i=0;i<10;i++){
            vetor1.push(Number(prompt(`Informe o ${i+1}o. elemento do vetor 1`)))       
        }
        for(let i=0;i<5;i++){
            vetor2.push(Number(prompt(`Informe o ${i+1}o. elemento do vetor 2`)))       
        }
        // calcular o vetor resultante 1
        // calcular a soma dos elementos do vetor2
        let somaVet2 = 0
        for(let i=0; i<5;i++){
            somaVet2 += vetor2[i]
        }
        // cria o vetor resultante 1
        for(let i =0;i < 10; i++){
            if (vetor1[i] % 2 == 0){
                vetorr1.push(vetor1[i] + somaVet2)
            }
        }
        alert(`Vetor resultante 1 ${vetorr1}`)
        // calcula vetor resultante 2
        for(let i=0;i<10;i++){ // para cada elemento de vetor 1
            if (vetor1[i] % 2 == 1) {// verifica se elemento é ímpar
                let qtdeDivisores = 0
                for(let j=0;j<5;j++){ // para cada elemento de vetor 2
                    if (vetor1[i] % vetor2[j] == 0 ) { // encontrou um divisor
                        qtdeDivisores++ // conta +1 nos divisores
                    }
                }
                vetorr2.push(qtdeDivisores) // adiciona contador no vetorr2
            }
        }
        alert(`Vetor resultante 2 ${vetorr2}`)
    }
