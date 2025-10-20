/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function () {
  /* Botão letras Maiúsculas */
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result-textarea").innerHTML =
        inputText.toUpperCase();
    });
  /* Botão Letra Minúscula */
  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result-textarea").innerHTML =
        inputText.toLowerCase();
    });
  // Botão Primeira letra Maiúscula
  window.document
    .querySelector("#btnPrimeira")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value.toLowerCase();
      document.querySelector("#result-textarea").innerHTML =
        inputText.charAt(0).toUpperCase() + inputText.slice(1);
    });
  // Botão Limpar
  window.document
    .querySelector("#btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = "";
      document.querySelector("#result-textarea").innerHTML = "";
    });
  // Botão listar
  window.document
    .querySelector("#btnListar")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let palavras = inputText.split(" ");
      document.querySelector("#result-textarea").innerHTML = palavras.join("\n");
    });
});
