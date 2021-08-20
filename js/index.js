window.onload = () => {
  const startButton = document.getElementById("start-button");

  startButton.onclick = () => {
    app.startGame();
    startButton.setAttribute("disabled", true);
  };
};
