function entrada(vetor){
    for(let i=0;i<10;i++){
        let obj = {
            nome : prompt(`Informe nome do produto ${i+1}`),
            codigo : Number(prompt(`Informe código do produto ${i+1}`)),
            preco : Number(prompt(`Informe preço do produto ${i+1}`)),
            novo: 0
        }
        vetor.push(obj)
    }
}
function novoPreco(vetor){
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

function exe9(){
    let vetor = []
    entrada(vetor)
    novoPreco(vetor)
}
exe9()
    
 