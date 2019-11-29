// --------------------------------------------------------------------------------------------                                                                   
//    ___ ___ _      _   _  _ ___    ___    _   ___ ___ ___ 
//   |_ _/ __| |    /_\ | \| |   \  | _ \  /_\ / __| __| _ \
//    | |\__ \ |__ / _ \| .` | |) | |   / / _ \ (__| _||   /
//   |___|___/____/_/ \_\_|\_|___/  |_|_\/_/ \_\___|___|_|_\
//
// --------------------------------------------------------------------------------------------                                                                   
                                                        
window.onload = function() {
  let newIslandRacer;
  document.getElementById("start-button").onclick = function() {
    if( document.getElementsByTagName("canvas").length === 0 ) {
      startGame();
    } else {
      resetGame();
    }
  };

  function startGame() {
    newIslandRacer = new IslandRacer( "game-board", 450, 600 );
    document.getElementById("start-button").innerText = "Reset Game";
  }

  function resetGame() {
    newIslandRacer.stopGame();
    document.getElementById("start-button").innerText = "Start Game";
    document.getElementById("game-board").innerHTML = "";
  }
};


// --------------------------------------------------------------------------------------------                                                                   
//      ___   _   __  __ ___            _            
//     / __| /_\ |  \/  | __|  ___   __| |__ _ ______
//    | (_ |/ _ \| |\/| | _|  |___| / _| / _` (_-<_-<
//     \___/_/ \_\_|  |_|___|       \__|_\__,_/__/__/
//                                                   
// --------------------------------------------------------------------------------------------                                                                   

class CanvasGame {
  constructor(container, width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    document.getElementById(container).appendChild(this.canvas);
    this.ctx.rect(0, 0, width, height);
  }
}


// --------------------------------------------------------------------------------------------                                                                   
//     __  __  _____   _____ _  _  ___            _            
//    |  \/  |/ _ \ \ / /_ _| \| |/ __|  ___   __| |__ _ ______
//    | |\/| | (_) \ V / | || .` | (_ | |___| / _| / _` (_-<_-<
//    |_|  |_|\___/ \_/ |___|_|\_|\___|       \__|_\__,_/__/__/
//                                                             
// --------------------------------------------------------------------------------------------                                                                   

class MovingObject{
  constructor(x, y, width, height, color, ctx){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
    this.acceleration = 1
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  left() { return this.x; }
  right() { return this.x + this.width; }
  top() { return this.y; }
  bottom() { return this.y + this.height; }

  isCollidedWith(obstacle) {
    //since the player is also a gameObject we have to make sure that it doesn't "collide" with itself
    if (this === obstacle) return false;
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

// --------------------------------------------------------------------------------------------                                                                   
//      ___   _   ___            _            
//     / __| /_\ | _ \  ___   __| |__ _ ______
//    | (__ / _ \|   / |___| / _| / _` (_-<_-<
//     \___/_/ \_\_|_\       \__|_\__,_/__/__/
//
// --------------------------------------------------------------------------------------------                                                                   

class RacingCar extends MovingObject{
  constructor(x, y, ctx){
    super( x-35, y-140, 70, 140, "red", ctx );
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          this.speedX -= (1 * this.acceleration);
          break;
        case 39:
          this.speedX += (1 * this.acceleration);
          break;
        default:
      }
    };

    document.onkeyup = e => {
      this.speedX = 0;
    };
    this.raceCarImage = new Image();
    this.raceCarImage.src = "./images/car.png";
  }

  update(){
    this.x += this.speedX;
    this.ctx.drawImage(this.raceCarImage,0,0,this.raceCarImage.width, this.raceCarImage.height, this.x, this.y, this.width, this.height);
  }
}

// --------------------------------------------------------------------------------------------                                                                   
//     ___   _   ___ ___ ___ ___ ___            _            
//    | _ ) /_\ | _ \ _ \_ _| __| _ \  ___   __| |__ _ ______
//    | _ \/ _ \|   /   /| || _||   / |___| / _| / _` (_-<_-<
//    |___/_/ \_\_|_\_|_\___|___|_|_\       \__|_\__,_/__/__/
//                                                           
// --------------------------------------------------------------------------------------------                                                                   

class Obstacle extends MovingObject {
  constructor(x, width, ctx) {
    super(x, 0, width, 20, "yellow", ctx);
    this.speedX = 0;
    this.speedY = 3;

    this.obstacleImage = new Image();
    this.obstacleImage.src = "./images/barrier.png";

    this.obstacleImage.onload = () => {
      this.obstaclePattern = this.ctx.createPattern(this.obstacleImage, 'repeat');
    };
  }

  update(){
    this.y += this.speedY;
    this.ctx.fillStyle = this.obstaclePattern;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

// ============================================================================================                                                                   
//     ___ ___ _      _   _  _ ___    ___    _   ___ ___ _  _  ___            _            
//    |_ _/ __| |    /_\ | \| |   \  | _ \  /_\ / __|_ _| \| |/ __|  ___   __| |__ _ ______
//     | |\__ \ |__ / _ \| .` | |) | |   / / _ \ (__ | || .` | (_ | |___| / _| / _` (_-<_-<
//    |___|___/____/_/ \_\_|\_|___/  |_|_\/_/ \_\___|___|_|\_|\___|       \__|_\__,_/__/__/
//                                                                                         
// ============================================================================================                                                                   

class IslandRacer extends CanvasGame{
  constructor(container, width, height){
    super(container, width, height);
    this.frames = 0;

    // bind func 'updateIslandRacerState' to be available in 'setInterval()'
    this.updateIslandRacerState = this.updateIslandRacerState.bind(this);

    // create & init timer
    this.interval = setInterval(this.updateIslandRacerState, 30);
    this.gamesObjects = [];

    // create racing car
    this.racingCar = new RacingCar(this.canvas.width/2, this.canvas.height-10, this.ctx);
    this.gamesObjects.push(this.racingCar);

    // init middleline
    this.middleLineOffset = 0;
  }

  addObstacle() {
    let minWidth = 100;
    let maxWidth = 300;
    let width = Math.floor( Math.random() * (maxWidth - minWidth + 1) + minWidth );
    let x = Math.floor( Math.random() * ( this.canvas.width-width -60 ) ) + 30;
    this.gamesObjects.push(new Obstacle(x, width, this.ctx));
  }

  stopGame(){
    clearInterval(this.interval);
  }

  clearCanvas(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  checkGameOver(){
    let crashed=this.gamesObjects.some(obstacle => { return this.racingCar.isCollidedWith(obstacle); });
    let carOutOfRoad = ( this.racingCar.x < 20 || this.racingCar.x > (this.canvas.width - this.racingCar.width - 20));
    if (crashed || carOutOfRoad) this.stopGame();
  }

  drawRoad(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(30, 0, this.canvas.width-60, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(40, 0, 10, this.canvas.height); 
    this.ctx.fillRect(this.canvas.width-50, 0, 10, this.canvas.height);

    // middle line
    this.ctx.setLineDash([20, 20]);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
      this.ctx.moveTo(this.canvas.width/2,(this.middleLineOffset%40)-20)
      this.ctx.lineTo(this.canvas.width/2,this.canvas.height)
    this.ctx.stroke(); 
    this.middleLineOffset += 3;
  }

  updateIslandRacerState(){
    this.frames += 1;
    if (this.frames % 150 === 0) {
      this.addObstacle();
    }

    this.clearCanvas();
    this.drawRoad();

    this.gamesObjects.forEach(gameObject => gameObject.update());

    this.checkGameOver();
  }
}
