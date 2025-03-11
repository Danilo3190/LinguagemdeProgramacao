function seguir() {
    alert('voces agora esta seguindo Danilo S Rodrigues')
}
//exercicio 1
function exe1() {
    //vamos usar Dom para recuperar os dados do HTML
    //Dom - Document Object Model
    //Converte Texto para  numero - Number()
    let nro1 = Number( document.getElementById("nro1").value)
    let nro2 = Number( document.getElementById("nro2").value)
    //Vamos fazer uma subtração
    let sub = nro1 - nro2;
    //vamos mostrar o resultado ao usuario
    //alert("A subtração é " + sub) 
    document.getElementById("sub").innerText = "O Resultado é : " + sub;
}
 function exe2() {

    //receber 3 numeros e depois multipliacar eles
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number( document.getElementById("nro2").value)
    let nro3 = Number( document.getElementById("nro3").value)
    let sub = nro1 * nro2 * nro3;
    // Exibe o resultado
    document.getElementById("sub").innerText ="O Resulatdo é : " +sub ;

}
function exe3() {
    //receber dois numeros e fazer a divisão
    let nro1 = Number( document.getElementById("nro1").value)
    let nro2 = Number( document.getElementById("nro2").value)
    let sub = nro1 / nro2;
    document.getElementById("sub").innerText = "O Resultado é : " + sub;
}
function exe4() {
    //Solicite as notas ao usuario
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    //definir peso
    const peso1 = 2;
    const peso2 = 3;
    //calcular media ponderada
    let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    document.getElementById("media").innerText = "O Resultado é : " + media;
}
function exe5() {
    let preco = Number(document.getElementById("preco").value)
    //Calcule novo preço com  desconto  de 10% 
    let desconto = (preco * 10)/100
    //exibir novo preço
    document.getElementById("desconto").innerText = "O Preco desconto  é : " +desconto;
}
function exe6() {
    // Solicita o salário fixo ao usuário
    let salarioFixo = Number(document.getElementById("salarioFixo").value);
    // Solicita o valor das vendas
    let valorVendas = Number(document.getElementById("valorVendas").value);

    // Calcula a comissão (4% das vendas)
    let comissao = valorVendas * 0.04;

    // Calcula o salário final (salário fixo + comissão)
    let salarioFinal = salarioFixo + comissao;

    // Atualiza o elemento HTML com o resultado
    document.getElementById("salario").innerText = "O Salário bruto é: R$ " + salarioFinal.toFixed(2);
}


function exe7() {
    // Solicita o peso da pessoa
    let peso = Number(document.getElementById("peso").value);

    // Calcula o novo peso caso a pessoa engorde 15%
    let pesoMaior = peso * 1.15;

    // Calcula o novo peso caso a pessoa emagreça 20%
    let pesoMenor = peso * 0.8;

    // Atualiza os labels com os resultados
    document.getElementById("pesoMaior").innerText = "O peso com 15% a mais é: " + pesoMaior.toFixed(2) + " kg";
    document.getElementById("pesoMenor").innerText = "O peso com 20% a menos é: " + pesoMenor.toFixed(2) + " kg";
}


function exe8() {
    let peso = Number(document.getElementById("peso").value)
    let gramas = peso * 1000
    document.getElementById("gramas").innerText = "Peso em gramas" + gramas;
}
function exe9() {
    // Obter os valores das entradas
    let baseMenor = Number(document.getElementById("baseMenor").value);
    let baseMaior = Number(document.getElementById("baseMaior").value);
    let altura = Number(document.getElementById("altura").value);

    // Calcular a área do trapézio
    let trapezio = ((baseMenor + baseMaior) * altura) / 2;

    // Exibir o resultado
    document.getElementById("resultado").innerText = "A área do trapézio é: " + trapezio.toFixed(2);
}

function exe10() {
    // Lê os valores dos lados fornecidos pelo usuário
    let ladoA = Number(document.getElementById("ladoA").value);
    let ladoB = Number(document.getElementById("ladoB").value);

    // Calcula a área do quadrado/retângulo (ladoA * ladoB)
    let area = ladoA * ladoB;

    // Atualiza o elemento HTML com o resultado
    document.getElementById("resultado").innerText = "A área do quadrado/retângulo é: " + area.toFixed(2) + " m²";
}



