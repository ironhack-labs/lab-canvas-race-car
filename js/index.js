  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");
  
  canvas.h = 700;
  canvas.w = 500;

  let int;
  let score = 0;
  function startGame() {
    int = setInterval(addObstacle, 2000);
    animate();
  }
    let img = new Image();
    img.src = "../images/car.png";

    class Car{
      constructor(){
        this.w = 40;
        this.h = 80;
        this.x = canvas.w / 2;
        this.y = canvas.h - this.h * 1.25;
        this.image = img;
      }
      draw(){
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
      }
    }

    class Obstacle {
      constructor(){
        this.w = Math.random()*80 + 20;
        this.h = 20;
        this.x = Math.random()*(canvas.w - this.w)+this.w;
        this.y = 0;
      }

      draw() {
        ctx.fillStyle = "#870007";
        this.y++;
        ctx.fillRect(this.x, this.y, this.w, this.h);
      }
    }

    let obstacleArr = [];
    function addObstacle(){
      obstacleArr.push(new Obstacle);
    }

    let player = new Car();
    
    let game;
    function animate(){
      game = window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.w, canvas.h);
      ctx.font = "32px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${score}`, 10, 30);
      player.draw();
      
      for (let i=0; i<obstacleArr.length; i++){
        obstacleArr[i].draw();
        let didCollide = detectCollision(player, obstacleArr[i]);
        if (didCollide){
          gameOver();
          break;
        }
        let objectPassed = checkLocation(obstacleArr[i]);
        if (objectPassed){
          score += 10;
          obstacleArr.splice(i, 1);
        }
      }
    };
    
  
    window.addEventListener("keydown", function(e){
      switch(e.key){
        case "ArrowLeft":
          if (player.x -30 <= 0){
            player.x = 0;
        } else {
          player.x -= 30;
        }
        break;
  
        case "ArrowRight":
          if (player.x + player.w + 30 >= canvas.w){
            player.x = canvas.w-player.w;
          } else {
            player.x +=30;
          }
          break;
      }
    });

    function detectCollision(player, obj) {
      if (
        player.x < obj.x + obj.w &&
        player.x + player.w > obj.x &&
        player.y < obj.y + obj.h &&
        player.y + player.h > obj.y
      ) {
        return true;
      } else {
        return false;
      }
    };

    function checkLocation(obj) {
      if (obj.y > canvas.h){
        return true;
      } else {
        return false;
      }
    };

    function gameOver () {
      //end game loop
      window.cancelAnimationFrame(game);
      //end obstacle interval
      clearInterval(int);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.w, canvas.h);
      ctx.fillStyle = "white";
      ctx.font = "64px Arial";
      ctx.fillText("Game Over", 90, 350);
      ctx.font = "46px Arial";
      ctx.fillText(`Score: ${score}`, 160, 450);
    };

