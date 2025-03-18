
//Lista 2
function exe1(){
    let nota1 = Number(document.getElementById("nota1").Value);
    let nota2 = Number(document.getElementById("nota2").Value);
    let nota3 = Number(document.getElementById("nota3").Value);
    let nota4 = Number(document.getElementById("nota4").Value);
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
    let nota1 = Number(document.getElementById("nota1").Value);
    let nota2 = Number(document.getElementById("mota2").Value);
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
   let numero1 = Number(document.getElementById("numero1").Value);
   let numero2 = Number(document.getElementById("numero2").Value);
   if ((numero1 < numero2)){
    alert('O menor numero é: numero1');
    }
     else {
        alert('O menor numero é : numero2');
    }
   }


function exe4(){
    let numero1 = Number(document.getElementById("numero1").Value);
    let numero2 = Number(document.getElementById("numero2").Value);
    let numero3 = Number(document.getElementById("numero3").Value);
    if ((numero1 < numero2) && (numero1 < numero3)){
       ((numero2 < numero1)) && ((nuemro2 < numero3))
       ((nuemero3 < numero1)) && ((numero3 < numero2))
     alert('O menor numero é: numero1');
     alert('O menor numero é: numero2');
     }
      else {
         alert('O menor numero é : numero3');
     }
    }

