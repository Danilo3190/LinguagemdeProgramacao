function seguir(){
    alert('voces agora esta seguindo Danilo S Rodrigues')
}
//exercicio 1
function exe1(){
    //vamos usar Dom para recuperar os dados do HTML
    //Dom - Document Object Model
    //Converte Texto para  numero - Number()
    let nro1 =Number( document.getElementById("nro1").value)
    let nro2 =Number( document.getElementById("nro2").value)
    //Vamos fazer uma subtração
    let sub = nro1 - nro2
    //vamos mostrar o resultado ao usuario
    //alert("A subtração é " + sub) 
    document.getElementById("sub").innerText = "O Resultado é : " + sub;
}
 function exe2(){

    //receber 3 numeros e depois multipliacar eles
    let nro1 =Number(document.getElementById("nro1").value)
    let nro2 =Number( document.getElementById("nro2").value)
    let nro3 =Number( document.getElementById("nro3").value)
    let resultado = nro1 * nro2 * nro3 ;
    // Exibe o resultado
    document.getElementById("Multiplicação").innerText ="O Resulatdo é : " * multiplicação;

}
function exe3(){
    //receber dois numeros e fazer a divisão
    let nro1 =Number( document.getElementById("nro1").value)
    let nro2 =Number( document.getElementById("nro2").value)
    let resultado = nro1 / nro2 ;
    document.getElementById("divisão").innerText = "O Resultado é : " /divsao;
}
function exe4(){
    //Solicite as notas ao usuario
    let nota1 =Number(document.getElementById("nota1").value)
    let nota2 =Number(document.getElementById("nota2").value)
    //definir peso
    const peso1 = 2
    const peso2 = 3
    //calcular media ponderada
    let mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    Document.getElementById("media").innerText = "O Resultado é : "
}
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    //Calcule novo preço com  desconto  de 10% 
    let novoPreco = preco * 0.9;
    //exibir novo preço
    document.getElementById("preco").innerText = "O Preco é : "
}
function exe6(){
    // Solicita o salário fixo ao usuário
    let salarioFixo =Number(Document.getElementById("salarioFixo").value)
    // solicite o valor de suas vendas
    let valorVendas = Number(document.getElementById("valorVendas").value)
    //calcule a comissao (4% das vendas)
    let comissao = valorVendas * 0.4;
    //Calcule Salario final(salario fixo + comissao)
    let salarioFinal =  salarioFixo + comissao;
    //Exibir o Resultado 
     document.getElementById("salario").innerText = "O Salario bruto  é : "
}
function exe7(){
   // Solicita o peso da pessoa
let peso = parseFloat(prompt("Digite o seu peso (em kg):"));

// Calcula o novo peso caso a pessoa engorde 15%
let pesoEngordar = peso * 1.15;

// Calcula o novo peso caso a pessoa emagreça 20%
let pesoEmagrecer = peso * 0.8;

// Exibe os resultados
alert(`Se você engordar 15%, seu novo peso será ${pesoEngordar} kg.`);
alert(`Se você emagrecer 20%, seu novo peso será ${pesoEmagrecer} kg.`);

}
