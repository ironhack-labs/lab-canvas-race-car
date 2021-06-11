window.onload = () => {
  let started = false;
  document.getElementById('start-button').onclick = () => {
    if (!started) startGame();
  };

  function startGame() {
    started = true;
    raceApp.init()
  }
};