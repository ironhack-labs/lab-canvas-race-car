const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};

// Function that initializes and shows the road and the car
function startGame() {
  // Function to define the road
  road.inicialize();
  // Function to draw the road
  road.show();
  // Function to define the car
  car.inicialize();
  // Function to draw the card
  car.show();

  // Event listener to move the car left and right
  document.addEventListener('keydown', (event) => {
    switch(event.key){
      case "ArrowRight":
        if(car.x < 450){
        car.x += 40;
        break;
        }
      
      case "ArrowLeft":
        if(car.x > 30){
          car.x -= 40;
          break;
        }
    }
  })
  updateGame();
};


// Creating the road object
const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rollY: 0,

  inicialize: function () {
    this.img = new Image();
    this.img.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  show: function () {
    ctx.drawImage(this.img, this.x, this.rollY, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.rollY - canvas.height , this.width, this.height);
    this.rollY++;

    if(this.rollY >= canvas.height){
      this.rollY = 0;
    }

  }
};

// Creating the car object
const car = {
    img: null,
    x: 330,
    y: 550,
    width: 0,
    height: 0,

  inicialize: function () {
    this.imgCar = new Image();
    this.imgCar.src = "/images/car.png";
    this.width = (158 / 319) * this.height;
    this.height = 80*1.7;
  },

  show: function(){
    ctx.drawImage(this.imgCar, this.x, this.y, this.width, this.height);
  }
};

// Creating the obstacles object
var obstacles = {
  obstacles: [],
  frames: 0,

  createObstacle: function(){
    if(this.frames%240 == 0){
      let minwidth = canvas.width/6;
      let maxwidth = canvas.width/4;

      let newObstacle = {
        x: 0,
        y: 0,
        width: (Math.random()*maxwidth)+minwidth,
        height: 50,
      }

      newObstacle.x = Math.random()*canvas.width;
      this.obstacles.push(newObstacle);
      }    
  },

  show: function(){
    this.frames++;
    this.obstacles = this.obstacles.map(obstacle => {
      obstacle.y += 1;
      return obstacle;
    });
    this.obstacles.forEach(obstacle => {
      ctx.save();
      ctx.fillStyle ='red'; 
      ctx.fillRect(obstacle.x,obstacle.y,obstacle.width,obstacle.height);
      ctx.restore();
    })
  }
};

// Creating the score object
var score = {
  points: 0, 

  show: function(){
    ctx.save();
    ctx.font = "24px Impact";
    ctx.fillStyle = "white";
    ctx.fillText(`SCORE: ${this.points}`, 70, 40);
    ctx.restore();
  },

  addPoints: function(){
    this.points ++;
  },
}


// Function to permenantly update the game canvas
function updateGame(){
  if (!checkColision()){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    road.show();
    score.show();
    score.addPoints();
    car.show();
    obstacles.createObstacle();
    obstacles.show();
    requestAnimationFrame(updateGame);
  } else if (checkColision()){
    gameOver()
  }
}


// Function to check if the car collides with an obstacle
function checkColision(){
  return obstacles.obstacles.some(obstacle => {
    if(obstacle.y + obstacle.height >= car.y && obstacle.y <= car.y + car.height){
      if(obstacle.x + obstacle.width >= car.x && obstacle.x <= car.x + car.width){
        console.log("colision")
        return true;
      }
    }
    return false;
  });
}

// Function that trigers a game over and the final score
function gameOver(){
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
    ctx.fillText(`Your score is: ${score.points}`, canvas.width/2, canvas.height/2);
    ctx.restore();
  }