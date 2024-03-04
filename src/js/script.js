document.addEventListener("DOMContentLoaded", function () {
  var numerosAleatorios = []; // Array para armazenar os números aleatórios
  var currentIndex = 0; // Índice do número atual

  // Adiciona o manipulador de evento ao botão "Gerar"
  document
    .querySelector(".btn-generate button")
    .addEventListener("click", function () {
      // Se todos os espaços já foram preenchidos, reinicie o índice e a array
      if (currentIndex >= numerosAleatorios.length) {
        currentIndex = 0;
        numerosAleatorios = gerar15NumerosAleatorios();
        limparNumerosAntigos();
      }

      // Seleciona o próximo item vazio
      var numerosGeradosDiv = document.querySelectorAll(
        ".container-numbers .item"
      );
      var proximoItemVazio = null;

      numerosGeradosDiv.forEach(function (item, index) {
        if (index === currentIndex && !item.innerText.trim()) {
          proximoItemVazio = item;
        }
      });

      // Se houver um próximo item vazio, exibe o próximo número aleatório
      if (proximoItemVazio) {
        proximoItemVazio.innerText = numerosAleatorios[currentIndex];
        currentIndex++;
      }
    });
});

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerar15NumerosAleatorios() {
  var numeros = [];
  var min = 1;
  var max = 25;

  for (var i = 0; i < 15; i++) {
    var novoNumero;
    do {
      novoNumero = gerarNumeroAleatorio(min, max);
    } while (numeros.includes(novoNumero)); // Garante que o número não se repita
    numeros.push(novoNumero);
  }

  return numeros;
}

function limparNumerosAntigos() {
  var numerosGeradosDiv = document.querySelectorAll(".container-numbers .item");
  numerosGeradosDiv.forEach(function (item) {
    item.innerText = "";
  });
}
