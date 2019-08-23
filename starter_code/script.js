
const canvas =document.querySelector('canvas')
const ctx =canvas.getContext('2d')
let interval
let frames=0
const MyObstacles =[ ]
let score=0
// let player = new Component (30,30,"blue",0,110)

////////////////////////////////////////////



class Component { 

  constructor(width, height,color, x, y,){
    this.width=25
    this.height=50
    this.color=color
    this.x=x
    this.y=y

    this.speedX=0
    this.speedY=0

    this.img=new Image()
    this.img.src='./images/car.png'
    this.img.onload =()=> {
    ctx.drawImage(this.img, this.x, this.y ,this.width, this.height)
  }
  }
   draw(){
  ctx.drawImage(this.img, this.x, this.y, this.width,this.height)
     }

    newPos(){
    this.x += this.speedX 
    this.y += this.speedY   }

    top(){return this.y}
        bottom(){return this.y + this.height}
        
        left(){return this.x}
        right(){return this.x + this.width}



           crashWith(theObstacles){
        return !(
            this.bottom()   < theObstacles.top()    ||
            this.top()      > theObstacles.bottom() ||
            this.right()    < theObstacles.left()   ||
            this.left()     > theObstacles.right()  
)
}

}

class Obstacles { 

 constructor(width, height,color, x, y,){
    this.width=width
    this.height=height
    this.color=color
    this.x=x
    this.y=y

    this.speedX=0
    this.speedY=0
}

 draw(){
   ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
     }

   top(){return this.y}
        bottom(){return this.y + this.height}
        
        left(){return this.x}
        right(){return this.x + this.width}
     

}


////////////////////////////////////////////
let thePlayer=new Component(30,30,"red",180,430)
let theObstacles=new Obstacles(0,0,"red",180,430)

function updateCanvas(){
  frames+=1
  clearCanvas()
  background()
  thePlayer.newPos()
  thePlayer.draw()
  drawObstacles()
  updateObstacles()
  checkGameOver()
  updateScore()
 
}
////////////////////////////////////////////
function updateScore(){

ctx.font='30px Courier'
ctx.fillStyle='white'
ctx.fillText(`Score : ${score}`, 50,40)

}

function finalScreen(){
ctx.fillStyle='black'
ctx.fillRect(0,0,400,500)
ctx.font='28px Courier'
ctx.fillStyle='red'
ctx.fillText(`GAME OVER !` , 12,120)
ctx.font='18px Courier'
ctx.fillStyle='white'
ctx.fillText(`YOUR FINAL SCORE IS :${score}`, 12,180)
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
 
};

function background(){

ctx.fillStyle='green'
ctx.fillRect(0,0,400,500)
ctx.clearRect(25,0,350,500)
ctx.fillStyle='gray'
ctx.fillRect(25,0,350,500)
ctx.clearRect(35,0,10,500)
ctx.clearRect(355,0,10,500)
ctx.clearRect(190,0,10,40)
ctx.clearRect(190,80,10,40)
ctx.clearRect(190,160,10,40)
ctx.clearRect(190,240,10,40)
ctx.clearRect(190,320,10,40)
ctx.clearRect(190,400,10,40)
ctx.clearRect(190,480,10,40)

}
function startGame(){
  interval = setInterval(updateCanvas, 10)  
}

function stop() { // funcion para pausar el juego
    clearInterval (interval)
      finalScreen()
      
    interval = null 
    }

function checkGameOver()    {
    let crashed = MyObstacles.some(theObstacles => thePlayer.crashWith(theObstacles)) 
    if (crashed) {stop()}
   
                            }

function clearCanvas() {  // al ejecutarla limpiara el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)}

document.onkeydown = event => {
    switch(event.keyCode) {
  //   case 38: 
  //   thePlayer.speedY -= 1
  //   break;

  // case 40: 
  // thePlayer.speedY += 1
  // break;
        
  case 37: 
  thePlayer.speedX -= 1
  break;

  case 39: 
  thePlayer.speedX += 1
  break;

        // este caso 32 (tab) crea la funcion para iniciar el juego
  case 32: 
  if (interval) break;
  startGame()
        // agregamos un intervalos para que no llegue a reiniciarse ya iniciado el juego (duplica los frames)
  break; 

   case 81: // letra Q
  stop()
  break;

    default: 
    break;               }
                            }


  document.onkeyup = (event) => { // para q al soltar tecla no mantenga la velocidad
    thePlayer.speedX = 0
    thePlayer.speedY = 0           } 



function updateObstacles() { // se agregaran cada determinados frames
    if ( frames % 120 === 0) { // tiempo en frames en el q se cambian los obstaculos
        let y        = 0
        let minWidth = canvas.width * 0.075
        let maxWidth  = canvas.width * 0.75
        let width   = Math.floor(Math.random()* (maxWidth-minWidth)) 
        
         let random   = Math.floor(Math.random()*canvas.width)
        // MyObstacles.push(new Obstacles (10, width, "red", 0, y)        )
        MyObstacles.push(new Obstacles (width ,40, 'red',random,0) )
        score++
    }

}

function drawObstacles (){  // tenemos el arreglo de myobstacles que le haremos for each para crear 
                                // obstaculos infinitos
    MyObstacles.forEach(theObstacles => {
        theObstacles.y += 1
        theObstacles.draw()  // para que SI se dibujen esta vez
                                        })
}




updateCanvas()






////////////////////////////////////////////////////////////////////////////////////////