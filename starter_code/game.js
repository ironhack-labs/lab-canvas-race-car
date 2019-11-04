// const ctx = document.getElementById('example').getContext('2d');  
let canvas = document.getElementById('road');
let ctx = canvas.getContext('2d');


class Game{
  constructor(){
      this.theCar = new Car(150, 380, 50, 101),
      this.obstacleArray = []
  }

  spawnObstacle(){
      let rX = Math.floor(Math.random() * 200);
      let rY = Math.floor(Math.random() * 200);
      let rWidth = Math.floor(Math.random() * 50) + 10;
      let rHeight = Math.floor(Math.random() * 50) + 10;
      let newObstacle = new Obstacle(rX, rY, rWidth, rHeight);
      this.obstacleArray.push(newObstacle);
      newObstacle.moveDownForever();
  }

  clearUnusedObstacles(){
      this.obstacleArray.forEach((ob, i)=>{
          if(ob.y > 400){
              this.obstacleArray.splice(i, 1)
          }
      })
  }


  collisionDetect(futureX, futureY){
      let canMove = true;

      this.obstacleArray.forEach((obs)=>{

          // console.log(futureX, futureY, this.theCar.width, this.theCar.height, obs.x, obs.y, obs.width, obs.height)

         
      if(futureX + this.theCar.width >= obs.x && futureX <= obs.x + obs.width 
          && futureY + this.theCar.height >= obs.y && futureY <= obs.y + obs.height){
              canMove = false;
           }
      })
     
      return canMove;
  }
}

class Car{
    constructor(x, y, width, height){
      // this.image = image;
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
    }  
    drawCar = () => {
    const carImg = new Image();
    carImg.src = './images/car.png';

    carImg.onload = () => {
          // ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
          this.img = carImg;
          this.drawCar;
      };
    }

    moveCar = (direction) => {
      this[direction] += 10;
    }
    drawCar = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  //   moveCar(futureX, futureY){

  //     if(futureX + this.width <= 350 && futureX >= 0 && futureY + this.height <= 500 && futureY >= 0){
  //         this.x = futureX;
  //         this.y = futureY;
  //     }
  // }

}

// const carImg = new Image();
// carImg.src = './images/car.png';
// carImg.onload = () => {
//     ctx.drawImage(car.image);
// };

// Car.prototype.move = moveCar;

function drawSelf(u, obs){
    if(obs){
        ctx.fillStyle = 'tomato'
        // ctx.fillRect(u.x, u.y, u.width, u.height)
    } 
    ctx.fillRect(u.x, u.y, u.width, u.height)
    ctx.drawImage(u.x, u.y, u.width, u.height);
}
  // function drawCar() {
  //   ctx.drawImage(car.image);
  //   }
  //   drawCar(car);

let frames = 0;

function mainLoop(){
    frames++;

    ctx.clearRect(0,0,500,500);

    // this is where we draw the car
    drawSelf(theGame.theCar);
    // then we draw all the obstacles
    theGame.obstacleArray.forEach((eachObstacle)=>{
        drawSelf(eachObstacle, true)
    })

    if(frames % 100 === 0){
        theGame.spawnObstacle()
    }


    requestAnimationFrame(mainLoop);
}



// function moveCar(futureX, futureY){

//     if(futureX + this.width <= 350 && futureX >= 0 && futureY + this.height <= 500 && futureY >= 0){
//         this.x = futureX;
//         this.y = futureY;
//     }
// }

let speed = 10;


document.onkeydown = function(e){

 

    if(e.key === "ArrowUp"){
        if(
            theGame.collisionDetect(theGame.theCar.x, theGame.theCar.y -speed)
        ){
            theGame.theCar.moveCar(theGame.theCar.x, theGame.theCar.y -speed)
        }

    }
    if(e.key === "ArrowDown"){
        if(
            theGame.collisionDetect(theGame.theCar.x, theGame.theCar.y +speed)
        ){
            theGame.theCar.moveCar(theGame.theCar.x, theGame.theCar.y +speed)
        }
       
    }
    if(e.key === "ArrowLeft"){
        if(
            theGame.collisionDetect(theGame.theCar.x - speed, theGame.theCar.y)
        ){
            theGame.theCar.moveCar(theGame.theCar.x - speed, theGame.theCar.y)
        }
    }
    if(e.key === "ArrowRight"){
        if(
            theGame.collisionDetect(theGame.theCar.x + speed, theGame.theCar.y)
        ){
            theGame.theCar.moveCar(theGame.theCar.x + speed, theGame.theCar.y)
        }
    }
}
  

class Obstacle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveDownForever(){
       let blah = setInterval(()=>{
        //    each setInterval function gets a unique ID
        // were using blah here to save this ID
            this.y += 10;

            if(this.y > 500){
                clearInterval(blah)
            }

        },100)


    }

}

// document.getElementById('start').onclick = startGame;


let theGame;

// function startGame(){    
//      theGame = new Game();
//     mainLoop();
// }