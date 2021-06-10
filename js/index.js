window.onload = () => {
  let started = false;
  document.getElementById("start-button").onclick = () => {
    if (!started) startGame();
  };

  function startGame() {
    started = true;
    const canvas = new Canvas(500, 700, document.getElementById("canvas"));
    canvas.init();
  }
};
