function entrada(mat ,vet){
    for(let i=0;i<12;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
           mat[i][j] = Number(prompt(`Infome a venda na semana ${j+1} do mês ${vet[i]}`))
        }
    }
}
function calcularTotalMes(mat ,vet){
    for(let i=0;i<mat.length;i++){
        let soma = 0 //vamos iniciar um novo mes
        for(let j=0;j<mat[i].length;j++){
                soma +=  mat[i][j]
            }
            alert(`Total vendido em ${vet[i]} foi de ${soma}`)
        }
      
    }

function calcularTotalSemana(mat){
        for(let j=0;j<4;j++){
        let soma = 0
        for(let i=0;i<12;i++){
            soma +=  mat[i][j]
        }
        alert(`Total vendido na semana ${j + 1} foi de ${soma}`)
    }
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<4;j++){
             soma +=   mat[i][j]
            }
        }
        return soma 

}        
function Exe5(){
    let mat = []
    const vet = ["janeiro","fevereiro","março","abril ","maio","junho","julho",
    "agosto","setembro","outubro","novembro","dezembro"]
    entrada(mat ,vet)
    calcularTotalMes(mat ,vet)
    calcularTotalSemana(mat)
    calculaTotalAno(mat)
    alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
 
}
Exe5()

//crie uma função que calcula e mostra a qtde de vendas maiores que 5000 em cada mes

//crie uma função que calcula e mostra os meses que tiveram vendas menores que 1000