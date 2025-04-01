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
    let quantidade = 120
    let despesa = 200
    let lucro // guarda o lucro da preco do circo
    while(preco >= 1.0){
        lucro = (preco * quantidade) - despesa
        saida = saida + (`${preco} - ${quantidade} - ${despesa} - ${lucro} `)
        preco = preco - 0.50
        quantidade = quantidade + 26
    }
    document.getElementById("tabela").innerHTML = saida
}
  