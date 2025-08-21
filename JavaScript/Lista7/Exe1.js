function entrada(mat){
    for(let i=0;i<50;i++){
        mat[i] = []//cria cada linha da matriz
        for(let j=0;j<50;j++){
            mat[i][j] = parseInt(Math.random() * 10) + 15// gera número aleatório entre 0 e 9
        }
    }
}
function somaEntre1e50(mat){
    let soma = 0
    for(let i=0;i<50;i++){
        for(let j=0;j<50;j++){
            if (mat[i][j] >= 1 && mat[i][j] <= 50){
                soma++
            }
        }
    }
    return soma 
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
function Exe1(){
    let mat = []
    entrada(mat)
    alert(`A qtde de elementos entre 1 e 50 é ${somaEntre1e50(mat)}`)
    exibeMatriz(mat)
}
Exe1()