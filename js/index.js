const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    //create a player
    const player = new Player(225, 550, 50, 50, "red", ctx);
    //create invisible
    //const invisible = new Invisible1(0, 550, 50, 100, "white", ctx);
    //const invisible2 = new Invisible2(450, 550, 50, 100, "white", ctx);

    //create the game
    //let game = new Game(ctx, 500, 700, player, invisible, invisible2);
    let game = new Game(ctx, 500, 700, player);

    game.start();

    //Keybindings

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          player.speedX += 1;
          break;
        case "ArrowLeft":
          player.speedX -= 1;
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      player.speedX = 0;
      player.speedY = 0;
    });

    function drawCanvas() {
      document.getElementById("canvas").style.backgroundImage =
        "url('./images/road.png')";
      document.getElementById("canvas").style.backgroundSize = "500px 700px";
    }
    drawCanvas();
  }
};
