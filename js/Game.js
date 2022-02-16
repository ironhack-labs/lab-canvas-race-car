
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Image();
    this.road.src = './images/road.png';
    this.car = new Car(this.ctx);
    this.frame = 0;
    this.obstacles = [];
    this.score = 0;
  }

  createObstacle = () => {
    this.obstacles.push(new Obstacle(this.ctx));
  };

  drawRoad = () => {
    this.ctx.drawImage(this.road, 0, 0, canvas.width, canvas.height);
  };

  checkCollision = (obstacle, idx, gameId) => {
    if (
      this.car.x + this.car.carWidth > obstacle.x &&
      obstacle.x + obstacle.obsWidth > this.car.x &&
      this.car.y + this.car.carHeight > obstacle.y &&
      obstacle.y + obstacle.obsHeight > this.car.y
    ) {
      this.obstacles.splice(idx, 1);
      cancelAnimationFrame(gameId);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      this.ctx.fillRect(0, canvas.height / 4, canvas.width, canvas.height / 2);
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(`Game Over!!!`, 30, canvas.height / 2);
    }
  };

  handleScore = (obstacle, idx) => {
    if (obstacle.y > canvas.height) {
      this.obstacles.splice(idx, 1);
      this.score++;
    }
  };

  drawEverything = () => {
    let gameId = requestAnimationFrame(this.drawEverything);
    this.drawRoad();

    this.car.drawCar();
    this.obstacles.forEach((obstacle, idx) => {
      obstacle.drawObstacle();
      obstacle.moveObstacle();
      this.checkCollision(obstacle, idx, gameId);
      this.handleScore(obstacle, idx);
    });
    this.frame++;
    if (this.frame % 50 === 0) this.createObstacle();
    this.ctx.fillStyle = 'red';
    this.ctx.font = '50px Verdana';
    this.ctx.fillText(`Score: ${this.score}`, 10, 50);
  };
}

// start(){
//   this.drawingLoop();
//   this.car.move();
// }

// drawBackground(){
//   const road = {
//     x: 0, 
//     y: 0, 
//     width: 500, 
//     height: 700, 
//     img: new Image()
//   }

//   road.img.src = "./images/road.png"; 

//   road.img.addEventListener("load", () => {
//     this.context.drawImage(
//       road.img, 
//       road.x, 
//       road.y, 
//       road.width, 
//       road.height
//     );
//   })
// }


// drawingLoop(){
//   this.context.clearRect(0,0, this.canvas.width, this.canvas.height); 
//   this.drawBackground(); 

//   const car = new Component(this, 200, 500, 95, 150, "./images/car.png"); 
//   car.img.addEventListener("load", () => {
//     car.drawComponent(
//       car.img,
//       car.x,
//       car.y,
//       car.width,
//       car.height
//     )
//   })


//   this.car.x -= 5; 
//   if(this.car.y + this.car.height < 0){
//     this.car.y = this.car.height; 
//     this.car.x = Math.random() * (this.canvas.width - this.car.width); 
//   }

//   if (this.car.lives > 0){
//     requestAnimationFrame(() => this.drawingLoop()); 
//   }
  
//   if (this.car.lives === 0){
//     this.gameOver();
//   }
  
// }


// gameOver(){

// }


