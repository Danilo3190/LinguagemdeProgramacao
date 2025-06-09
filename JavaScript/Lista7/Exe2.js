function entrada(mat){
    for(let i=0;i<2;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Math.floor(Math.rondon ()*10)//gerar numeros de 0 e 20
         }
    }
}
function contaElementosEntre12e20(mat){
    let conta = 0
    for(let i=0;i<2;i++){//para cada linha]
        conta = 0 // zera contagem
        for(let j=0;j<4;j++){
          if(mat[i][j] >= 12 && mat[i][j] <= 20){
            conta++
          }
     }
     alert(`A qtde de elementos entre 12 e 20 na linha${i} é ${conta}`)
    }

}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function mediaElementosPares(mat){
    let soma = 0
    let qtde = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] % 2 == 0){
                soma = soma + mat[i][j]
                qtde++
            }
        }
    }
    return soma / qtde
}
function Exe2(){
    let mat = []
    entrada(mat)
    contaElementosEntre12e20(mat)
    exibeMatriz(mat)
    mediaElementosPares(mat)
    alert(`A media dos elementos pares é ${mediaElementosPares(mat)}`)
}
Exe2()