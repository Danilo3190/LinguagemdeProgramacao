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
function calculaVendasMaior5000(mat , vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if(mat[i][j]> 5000){
                qtde++
            }
           
        }
        alert(`Em ${vet[i]} teve ${qtde}vendas maiores que R$ 5.000,00`)
    }

}       
function calculaVendasMenor1000(mat , vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if(mat[i][j] < 1000){
                qtde++
            }
           
        }
        if(qtde > 0){
            alert(`Em ${vet[i]} teve ${qtde}vendas menores que R$ 1.000,00`)
        }
        
    }
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
    calculaVendasMaior5000(mat,vet)
    calculaVendasMenor1000(mat , vet)
 
}
Exe5()

