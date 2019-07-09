window.onload = ()=>{
  document.getElementById("start-button").onclick = function() {

const numberObstacle = 95;

let gameBoard = { 
    canvas : document.createElement("canvas"),
    score : 0,   
    start: function(){
      this.canvas.width = 700;
      this.canvas.height = 700;
      this.context = this.canvas.getContext("2d");
      document.body.append(this.canvas);
      document.querySelector("#game-board").append(this.canvas);
      this.frames = 0;
      this.interval = setInterval(updateGameBoard,20);
    },
    background:function(){
      this.context.fillStyle = "green";
      this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
      this.context.fillStyle = "gray";
      this.context.fillRect(60,0,580,this.canvas.height);
      this.context.fillStyle = "white";
      this.context.fillRect(80,0,20,this.canvas.height)
      this.context.fillRect(600,0,20,this.canvas.height)
      this.context.font = "25px Arial"
      this.context.fillText(`Score: ${this.getScore()}`,480,50,200,50)
    },
    clear:function(){
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height) 
    },
    getScore: function(){
      return Math.floor(this.frames/numberObstacle);
    }
}

class Element{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  left(){
    return this.x;
  }
  right(){
    return this.x + this.width;
  }
  top(){
    return this.y;
  }
  bottom(){
    return this.y + this.height;
  }

}

class Car extends Element{
  constructor(x,y,width,height,source){
    super(x,y,width,height)
    this.image = new Image();
    this.source = source;
    this.dx = 0;
  }
  draw(){
    this.image.src = this.source;
    gameBoard.context.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  newPos(){
    if((this.dx > 0 && this.x < 520) || (this.dx < 0 && this.x >= 100))
    this.x += this.dx;  
    else
    this.dx = 0;  
  }
}

let player = new Car(300,450,80,160,'images/car.png');
gameBoard.start();

window.onkeydown=(e)=>{  
  switch(e.keyCode){
    case 37:
        player.dx = -5.5; 
    break;
    case 39:
        player.dx = 5.5;   
    break;
  }
}

window.onkeyup = ()=>{
  player.dx = 0;
}
  
 class Component extends Element{
     constructor(x,y,width,height,color){
       super(x,y,width,height) 
       this.color = color; 
       this.dy = 5;
     }
     update(){
       gameBoard.context.fillStyle = this.color;
       gameBoard.context.fillRect(this.x, this.y, this.width, this.height);
     }
     newPos(){
       this.y += this.dy;
     }
  }

  let middleLinesArray = [];
  
  function movelines (){
    middleLinesArray.forEach((middleLine)=>{
      middleLine.update();
      middleLine.newPos();
    });
    
    if(gameBoard.frames % 20 == 0){
      middleLinesArray.push(new Component(345,-20,8,30,'white'))
    }
  }

  const minXpositionLeft = 450;
  const maxXpositionLeft = 600;
  const minXpositionRight = 100;
  const maxXpositionRight = 250;
  let minWidth = 100;
  let maxWidth = 200;
    
  
  let colors = ["red", "yellow", "blue"];//obstacles colors
  let obstaclesArray = [];

  function obstacles (){
      obstaclesArray.forEach((obstacle,index)=>{
        obstacle.update();
        obstacle.newPos();
        if(checkCollision(obstacle)){
          gameOver();
        }
      });
      if(gameBoard.frames % numberObstacle === 0){ //create obstacles every certain amount of frames
        if(obstaclesArray.length % 2 == 0 ){
          let width = Math.random() * maxWidth + minWidth;
          let xPosition = Math.random() * (maxXpositionRight-minXpositionRight) + minXpositionRight;
          let color = Math.floor(Math.random() * (colors.length));
          obstaclesArray.push(new Component(xPosition ,-20,width,20,colors[color]));
        }else{
          let width = Math.random() * maxWidth + minWidth;
          let xPosition = Math.random() * (maxXpositionLeft-minXpositionLeft) + minXpositionLeft;
          let color = Math.floor(Math.random() * (colors.length));
          obstaclesArray.push(new Component(xPosition-width,-20,width,20,colors[color]))
        }
      }
  }

  function checkCollision(obstacle){
    return!(player.top() + 5 > obstacle.bottom()||
            player.bottom() < obstacle.top() ||
            player.right() < obstacle.left() ||
            player.left() > obstacle.right());
  }


  let startButton = document.querySelector("#start-button")
  startButton.onclick =()=>{
    window.location.reload();//reload the game
  }
  
  function gameOver(){
    clearInterval(gameBoard.interval)  //stop game
    let sign = document.createElement("div")//create a div and insert it with a game-over message
    sign.classList.add("game-over")
    sign.innerHTML = `<h1>GAME OVER</h1> <h2>Your final score is: <span>${gameBoard.getScore()}<span></h2>`
    document.querySelector("#game-board").append(sign); 
  }
    
  function updateGameBoard(){
    gameBoard.clear();
    gameBoard.background();
    movelines() ; 
    player.newPos();
    obstacles ();
    player.draw();
    gameBoard.frames += 1;
  }
  
 };

};
