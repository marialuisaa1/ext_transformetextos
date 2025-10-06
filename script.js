/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function(){
    /* Botão letras Maiúsculas */
    window.document.querySelector("#btnMaiuscula").addEventListener("click",function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })
    /* Botão Letra Minúscula */
    window.document.querySelector("#btnMinuscula").addEventListener("click",function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })
})