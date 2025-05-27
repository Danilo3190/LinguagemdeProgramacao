function entrada(vetor){
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
}
function gerarRelatorio(vetor){
     // relação dos vendedores e os valores a receber
     let relatorio = ''
     for(let i=0;i<3;i++){
         relatorio += `\nVendedor: ${vetor[i].nome} vai receber ${vetor[i].comissao}`
     }
     alert(relatorio)
}
function totalVendas(vetor){
     // total das vendas de todos os vendedores
     let somaVendas = 0
     for(let i=0;i<3;i++){
         somaVendas = somaVendas + vetor[i].vendas
     }
     alert(`Total de vendas ${somaVendas.toFixed(2)}`)
}
function calculaComissao(vetor){
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
function exe6(){//orinetacão objeto
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
    totalVendas(vetor)
    calculaComissao(vetor)
    // entrada de dados
   
   
   
}
exe6()