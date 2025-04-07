function exe1(){
    //recuperar o valor do usuario
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 //variavel que conta  quantas vezes o laço vai se repetir
    let aux //sera utilizado nas trocas das variaveis a , b , c , d
    while (i <= 3){ 
        if(a > b){
            aux = a; a = b; b = aux;
        }
        if(b > c){
            aux = b; b = c; c = aux;
        }
        if(c > d){
            aux = c; c = d; d = aux;
        }
        
        i++//incrementa i
    }
    document.getElementById("ordenado").innerHTML = `Ordem crescente ${a} ${b} ${c} ${d} e ordem descrescente ${d} ${c} ${b} ${a}`;

}
function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro // guarda o lucro da peço de teatro
    let saida = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td>${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}
function exe3(){
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0 , faixa5 = 0
    //estrutura de repetição  for 
    // let i = 1 será executado uma uinca vez , logo no inicio
    // i <= 8 sera execuatado toda vez , antes de entrar no loop
    // i++ sera execuatdo toda vez , antes de ir para proxima iteração

    for (let i = 1; i <=8; i++){
        idade = Number(prompt(`informe a idade ${i}`))
        if (idade >= 0 && idade <= 15){
                faixa1++
        }
        else if (idade > 15 && idade <= 30){
                faixa2++
        }
        else if (idade > 30 && idade <= 45){
                 faixa3++
        }
        else if (idade > 45 && idade <= 60 ){
                 faixa4++
        }
         else if (idade > 60 ){
                 faixa5++
}
else {
    alert (` Idade negativa` )
}
document.getElementById("resultado").innerHTML = ` 
F1: &{faixa1} <br/>F2: &{faixa2} <br/>F3: &{faixa3} <br/>F4: &{faixa4} <br/>F5: &{faixa5} <br/>`
`<br/> %F1: ${faixa1/8*100}% <br/> <br/> %F2: ${faixa2/8*100}% <br/> <br/> %F3: ${faixa3/8*100}% <br/>
<br/> %F4: ${faixa4/8*100}% <br/>  <br/> %F5: ${faixa5/8*100}% <br/>`
    
}
-
}
function exe4(){
    //recuperar o numero fornecido pelo usuario
    let numero = Number (Document.getElementById("numero").value)
    let resultado = ""
    //estrutura de repetição  para calcular a tabuada do numero
    For (let numero = 1; numero <= 10; numero++){
        (let i = 0; i <= 10; i++)
        resultado += `${numero} * ${i} = ${numero * i} <br/>`
    }
}