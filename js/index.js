const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const car = {
  img: null,
  x: canvas.width/2,
  y: canvas.height * 0.85,
  width: 0,
  height: 0,
  initializeCar: function(){
    this.img = new Image();
    this.img.src = "/images/car.png";
    // this.img.onload = this.showRoad;
    this.width = (158/319) * this.height;
    this.height = 80 * 1.2;

    // 158/319 = 100/height
  },
  showCar: function(){
    console.log("show");
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

}

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  scroll: 0,
  initializeRoad: function(){
    this.img = new Image();
    this.img.src = "/images/road.png";
    // this.img.onload = this.showRoad;
    this.width = canvas.width;
    this.height = canvas.height;
  },
  showRoad: function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.scroll - canvas.height , this.width, this.height);
    this.scroll += 2;

    if(this.scroll >= canvas.height){
      this.scroll = 0;
    }
  }
}

//Create obstacles
const obstacles = {
  obstacles: [],
  frames: 0,

  newObstacle: function(){
    if(this.frames % 200 == 0){
      let newObstacle = {
        x: 0,
        y: 0,
        width: (Math.random()*canvas.width/3) + canvas.width/6,
        height: 50,
      };

      newObstacle.x = Math.random()*canvas.width;
      this.obstacles.push(newObstacle);
      }    
  },

  showObstacle: function(){
    this.frames += 0.5;
    this.obstacles = this.obstacles.map(obstacle => {
      obstacle.y += 2;
      return obstacle;
    });
    this.obstacles.forEach(obstacle => {
      ctx.save();
      ctx.fillStyle ='brown'; 
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      ctx.restore();
    })
  }
};

function updateGame() {
  if (!checkColision()){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    road.showRoad();
    car.showCar();
    obstacles.newObstacle();
    obstacles.showObstacle();
    requestAnimationFrame(updateGame);
  } else {
    gameOver();
  }
}

function checkColision(){
  return obstacles.obstacles.some(obstacle => {
    if(obstacle.y + obstacle.height >= car.y && obstacle.y <= car.y + car.height){
      if(obstacle.x + obstacle.width >= car.x && obstacle.x <= car.x + car.width){
        return true;
      }
    }
    return false;
  });
}

function gameOver(){
  if(checkColision){
    ctx.save()
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,500,700);
    ctx.restore();

    ctx.save();
    ctx.font = "62px Impact";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width/2, canvas.height/2.5);
    ctx.restore();

    ctx.save();
    ctx.font = "32px Impact";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`Your score: $`, canvas.width/2, canvas.height/2);
    ctx.restore();
  }
}
let score = {
} 
//Add eventListener for arrow keys
document.addEventListener('keydown', (event) => {
  switch(event.key){
    case "ArrowLeft":
      if(car.x > 50) {
        car.x -= 40;
        road.showRoad();
        car.showCar();
        break;
      }
    case "ArrowRight":
      if(car.x < 450) {
        car.x += 40;
        road.showRoad();
        car.showCar();
        break;
      } 
  }
  updateGame();
});

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.initializeRoad();
    road.showRoad();
    car.initializeCar();
    car.showCar();
  }
};