
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
