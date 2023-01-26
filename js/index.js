/** @type{HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

  const car = new Car();
  const obstacle = new Obstacle();
  let obstacles = [];
  let gameOver = false;
  let score = 0;

   
  window.onload = () => {
    document.getElementById("start-button").onclick = () => {
      reset();
      startGame();
      animate();
    };
  };
 
 
  function startGame() {
    backgroundImg = new Image();
    backgroundImg.src = "images/road.png";
    backgroundImg.onload = () => {
      ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    };

    setInterval(() => {
      obstacles.push(new Obstacle());
    }, 1000);
  }


  function animate() {
    if (gameOver) {
      cancelAnimationFrame(animationFrameId);
      return;
    }
  
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    car.draw();

    function rect(rectangle1, rectangle2) {
      return (
        rectangle1.x < rectangle2.x + rectangle2.width &&
        rectangle1.x + rectangle1.width > rectangle2.x &&
        rectangle1.y < rectangle2.y + rectangle2.height &&
        rectangle1.y + rectangle1.height > rectangle2.y
      );
    }

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
    score++;
 
    obstacles.forEach((obstacle) => {
      obstacle.update();
 
      if (rect(car, obstacle)) {
        gameOver = true;
      }
    });
 
    animationFrameId = requestAnimationFrame(animate);
  }
  
  window.onkeydown = (e) => {
    car.update(e);
  };
 

  function reset() {
    obstacles = [];
    gameOver = false;
    score = 0;
    car.x = 225
    car.y = 570
  }




