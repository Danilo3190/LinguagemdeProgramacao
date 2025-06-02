function entrada(mat){
    //sera 3x 
    for(let i=0;i<3;i++){
        mat[i]=[]//criar cada linha da matriz
        for(let j=0;j<3;j++)
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}]da matriz`))

    }
}
function calcularSomaDiagonalPrincipal(){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i == j){
                soma +=mat[i][j]
            }
        }
    }
    //função vai retonar soma]
    return soma
}
function exemplo(){
    let mat = []
    entrada(mat)
    alert(`A soma da diagonal principal é ${calcularSomaDiagonalPrincipal(mat)}`)// ou fazer${soma}

}
exemplo()
