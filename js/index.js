class PlayerCar {
    image = "";
    imageRoad = "";
    x = canvas.width/2 - 25;
    y = canvas.height - 100;
    width = 50;
    height = 100;
    speedX = 0;
    speedY = 0;
    animationId =  0;
    leftLimit = 100;
    rightLimit = 400;
    obstacles = [];
    frames = 0;
    score = 0;

    update() {
    ctx.drawImage(this.imageRoad,0,0,canvas.width,canvas.height);
    ctx.drawImage(this.image,this.x,this.y,50,100);
    }

    newPos() {
    this.x += this.speedX;
    }

    left(){
      if(this.x > this.leftLimit){
        this.speedX--;
      }else{
        this.speedX = 0;
      }  
    }

    right(){
      if(this.x < this.rightLimit){
        this.speedX++;
      }else{
        this.speedX = 0;
      }
    }
  } 

  class Obstacle {
    constructor(x,y,size){
      this.x = x;
      this.y = y;
      this.width = size;
      this.heigh = 20;
      this.color = '#000000';
      this.speedX = 0;
      this.speedY = 0;
    }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  isCrashedWith(obstacle) {
    const condition = !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );

    return condition;
  }


  }  
  

  // left() {
  //   return this.x;
  // }

  // right() {
  //   return this.x + this.width;
  // }

  // top() {
  //   return this.y;
  // }

  // bottom() {
  //   return this.y + this.height;
  // }
  

 const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');  
  const playerCar = new PlayerCar();

window.onload = () => {
  
 document.getElementById('start-button').onclick = () => {
    

    startGame();



    document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        playerCar.left()
        
        break;
      case "ArrowRight":
        playerCar.right();
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

  function startGame() {

  
  const imageRoad = new Image();
  imageRoad.src = "./images/road.png";
  playerCar.imageRoad = imageRoad;
  
  const imageCar = new Image();
  imageCar.src = "./images/car.png";
  playerCar.image = imageCar;
  

  updateGame();

  }

  function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Atualizar posição dos elementos
  playerCar.newPos();
  playerCar.update();

  updateObstacles();

  //updateScore(gameArea.score);

  playerCar.animationId = requestAnimationFrame(updateGame);

  //checkGameOver();
}
 

function updateObstacles() {
  playerCar.frames++;

  if (playerCar.frames % 30 === 0) {
    playerCar.score++;
  }

  playerCar.obstacles.map((obstacle) => {
    obstacle.y++;
    obstacle.update();
  });

  if (playerCar.frames % 120 === 0) {
    let x = Math.floor(
      Math.random() * (canvas.width)
    );
    let minHeight = 20;
    let maxHeight = 300;
    let width = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    
  
  const obs = new Obstacle(x,0,width);


    playerCar.obstacles.push(obs);

  }
}

};
