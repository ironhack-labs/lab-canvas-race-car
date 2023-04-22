window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvasElement = document.getElementById("canvas");
  let ctx = canvasElement.getContext("2d");
  
  let road = document.createElement("img");
  road.src = "images/road.png";
  
  let player = document.createElement("img");
  player.src = "images/car.png"
    
  function startGame() {
    road.onload = () => {
      player.onload = () => {
        ctx.drawImage(road, 0, 0, 500, 700);
        ctx.drawImage(player, 230, 580, 40, 80);
      }
    }
  }
}

/* document.body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    player.x -= 10px
  }
}) */



