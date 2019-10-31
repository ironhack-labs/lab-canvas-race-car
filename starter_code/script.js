window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
}

window.onkeydown = e => {
  switch (e.key) {
    case "ArrowRight":
      px += speed;
      if (px > w - 120) {
        px = w - 120;
      }
      break;
    case "ArrowLeft":
      px -= speed;
      if (px < 50) {
        px = 50;
      }
      break;

  }
}



function startGame() {
  let myInterval= setInterval(() => {
    ctx.clearRect(0, 0, w, h);

    //draw
    createRoad();
    createCar();
    //move

    //obstacles
    if (counter % 120 === 0) {
      createObstacles();
    }
    obstacleArr.forEach(obst => {
      obst.drawRect() 
      if (px + 70 > obst.x &&
        px < obst.x + obst.width &&
        py < obst.y + obst.height &&
        py + 150 > obst.y) {
          console.log("Game Over");
          alert ("Game over mamón!");
          clearInterval(myInterval);
          
      }
    });
    
   
    //collitions

    //counter
    ctx.fillStyle = "white";
    ctx.font = "30px Georgia";
    ctx.fillText("Points: " + counter , 70, 95);
    counter++
  }, 1000 / 60);
}