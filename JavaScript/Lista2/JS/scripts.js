
//Lista 2
function exe1(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);
    //calcular média
    let media =(nota1 + nota2 + nota3 + nota4) / 4
    if(media >= 7){
        document.getElementById("media").innerHTML = "Aprovado com media " + media
    }
    else{
        document.getElementById("media").innerHTML =  "Reprovado com media " + media
    }
    }
function exe2(){
    //recuperar dados do usuarios
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2
    if ((media >=0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado :  " + media
    }
    else if ((media >=3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame :  " + media
    }
    else if ((media >=7) && (media <= 10)){
        document.getElementById("media").innerHTML = "Aprovado : " + media
    }
    else{
        document.getElementById("media").innerHTML = "Problema com notas : " + media

}
}
function exe3(){
   let numero1 = Number(document.getElementById("numero1").value);
   let numero2 = Number(document.getElementById("numero2").value);
   let menor
   if (numero1 < numero2){
       document.getElementById("menor").innerHTML = " O Menor é : " + numero1
    
    }
     else if  (numero2 < numero1){
        document.getElementById("menor").innerHTML = " O Menor é : " + numero2
          
    }
    else{
        document.getElementById("menor").innerHTML = " Os dois são iguais " 
    }
}
   

function exe4(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);
    if (numero1 >= numero2 && numero1 >= numero3){
        document.getElementById("maior").innerHTML = " O maior é : " + numero1
    }
    else if (numero2 >= numero1 && numero2 >= numero3){
        document.getElementById("maior").innerHTML = " O maior é : " + numero2
    }
    else{ (numero3 >= numero1 && numero3 >= numero2)
        document.getElementById("maior").innerHTML = " O maior é : " + numero3
       

      }
    }
function exe5(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let selecao = Number(document.getElementById("selecao").value);
    //ultilizacao  do escolha
    switch(selecao){
        case 1: document.getElementById("resultado").innerHTML = ( numero1 + numero2) / 2
            break
        case 2: if(numero1 >= numero2){
        }
        else {
            document.getElementById("resulatdo").innerHTML = numero1 - numero2
        }
            break
        case 3: document.getElementById("resulatdo").innerHTML = numero1 * numero2
            break
        case 4: if ( numero2 !=0){
            document.getElementById("resulatdo").innerHTML = numero1 / numero2
        }  
        else{
            document.getElementById("resulatdo").innerHTML = "Divisão por zero"
        }  
                
            
    }
}
function exe6(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch(selecao){
        case 1: document.getElementById("resultado").innerHTML= "A potencia é : " +
        Match.pow(numero1, numero2)
              break
        case 2: document.getElementById("resultado").innerHTML = "RQ do numero1 " + Match.sqrt(numero1)
              break
        case 3: document.getElementById("resultado").innerHTML = "RC do numero1" + Match.cbrt(numero1)
        .toFixed(2) + "RC do numero2" + Math.cbrt(numero2).toFixed(2)
             break
    }
}
function exe7(){
    let salario = Number(document.getElementById("salario").value)
    //verificar salario
    if (salario < 500){
        document.getElementById("novo").innerHTML = "Novo salario " + (salario + salario*30/100)
        }
    else{
        document.getElementById("novo").innerHTML = "Salario maior ou igual a 500, sem reajuste"
    }   
    }
function exe8(){
    let salario = Number(document.getElementById("salario").value)
    //verificar salario
    if (salario < 0){
        document.getElementById("novo").innerHTML = "Salario negativo" 
        }
    else if (salario <= 300){
        document.getElementById("novo").innerHTML = "Novo salario" + (salario + salario*15/100)
       }  
     else {
            document.getElementById("novo").innerHTML = "Novo salario" + (salario + salario*15/100)
        }  

}
function exe9() {
    // Obtém o valor do saldo médio do input com id "media"
    let saldo = Number(document.getElementById("media").value);
    let credito = 0

    // Determinar o percentual de crédito com base no saldo médio
    if (saldo > 400) {
      credito = saldo * 30/100
    } 
    else if ((saldo > 300) && (saldo <= 400)){ 
        credito = saldo * 25/100
        
    }
    else if ((saldo > 200) && (saldo <=300)){ 
        credito = saldo * 20/100
    }
        
    else if ((saldo > 0) && (saldo <=200)){
        credito = saldo * 10/100
        
    } 
    else { //saldo negativo
        document.getElementById("media").innerHTML = "Saldo não pode ser negativo"
        return // saiu da função
       
    }

 // Exibe o resultado no elemento com id "credito"
        document.getElementById("credito").innerHTML = `saldo ${saldo} e credito ${credito}`;

     
}
function exe10() {
   let custo = Number(document.getElementById("custo").value)
   let distribuidor = 0
   let imposto = 0

   if (custo >= 0 && custo < 12000){
        distribuidor = custo * 5 /100
        imposto = 0
   }
   else if (custo >= 12000 && custo <= 25000){
    distribuidor = custo * 10 /100
    imposto = custo * 15 /100
   }
   else if (custo > 25000 ){
    distribuidor = custo * 15 /100
    imposto = custo * 20 /100
   }
   else {
        document.getElementById("consumidor").innerHTML = "Custo negativo"
        return // sai da funcao
   }
   let consumidor = custo + distribuidor
   document.getElementById("consumidor").innerHTML = `Custo da fabrica ${custo}<br/>
   distribuidor ${distribuidor} <br/> imposto ${imposto} <br/> Valor ao consumidor ${consumidor}`
}


function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade >= 0 && idade < 20){
        if (peso >= 0 && peso < 60){
            risco = 9
        }
        else if (peso > 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else risco = "peso inválido"
    }
    else if (idade >= 20 && idade <= 50){
        if (peso >= 0 && peso < 60){
            risco = 6
        }
        else if (peso > 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else risco = "peso inválido"
    }
    else if (idade > 50){
        if (peso >= 0 && peso < 60){
            risco = 3
        }
        else if (peso > 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else risco = "peso inválido"
    }
    else {
        risco = "idade inválida"
    }
    document.getElementById("risco").innerHTML = risco
}

function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = Number(document.getElementById("situacao").value)
    if (preco < 0){
        document.getElementById("resultado").innerHTML = "Preço inválido"
    }
    else {
        // calcula aumento
        let aumento
        switch(categoria){
            case 1: if (preco <= 25){
                        aumento = preco * 5/100
                    }
                    else {
                        aumento = preco * 12/100
                    }
                    break
            case 2: if (preco <= 25){
                        aumento = preco * 8/100
                    }
                    else {
                        aumento = preco * 15/100
                    }
                    break
            case 3: if (preco <= 25){
                        aumento = preco * 10/100
                    }
                    else {
                        aumento = preco * 18/100
                    }
                    break
        }
        // calcula imposto
        let imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = preco * 5/100
        }
        else {
            imposto = preco * 8/100
        }
        // calcula novo preço
        let novoPreco = preco + aumento + imposto
        // calcula classificação
        let classificacao
        if (novoPreco < 50){
            classificacao = "Barato"
        }
        else if (novoPreco >= 50 && novoPreco < 120){
                classificacao = "Normal"
        }
        else {
            classificacao = "Caro"
        }
        // resultado
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} Imposto ${imposto} Novo preço ${novoPreco} e Classificação ${classificacao}`
    }
}