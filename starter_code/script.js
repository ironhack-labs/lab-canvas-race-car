let keysBeingPressed = [];
let theGame;


class Game{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.obstacles = [];
    this.car = new Car();

    setInterval(()=>{
      this.ctx.clearRect(0,0,600,750);

      this.car.move();

      this.spawnObstacle();

      this.drawEverything();
    },100)
  }

  spawnObstacle(){
    let randomNumber = Math.floor(Math.random()*20)
    if(randomNumber === 5){
      this.obstacles.push(new Obstacle())
    }
  }

  drawEverything(){
    this.car.drawMyself();
    this.obstacles.forEach((obstacle)=>{
      obstacle.drawMyself();
    })
  }
}


class Obstacle{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random() * 500)
    this.y = 10;
    this.width =  Math.floor(Math.random() * 100)
    this.height =  Math.floor(Math.random() * 100)
    this.moveDown();
  }


  drawMyself(){ 
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }


  moveDown(){
    setInterval(()=>{
      this.y += 5;
    },100)
  }
}


  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    theGame = new Game();
 }

  document.onkeydown = function(e){
    let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    if(commands.includes(e.key)){
      e.preventDefault();
    }
    if(!keysBeingPressed.includes(e.key)){
      keysBeingPressed.push(e.key);
    }
  }

  document.onkeyup = function(e){
    let theIndex = keysBeingPressed.indexOf(e.key)
    console.log(theIndex)
    if(theIndex != -1){
      keysBeingPressed.splice(theIndex,1)
    }
  }



  class Car{
    constructor(){
      this.x = 280;
      this.y = 650;
      this.width = 45;
      this.height = 85;
      this.imgsrc = "./images/car.png";
      this.ctx = document.getElementById('game-board').getContext('2d');
    }


    drawMyself(){
      let theImage = new Image();
      theImage.src = this.imgsrc;
      theImage.onload = ()=>{
        this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
      }
    }

    move(){
    
      
      if(keysBeingPressed.includes("ArrowUp")){
        if(this.canMove(this.x, this.y-10)){
          this.y -= 10;
        }
        
      }
      if(keysBeingPressed.includes("ArrowDown")){

        if(this.canMove(this.x, this.y+10)){
        this.y += 10;
        }

      }

      if(keysBeingPressed.includes("ArrowLeft")){
        if(this.canMove(this.x-10, this.y)){
        this.x -= 10; 
        }
      }

      if(keysBeingPressed.includes("ArrowRight")){
        if(this.canMove(this.x+10, this.y)){
        this.x += 10; 
        }
      }
    }

    
    canMove(futureX, futureY){
      let result = true;
      if(futureX < 0 || futureX > 550 || futureY < 0 || futureY > 700 ){
        result = false;
      } 

      theGame.obstacles.forEach((obstacle)=>{
        // need to calculate the top left, top right, bottom left, and bottom right corner of each object
        if(futureX < obstacle.x+obstacle.width && futureX+this.width > obstacle.x && futureY < obstacle.y+obstacle.height && futureY+this.height > obstacle.y ){
          this.y = obstacle.y + obstacle.height + 5;
          result = false;
        }
      })
      return result;
    }


    



  }
