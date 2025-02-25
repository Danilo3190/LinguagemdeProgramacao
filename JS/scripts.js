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