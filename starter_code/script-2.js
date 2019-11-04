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
          // console.log(this);
          } 
        }
      drawCar = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
    }

    let carLoading = new Car(150, 390, 50, 101);
    carLoading.onCarLoad();
    let speed = 10;

    function collisionDetect(boundaryX){
      let canMove = true;
      return canMove;
  }

    document.onkeydown = function(e){
      if(e.key === "ArrowLeft"){
        if(collisionDetect(carLoading.x - speed)){
          carLoading.moveCar(carLoading.x -= speed);
        }
      }
      if(e.key === "ArrowRight"){
        carLoading.moveCar(carLoading.x += speed);
      }
  }

  let frames = 0;

  function mainLoop(){
    requestAnimationFrame(mainLoop);

    frames++;

    ctx.clearRect(0,0,350,500);

    // this is where we draw the car
    carLoading.drawCar();

    // this is where we draw the obstacles
    // obsLoad.drawObs();

    obstacleArray.forEach((eachObstacle)=>{
      eachObstacle.drawObs(eachObstacle);
    })

    if(frames % 100 === 0){
      spawnObstacle();
    }
    
  }
  setTimeout(mainLoop, 100);


}

};
