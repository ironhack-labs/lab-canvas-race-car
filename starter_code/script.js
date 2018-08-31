


window.onload = function() {
  
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
   
//////////////////////////////////////////////////////////


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//



///CAR
/*var car = new Image()
car.src = "./images/car.png"
car.onload=function(){
ctx.drawImage(car,285,790,50,100)
/////////////(car,player.x,player.y,50,100)
}*/

class Carro{
  constructor(x,y,w,h){
    this.x=275
    this.y=780
    //this.x=x
    //this.y=y
    this.w=w
    this.h=h
    this.image=new Image()
    this.image.src="./images/car.png"
    this.image.onload=function(){
     // this.draw()
    }
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,50,100)

  }
  goRight(){
    if(this.x>500)return
    this.x+=10
  }

  goLeft(){
    if(this.x<50)return
    this.x-=10
  }
}

function background(){
  //road----
ctx.fillStyle="green";
ctx.fillRect(0,0,40,900);

ctx.fillStyle="green";
ctx.fillRect(560,0,40,900);

ctx.fillStyle="grey";
ctx.fillRect(40,0,520,900);

ctx.fillStyle="white";
ctx.fillRect(40,0,20,900);

ctx.fillStyle="white";
ctx.fillRect(540,0,20,900);


//linea punteada
ctx.strokeStyle="white";
ctx.lineWidth=7;
ctx.moveTo(300, 0)
ctx.lineTo(300, 900)
ctx.setLineDash([30, 10])
ctx.stroke()
}


var carrin = new Carro()

console.log(carrin)
var interval = setInterval(function(){
  background()
  carrin.draw()
},1000/60)

document.onkeydown=function(e){
  switch(e.keyCode){
    case 37: carrin.goLeft()
       break;
    case 39: carrin.goRight()
      break;
    }
  }



  }










/*
var car = new Image()
  car.src = "./starter_code/images/car.png"

  car.onload=function(){
    ctx.drawImage(car,player.x,player.y,158,319)


  }

  
var car = new Cuadro(0,0,50,50,'blue')

var interval = setInterval(function(){
  ctx.clearRect(0,0,600, 300)
  cuadrito1.draw()

}, 1000/60)

*/
}
