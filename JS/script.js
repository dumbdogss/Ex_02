var numSecreto = Math.floor(Math.random() * 100) + 1;

function verificar() {
  var palpite = document.getElementById("palpite").value;
  var mensagem = document.getElementById("mensagem");

  if (palpite < numSecreto) {
    mensagem.innerHTML = "Ta baixo!";
  } else if (palpite > numSecreto) {
    mensagem.innerHTML = "Ta alto!";
  } else {
    mensagem.innerHTML = "Acertou!";
  }
}
