window.onload = function() {
  //Game.init("canvas")
  console.log("hola")
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    console.log("startGame")
    Game.start()
  }
};
