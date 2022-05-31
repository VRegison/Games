var jogador_escolha = 0;
var computador_escolha = 0;
var jogadorPontuacao = 0;
var computadorPontuacao = 0;

var ganhador = -1;

function jogar(escolha) {
  jogador_escolha = escolha;

  computador_escolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  // 1 - pedra
  // 2 - papel
  /// 3 - tesoura
  if (jogador_escolha == 1 && computador_escolha == 1) {
    ganhador = 0;
  } else if (jogador_escolha == 1 && computador_escolha == 2) {
    ganhador = 2;
  } else if (jogador_escolha == 1 && computador_escolha == 3) {
    ganhador = 1;
  } else if (jogador_escolha == 2 && computador_escolha == 1) {
    ganhador = 1;
  } else if (jogador_escolha == 2 && computador_escolha == 2) {
    ganhador = 0;
  } else if (jogador_escolha == 2 && computador_escolha == 3) {
    ganhador = 2;
  } else if (jogador_escolha == 3 && computador_escolha == 1) {
    ganhador = 2;
  } else if (jogador_escolha == 3 && computador_escolha == 2) {
    ganhador = 1;
  } else if (jogador_escolha == 3 && computador_escolha == 3) {
    ganhador = 0;
  }

  document.getElementById("jogador_escolha_1").classList.remove("selecionado");
  document.getElementById("jogador_escolha_2").classList.remove("selecionado");
  document.getElementById("jogador_escolha_3").classList.remove("selecionado");

  document
    .getElementById("computador_escolha_1")
    .classList.remove("selecionado");
  document
    .getElementById("computador_escolha_2")
    .classList.remove("selecionado");
  document
    .getElementById("computador_escolha_3")
    .classList.remove("selecionado");

  document
    .getElementById("jogador_escolha_" + jogador_escolha)
    .classList.add("selecionado");
  document
    .getElementById("computador_escolha_" + computador_escolha)
    .classList.add("selecionado");

  if (ganhador == 0) {
    document.getElementById("mensagens").innerHTML = "empate";
  } else if (ganhador == 1) {
    document.getElementById("mensagens").innerHTML = "Jogador ganhou";
    jogadorPontuacao++;
  } else if (ganhador == 2) {
    document.getElementById("mensagens").innerHTML = "computador ganhou";
    computadorPontuacao++;
  }
  document.getElementById("jogador_pontos").innerHTML = jogadorPontuacao;
  document.getElementById("computador_pontos").innerHTML = computadorPontuacao;
}

function mudaCor(cor){
document.getElementById("jogador").style.backgroundColor = cor;
}
