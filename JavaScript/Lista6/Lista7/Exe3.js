function entrada(mat){
    for(let i=0;i<6;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = Math.floor(Math.random() * 31)
        }
    }
}
function calcula(mat){
    let soma =0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if(mat[i][j] )
            soma++
        }
    }
    return soma
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            if(mat [i][j]){
              maior = mat[i][j]
              menor = mat[i][j]  
            }
        }
    }
}
function Exe3(){
    let mat = []
    entrada(mat)
    calcula(mat)
    exibeMatriz(mat)
    alert(``)

}