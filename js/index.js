window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceGame.init() // inicializamos el contexto
    raceGame.drawRoad() // pintamos carretera
  }
};
