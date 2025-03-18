
//Lista 2
function exe1(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);
    //calcular média
    let media =(nota1 + nota2 + nota3 + nota4) / 4
    if(media >= 7){
        document.getElementById("media").innerText = "Aprovado com media " + media
    }
    else{
        document.getElementById("media").innerText = "Reprovado com media " + media
    }
    }
function exe2(){
    //recuperar dados do usuarios
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2
    if ((media >=0) && (media < 3)){
        document.getElementById("media").innerText = "Reprovado" + media
    }
    else if ((media >=3) && (media < 7)){
        document.getElementById("media").innerText = "Exame" + media
    }
    else if ((media >=7) && (media <= 10)){
        document.getElementById("media").innerText = "Aprovado" + media
    }
    else{
        document.getElementById("media").innerText = "Problema com notas" + media

}
}
function exe3(){
   let numero1 = Number(document.getElementById("numero1").value);
   let numero2 = Number(document.getElementById("numero2").value);
   let menor
   if (numero1 < numero2){
       document.getElementById("menor").innerText = " O Menor é : " + numero1
    
    }
     else if  (numero2 < numero1){
        document.getElementById("menor").innerText = " O Menor é : " + numero2
          
    }
    else{
        document.getElementById("menor").innerText = " Os dois são iguais " 
    }
}
   

function exe4(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);
    if (numero1 >= numero2 && numero1 >= numero3){
        document.getElementById("maior").innerText = " O maior é : " + numero1
    }
    else if (numero2 >= numero1 && numero2 >= numero3){
        document.getElementById("maior").innerText = " O maior é : " + numero2
    }
    else{ (numero3 >= numero1 && numero3 >= numero2)
        document.getElementById("maior").innerText = " O maior é : " + numero3
       

      }
    }
function exe5(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let selecao = Number(document.getElementById("selecao").value);
    //ultilizacao  do escolha
    switch(selecao){
        case 1: document.getElementById("resultado").innerText = ( numero1 + numero2) / 2
            break
        case 2: if(numero1 >= numero2){
        }
        else {
            document.getElementById("resulatdo").innerText = numero1 - numero2
        }
            break
        case 3: document.getElementById("resulatdo").innerText = numero1 * numero2
            break
        case 4: if ( numero2 !=0){
            document.getElementById("resulatdo").innerText = numero1 / numero2
        }  
        else{
            document.getElementById("resulatdo").innerText = "Divisão por zero"
        }  
                
            
    }
    
}
