window.onload = () => {
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let gameIntro = document.getElementById("start-game");
    gameIntro.remove();
  }
};

let road
let car
// let newObstacles
let x = 0
let score = 0
let obstacleArr = []

function preload() {
  road = loadImage('/images/road.png');
  car = loadImage('/images/car.png');
}

function setup() {
  createCanvas(282, 600);
  // newObstacles = new Obstacle()
}

setInterval(() => {
  randomObstacle()
}, 3000); 

function draw(){
  image(road, 0, 0, 282, 600);
  
  image(car, 116 + x , 450, 50, 80)

  noStroke()
  text(`score: ${score}`, 10, 30);

  if (collide()) {
    textSize(32);
    textAlign(CENTER, CENTER);
    textWrap(WORD);
    text(`Game Over  
score: ${score}`, width/2, height/2);
    noLoop(); 
    return;
  }

  obstacleArr.forEach((obstacle)=>{
    rect(obstacle.xPosition, obstacle.yPosition, obstacle.randomW, obstacle.randomH) 
    obstacle.yPosition += 5;
  })

}

 
function collide() {
  for (let i = 0; i < obstacleArr.length; i++) {
    const obstacle = obstacleArr[i];
    if (
      obstacle.xPosition < 116 + x + 50 &&
      obstacle.xPosition + obstacle.randomW > 116 + x &&
      obstacle.yPosition < 450 + 80 &&
      obstacle.yPosition + obstacle.randomH > 450
    ) {
      return true;
    }
  }
  return false;
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
    116 + x < 0  ? x = x - 0 : x = x - 1;

    console.log("left")
  }else if(keyCode === RIGHT_ARROW){
    116 + x > 233 ? x = x + 0 : x = x + 1;
    
    console.log("right")
  }
}





function randomObstacle(){

  let randomW = Math.floor(Math.random() * 150) + 1;
  let randomH = Math.floor(Math.random() * 50) + 10;
  let xPosition = Math.floor(Math.random() * 233) + 1;
  let yPosition = 0;

  obstacleArr.push({xPosition, yPosition , randomW, randomH})
  score += 1
  // setInterval(()=> yPosition =+ 1 ,1000);
}







// class Obstacle{
//   constructor(){
//     this.xPosition = 0
//     this.yPosition = 0
//     this.randomW = 10
//     this.randomH = 10
//   }
  
//   draw(){

//     fill(51);
//     return rect(this.xPosition, this.yPosition , this.randomW, this.randomH);  
//   }
  
//   random(){
//     this.xPosition = Math.floor(Math.random() * 233) + 1;
//     this.randomW = Math.floor(Math.random() * 150) + 1;
//     this.randomH = Math.floor(Math.random() * 50) + 10;
//   }

//   moveObstacle(){
//     setInterval(()=>this.yPosition =+ 1,1000)  
//   }

// }







// newObstacles.draw()
// // setInterval(() => {newObstacles.draw();} , 1000)

// // let testObstacle = {
// //    xPosition: Math.floor(Math.random() * 233) + 1,
// //    yPosition = 0,
// //    randomW = Math.floor(Math.random() * 150) + 1;
// //    this.randomH = Math.floor(Math.random() * 50) + 10;
// // }
