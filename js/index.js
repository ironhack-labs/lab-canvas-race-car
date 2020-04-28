const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  inicializar: function(){
    this.img = new Image();
    this.img.src = "images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },
  mostrar: function(){
    console.log("mostrar");
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const car ={ 
  img: null,
  x: parseInt(canvas.eidth) /2-20,
  y: canvas.height /2+140,
  speedX: 4,
  inicializar: function(){ 
  this.img = new Image();
  this.img.src = "images/car.png";
  this.width = 40;
  this.height = (319/158)*this.width;
  this.img.onload = this.mostrar();
},  
  mostrar:function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class objects{
  constructor(){
    this.x=Math.floor(Math.random()* 150)+20;
    this.y =0;
    this.width = Math.floor(math.random()*100)+20;
    this.height=10;
    this.speed= 120;
  }
  showObject(){
    ctx.fillstyle='red';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
  moveObject(){
    this.y+=this.speed;
  }
}


function newPosition(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  road.mostrar();
  car.mostrar();
  objects.mostrar();
  requestAnimationFrame(update);
  }



function move(event){
  if (event.code == "ArrowLeft" && car.x >= 0){
    car.x-=car.speedX;
  }
  if (event.code == "ArrowRight" && car.x + car.width <= canvas.width) {
    car.x+=car.speedX;
  }
}

window.onload= () =>{
  document.getElementById('start-button').onclick = () => {
    startGame();
    document.onkeydown = move;
    requestAnimationFrame(update);
  };
  function startGame(){
    road.inicializar();
    road.mostrar();
  }
}