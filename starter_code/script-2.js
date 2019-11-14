window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById('road');
    let ctx = canvas.getContext('2d');

    let obstacleArray = [];

    class Obstacle {
      constructor(x, y, width, height){
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
      }

      drawObs = () => {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  
      moveDownForever(){
         let rock = setInterval(()=>{
          //    each setInterval function gets a unique ID
          // were using blah here to save this ID
              this.y += 10;
  
              if(this.y > 500){
                  clearInterval(rock)
              }
          },100)
      }
  }
  // let obsLoad = new Obstacle(50, 90, 50, 50);
  function spawnObstacle(){
    let rX = Math.floor(Math.random() * 200);
    let rY = Math.floor(Math.random() * 200);
    let rWidth = Math.floor(Math.random() * 50) + 10;
    let rHeight = Math.floor(Math.random() * 50) + 10;
    let obsLoad = new Obstacle(rX, rY, rWidth, rHeight);
    obstacleArray.push(obsLoad);
    obsLoad.moveDownForever();
    // console.log(obsLoad.x);
}

  // console.log(obsLoad);
  console.log(obstacleArray);

    class Car {
      constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
      onCarLoad = () => {
        const carImg = new Image();
        carImg.src = './images/car.png';
    
        carImg.onload = () => {
              // ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
              this.img = carImg;
              this.drawCar;
          }
        }
        moveCar = (moveX) => {
          if(moveX + this.width <= 350 && moveX >= 0){
          this.x = moveX;
          // console.log("This move is " + moveX);
          } else {
            console.log("out the boundaries")
          }
        }
      drawCar = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
    }

    let carLoading = new Car(150, 390, 50, 101);
    carLoading.onCarLoad();
    let speed = 10;

    function checkCollision (aframe) {
      obstacleArray.forEach((rock) => {
      var rect1 = carLoading;
      var rect2 = rock;

      if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
          // collision detected!
          console.log("collision!");
          cancelAnimationFrame(aframe);
          GameOver();
          return true;
      }
      return false;
    })
    }

    document.onkeydown = function(e){
      if(e.key === "ArrowLeft"){
        if(carLoading.x - speed >= 0){
          carLoading.moveCar(carLoading.x -= speed);
        }
      }
      if(e.key === "ArrowRight"){
        if(carLoading.x + speed <= 300){
        carLoading.moveCar(carLoading.x += speed);
        }
      }
  }
  let gameoverpopup = document.getElementById('gameover-screen');

  function GameOver() {
    gameoverpopup.style.display = "flex";
  }

  let score = document.getElementById("score");
  let finalscore = document.getElementById("finalscore");
  let frames = 0;

  function mainLoop(){
    let aframe = requestAnimationFrame(mainLoop);

    frames++;

    ctx.clearRect(0,0,350,500);

    // this is where we draw the car
    carLoading.drawCar();

    // this is where we draw the obstacles
    // obsLoad.drawObs();

    obstacleArray.forEach((eachObstacle)=>{
      eachObstacle.drawObs(eachObstacle);
    })

    if(checkCollision (aframe)) {
      cancelAnimationFrame(aframe);
    }

    if(frames % 100 === 0){
      score.innerText = frames/100;
      finalscore.innerText = frames/100;
      spawnObstacle();
    }
    
  }
  setTimeout(mainLoop, 100);


}

};
