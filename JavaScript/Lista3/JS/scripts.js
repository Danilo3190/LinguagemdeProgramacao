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
    nt.getElementById("tabela").innerHTML = `saida`
}
function exe3(){
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
    let idade
    // estrutura de repetição for
    // let i = 1 será executado uma única vez, logo no início
    // i <= 8 será executado toda vez, antes de entrar no loop
    // i++ será executado toda vez, antes de ir para próxima iteração 
    for (let i = 1; i <= 8; i++){
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >= 0 && idade <= 15){
            faixa1++
        }
        else if (idade > 15 && idade <= 30){
            faixa2++
        }
        else if (idade > 30 && idade <= 45){
            faixa3++
        }
        else if (idade > 45 && idade <= 60){
            faixa4++
        }
        else if (idade > 60){
            faixa5++
        }
        else {
            alert(`Idade negativa`)
        }
    }
    document.getElementById("resultado").innerHTML = 
     `F1: ${faixa1} <br/>F2: ${faixa2} <br/>F3: ${faixa3} <br/>F4: ${faixa4} <br/>F5: ${faixa5} <br/> %F1: ${faixa1/8*100}% <br/> %F5: ${faixa5/8*100}%`
}
function exe4() {
    // Recupera o número fornecido pelo usuário
    let numero = Number(document.getElementById("numero").value);
    let resultado = "<table border='1'>"; // Cria a estrutura inicial da tabela
    resultado += "<tr><th>Multiplicação</th><th>Resultado</th></tr>"; // Cabeçalho da tabela
    
    // Estrutura de repetição para calcular a tabuada do número
    for (let i = 0; i <= 10; i++) {
        resultado += `<tr><td>${numero} * ${i}</td><td>${numero * i}</td></tr>`;
    }
    resultado += "</table>"; // Fecha a tabela
    
    // Insere o resultado na página HTML
    document.getElementById("resultado").innerHTML = resultado;
}
function exe5() {
    let resultado = "<table border='1'>"; // Cria a estrutura inicial da tabela
    
    for (let numero = 1; numero <= 10; numero++) {
        resultado += `<tr><th colspan="2">Tabuada do ${numero}</th></tr>`; // Cabeçalho indicando o número da tabuada
        
        for (let i = 0; i <= 10; i++) {
            resultado += `<tr><td>${numero} * ${i}</td><td>${numero * i}</td></tr>`; // Linhas com multiplicações e resultados
        }
    }
    
    resultado += "</table>"; // Fecha a tabela
    
    // Insere o resultado na página HTML
    document.getElementById("resultado2").innerHTML = resultado;

}