
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let frames = 0
let requestID
const muros = []

// seccion de clases

class Background{
  constructor(){
    //propiedades
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = "images/road.png"
  }

  //metodos
draw(){
  this.y +=3
  if(this.y > canvas.height){
    this.y = 0
  }          
  
  ctx.drawImage(this.image,this.x,this.y, this.width, this.height)

  ctx.drawImage(
    this.image,
    this.x ,
    this.y - this.height ,
    this.width,
    this.height         
  )
}
gameOver(){
  ctx.fillStyle="red"
  ctx.font = "70px Arial"
  ctx.fillText("GAME OVER",50,325)
}


}

class Car{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image()
    this.image.src = "images/car.png"  //checar aqui
  }

  //metodos
  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

  }

  collision(item){
    return(
        this.x < item.x + item.width && 
        this.x + this.width > item.x &&
        this.y < item.y + item.height &&
        this.y + this.height > item.y
    )
}



}

class Muro{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = canvas.width-200
    this.height = 50
  }
  draw(){ 
    ctx.fillStyle="yellow"
    ctx.fillRect(this.x,this.y,this.width,this.height)
    this.y +=2; 
      if (this.y > canvas.height) {
          this.y = 0;
      }
  }
}





 // instancias
 const pista = new Background()
 const car = new Car(220,550,50,100)
 //const muro = new Muro(20,20)


 window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



};

function startGame() {
    if(requestID)return
    requestID = requestAnimationFrame(updateCanvas)
   
    
}


function updateCanvas(){
  frames ++;
  //limpiamos el canvas es MUY importante para que no se sobreponga las capas anteriores
  ctx.clearRect(0,0,canvas.width, canvas.height)
  pista.draw()
  car.draw()
  //muro.draw()
  generateMuros()
  drawMuros()
  score()
  

if(requestID){
  requestID = requestAnimationFrame(updateCanvas)
  }
 
}


//mover el coche
addEventListener("keydown",(event) => {
  //izquierda
  if(event.keyCode === 37){
    if (car.x > 40){
      car.x -=15  
    }
    
  }

  //derecha
  if(event.keyCode === 39){
    if (car.x < canvas.width - 90){
      car.x +=15  
    }
    
  }
})

function generateMuros(){
  if (frames % 250 === 0 || frames % 410 === 0) {
        let x = Math.floor(Math.random() * (140-40)) + 40
        // return Math.floor(Math.random() * (max - min)) + min;
        const muro = new Muro(x,0) 
        muros.push(muro)
    }
}


function drawMuros(){
  muros.forEach((muro,index_muro) => {
      muro.draw()
      if(car.collision(muro)){
        requestID = undefined
        pista.gameOver()
      }



  })
}


function score(){
  const puntos = Math.round(frames/25)
  ctx.fillStyle="black"
  ctx.font = '25px Arial';
  ctx.fillText(`Score ${puntos}`, 10, 25);
}