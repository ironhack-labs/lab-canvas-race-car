  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');  
  
  const imageRoad = new Image();
  imageRoad.src = "./images/road.png";
  
  const imageCar = new Image();
  imageCar.src = "./images/car.png";
  
  const playerCar = new PlayerCar(225,600,imageCar,50,100);
  const game = new Game(playerCar,imageRoad,canvas,ctx);

  window.onload = () => {  
    document.getElementById('start-button').onclick = () => {     
      update();
    }


    document.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowLeft":
            playerCar.goLeft()
            break;
          case "ArrowRight":
            playerCar.goRight();
            break;
          default:
            return;
        }
      }); 

      document.addEventListener("keyup", (event) => {
        switch (event.key) {
          case "ArrowLeft":
            playerCar.speedX = 0;
            break;
          case "ArrowRight":
            playerCar.speedX = 0;
            break;
          default:
            return;
        }
      }); 


};

  

  function update() {
            game.ctx.clearRect(0,0,500,700);
            game.background();
            game.updateScore();
            game.playerCar.newPos();
            game.playerCar.update(game.ctx);
            game.updateObstacles();
           
      game.animationId = requestAnimationFrame(update);
      game.checkGameOver();      

  }



