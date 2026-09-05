var peso = document.getElementById("peso")
var altura = document.getElementById("altura")
var calcular = document.getElementById("calcular")
var resultado = document.getElementById("resultado")

calcular.addEventListener("click", function() {
    
    var valorPeso = Number(peso.value)
    var valorAltura = Number(altura.value)

    if (valorPeso <= 0 || valorAltura <= 0) {
        resultado.innerHTML = "<p>Digite valores válidos.</p>"
        return
      }

    var imc = valorPeso / (valorAltura * valorAltura)

    imc = imc.toFixed(2)

    var classificacao

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso normal"
    } else if (imc < 30) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }

    resultado.innerHTML = `
        <p class="imc">Seu IMC é ${imc}</p>
        <p class="classificacao">${classificacao}</p>
    `

})