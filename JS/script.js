var numSecreto = Math.floor(Math.random() * 100) + 1;

function verificar() {
  var palpite = document.getElementById("palpite").value;
  var mensagem = document.getElementById("mensagem");

  if (palpite < numSecreto) {
    mensagem.innerHTML = "Muito baixo!";
  } else if (palpite > numSecreto) {
    mensagem.innerHTML = "Muito alto!";
  } else {
    mensagem.innerHTML = "Você acertou!";
  }
}
