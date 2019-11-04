window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById('road');
    let ctx = canvas.getContext('2d');

    this.obstacleArray = [];

    class Obstacle {
      constructor(x, y, width, height){
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
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

  function drawSelf(u, obs){
    if(obs){
        ctx.fillStyle = 'tomato';
    } 
    ctx.fillRect(u.x, u.y, u.width, u.height);
}

function spawnObstacle(){
  let rX = Math.floor(Math.random() * 200);
  let rY = Math.floor(Math.random() * 200);
  let rWidth = Math.floor(Math.random() * 50) + 10;
  let rHeight = Math.floor(Math.random() * 50) + 10;
  let newObstacle = new Obstacle(rX, rY, rWidth, rHeight);
  this.obstacleArray.push(newObstacle);
  newObstacle.moveDownForever();
}

function clearUnusedObstacles(){
  this.obstacleArray.forEach((ob, i)=>{
      if(ob.y > 400){
          this.obstacleArray.splice(i, 1)
      }
  })
}
clearUnusedObstacles();
  

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
          console.log(this);
          } 
        }
      drawCar = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
    }

    let carLoading = new Car(150, 390, 50, 101);
    carLoading.onCarLoad();
    let speed = 10;

  function collisionDetect(futureX, futureY){
    let canMove = true;

    this.obstacleArray.forEach((obs)=>{
       
    if(futureX + carLoading.width >= obs.x && futureX <= obs.x + obs.width 
        && futureY + carLoading.height >= obs.y && futureY <= obs.y + obs.height){
            canMove = false;
         }
    })
   
    return canMove;
}

document.onkeydown = function(e){
  if(e.key === "ArrowLeft"){
    if(collisionDetect(carLoading.x - speed, carLoading.y)){
      carLoading.moveCar(carLoading.x -= speed);
    }
  }
  if(e.key === "ArrowRight"){
    if(collisionDetect(carLoading.x + speed, carLoading.y)){
      carLoading.moveCar(carLoading.x += speed);
    }
  }
}


  
  function mainLoop(){
    requestAnimationFrame(mainLoop);
    frames++;
  
    ctx.clearRect(0,0,350,500);

  
    // this is where we draw the car
    carLoading.drawCar();

    //where we draw obstacles
    obstacleArray.forEach((eachObstacle)=>{
      drawSelf(eachObstacle, true)
    })

    if(frames % 100 === 0){
      spawnObstacle()
    }
    
  }
  setTimeout(mainLoop, 100);


}

};
