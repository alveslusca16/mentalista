var tentativas = 10;
var elementoJogo = document.getElementById("jogo");
elementoJogo.style.display = 'none'
var elementoStartGame = document.getElementById("start-game");
elementoStartGame.style.display = 'block'
var numeroTentativas = 0

function iniciarJogo() {
  elementoStartGame.style.display = 'none'
  elementoJogo.style.display = 'block'
  document.getElementById("anunciadoJogo").innerHTML = `
  Digite um número entre 0 e 1000, você têm ${tentativas} tentativas!`;
}

var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas2 = 10;

function playAgain() {
  numeroSecreto = parseInt(Math.random() * 1001)
  numeroTentativas++
  tentativas2 = 10
  document.getElementById("tentativas").innerHTML = `Número de tentativas: ${tentativas2}`
  document.getElementById("resultadoJogo").innerHTML = `Digite o seu número e aperte ENTER para iniciar novamente.`
}

function enter() {
  var tentarNovamente = "Tentar Novamente"
  var numeroUsu = parseInt(document.getElementById("numeroUsuario").value)
 
    if (numeroUsu == numeroSecreto) {
      document.getElementById("resultadoJogo").innerHTML = `Acertou! O número secreto era ${numeroUsu}!`
      document.getElementById("btnTn").innerHTML = `<button onClick="playAgain()" id="btn-again">${tentarNovamente}</button>`
    } 
  
   while (numeroUsu != numeroSecreto) {
     document.getElementById("tentativas").innerHTML = `Número de tentativas: ${tentativas2} <br> Game Over: ${numeroTentativas}`
    if (tentativas2 == 0) {
      document.getElementById("resultadoJogo").innerHTML = `Game Over! Suas tentativas acabaram o número secreto era ${numeroSecreto}:(`
      document.getElementById("btnTn").innerHTML = `<button onClick="playAgain()" id="btn-again">${tentarNovamente}</button>`
      break
    } else if (numeroUsu < numeroSecreto) {
      document.getElementById("resultadoJogo").innerHTML = `Você digitou ${numeroUsu} e errou! O número secreto é maior.`
      tentativas2--
    } else if (numeroUsu > numeroSecreto) {
      document.getElementById("resultadoJogo").innerHTML = `Você digitou ${numeroUsu} e errou! O número secreto é menor.`
      tentativas2--
    }
     return
  }
}

