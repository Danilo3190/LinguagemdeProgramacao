function entrada(mat){
    for(let i=0;i<6;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = Math.floor(Math.random() * 31)
        }
    }
}
function calculaMaiorMenor(mat){
    let maior = mat[0][0],menor =[0][0]
    let iMaior = 0, jMaior = 0, jMenor = 0,iMenor = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if(mat[i][j] > maior ){
            maior = mat[i][j]
            iMaior = i
            jMaior = i
            }
            if(mat[i][j]< menor){
                menor = mat[i][j]
                iMenor = i
                jMenor = i
            }
        }
    }
    alert(mat)
    alert(`${maior}esta na posicao[${iMaior}][${jMaior}e o menor ${menor}na posicao[${iMenor}][${jMenor}]`)
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
    calculaMaiorMenor(mat)
    exibeMatriz(mat)
    alert(mat)

}