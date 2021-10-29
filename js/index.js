const canvas = document.getElementById("canvas") // <canvas>
const ctx = canvas.getContext("2d");


let requestID;
let frames = 0;
let score = 0


//elementos
class Car{
  constructor(x,y,w,h){
    //position
    this.x = x;
    this.y = y;

    this.width = w;
    this.height = h;

    this.image = new Image();
    this.image.src = "/images/car.png";
}
//   metodos

draw(){
            //(img,x,y,w,h)
   ctx.drawImage(this.image,this.x,this.y,this.width,this.height)

}
collision(obstacle){
  return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstaclex &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
  )
}
}



class Background{
  constructor(){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = new Image();
      this.image.src = "/images/road.png";
  }
  //Metodo
  draw(){
    this.y++;
    if(this.y > +canvas.height) this.y = 0
    //primera imagen 
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    //segunda imagen
    ctx.drawImage(
        this.image,
        this.x,
        this.y - this.height,
        this.width,
        this.height
    )
}
gameOver(){
  ctx.font="80px "
  ctx.fillText("Game Over",150,150)
}
}

//obstaculos
class Obstacle{
  constructor(x,w){
      this.x = x;
      this.y = canvas.height;
      this.width = w;
      this.height = 30;
      //imagen
      this.image = new Image();
      this.image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69996eb3-16b0-42f8-8ef8-52898ec0605b/d9c3fsj-ac103d38-ebcb-4471-b5a0-4a8b01cd346f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5OTk2ZWIzLTE2YjAtNDJmOC04ZWY4LTUyODk4ZWMwNjA1YlwvZDljM2Zzai1hYzEwM2QzOC1lYmNiLTQ0NzEtYjVhMC00YThiMDFjZDM0NmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HxjbGTLufEuSwD3zo_Y3HHYa-GGk6UXXpXdNIkCKPYs";
  }

  draw(){
      if(frames % 10 ===0 ) this.y += 5;

      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }

}








//declarando arreglos
const car = new Car(223,618,55,80);
const fondito = new Background();

let obstacles = []
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

function startGame() { 
    requestID = requestAnimationFrame(update)
  } 
};

function endGame(){
  fondito.gameOver();
  requestID = undefined;
}


startGame()


function generateObstacles(){
  // en que intervalos de tiempo quiero que se generen los enemigos
  if(frames % 200 == 0){
      
      let x = Math.floor(Math.random() * (180 - 50) + 50)
      let w = Math.floor(Math.random() * (130- 80) + 80)

      const obstacle = new Obstacle(x,w)

      obstacles.push(obstacle)
      //enemies = [...enemies, enemy ]
  }
}

function drawObstacles(){

  obstacles.forEach((obstacle,index_obstacle)=>{
      obstacle.draw()

      if(car.collision(obstacle)){
          
          endGame()
      }

      if(obstacle.y + obstacle.height >= 700){
        obstacle.splice(index_obstacle,1)
        score += 100
      }

  })
}


function update(){
  frames++;
  ctx.clearRect(0,0,canvas.width,canvas.height)


  
  fondito.draw()
  car.draw()
  //obstacles 
  generateObstacles()
  drawObstacles()

  if(requestID){
     requestAnimationFrame(update)
  }
}

update();





//controles de movimiento
addEventListener("keydown",(event)=> {
  //izq
  if(event.keyCode === 37 ){
      car.x -= 20;
  }

  //dere
  else if(event.keyCode === 39){
      car.x += 20;
  }

})

