// initial setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

  function startGame() {
    // create new image for road and car
    const roadImage = new Image();
    roadImage.src = "/images/road.png";

    const carImage = new Image();
    carImage.src = "/images/car.png";

    // set the start position of our images
    let roadX = 0;
    let roadY = 0;

    let carX = 330;
    let carY = 200;

    // ctx.drawImage(s)
    ctx.drawImage(roadImage, roadX, roadY, 718, 316);
    ctx.drawImage(carImage, carX, carY, 50, 100);

    // creat obstacles
      class Obstacles {
      constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
      }

      draw() {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    const myObstacles = [];
   
//check the collision with the obstacle
      crashWith(Obstacles) {
        return !(
          this.bottom() < Obstacles.top() ||
          this.top() > Obstacles.bottom() ||
          this.right() < Obstacles.left() ||
          this.left() > Obstacles.right()
        );
      }
    }

//update obstacles
function updateObstacles() {
  for (i = 0; i <myObstacles.length; i++) {
    myObstacles[i].y +=1;
    myObstacles[i].draw();
  }
//update every 3 seconds 
  myGameArea.frames += 1;
  if (myGameArea.frames % 180 === 0) {
    let x = myGameArea.canvas.width;
    let minWidth = 75;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 75;
    let maxGap = 230;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    myObstacles.push(new Component(0 + gap, 0, width, height, "purple", this.ctx));
  }
}
//chech Game Over
checkGameOver=() => {
  const crashed = myObstacles.some(function(obstacle) {
    return this.carX.crashWith(obstacle);
  });

  if (crashed) {
    this.stop();
  }
};
score(){
  const points = Math.floor(this.frames / 30);
  this.context.font = '18px serif';
  this.context.fillStyle = 'black';
  this.context.fillText(`Score: ${points}`, 350, 50);
};

// Move left and right
Document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      carX.x -= 1;
      break;
    case 39: // right arrow
      carX.x += 1;
      break;
   }
   update()
};

