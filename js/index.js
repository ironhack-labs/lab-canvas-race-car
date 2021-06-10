window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    requestID =  requestAnimationFrame(update)
  }
};


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let frames = 0;
let requestID;

/*
const img = new Image()
img.src = "/images/car.png";
img.onload = function(){
  ctx.drawImage(img,100,100,100,120)
}
*/

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  }
}


class Car {
  constructor(x,y,w,h,imgs){
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.image = new Image();
  this.image.src = imgs;
  
}

draw(){
  
  

  ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
}}

class Background{
  constructor(){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = new Image ()
      this.image.src = "/images/road.png"
  }

  draw(){
    //
    this.y ++;
    console.log(this.y)
    this.y %= canvas.height; 
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    ctx.drawImage(
        this.image,
        this.x ,
        this.y - canvas.height,
        this.width,
        this.height
    )
}
}

    const carImg = "/images/car.png"
    

const carro = new Car (200,286,50,50,carImg)
const fondo = new Background()

function update(){
  frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  fondo.draw()
  carro.draw()
  
 console.log("holaa",requestID)
  if(requestID){
    requestID = requestAnimationFrame(update)
  }
}
addEventListener("keydown", (event)=>{
  //izq
  if(event.keyCode === 37){
      carro.x -= 20;
  }
  //de
  if(event.keyCode === 39){
      carro.x += 20
  }
  
  


  
})

