var canvas=document.getElementById('canvas')
var ctx =canvas.getContext('2d')

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    
   function background(){ 
     //fondo gris
    ctx.fillStyle = "#7F7F7F";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //pasto
    ctx.fillStyle = "#008F00";
    ctx.fillRect(0,0,30,630);
    ctx.fillRect(420,0,30,630);
    //rayas laterales
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(40,0,10,630);
    ctx.fillRect(400,0,10,630);
    //línea punteada
    ctx.beginPath()
    ctx.strokeStyle= "white";
    ctx.lineWidth=7;
    ctx.moveTo(225,0);
    ctx.lineTo(225,630);
    ctx.setLineDash([20,10]);
    ctx.stroke()
   } 
   class player{
    constructor(x,y,w,h){
      this.x=200
      this.y=555
      this.w=w
      this.h=h
      this.image=new Image()
      this.image.src="./images/car.png"
      this.image.onload=function(){
        this.draw()
      }.bind(this)
    }
    draw(){
      ctx.drawImage (this.image,this.x,this.y,50,70)
      }
    goRight(){
        if(this.x>canvas.width-this.w*2)return
        this.x+=10  
      }
    goLeft(){
        if(this.x==0)return
        this.x-=10
      }  
    }
    

  
  var carrito  = new player()
  var interval = setInterval(function(){
  background()
  carrito.draw()
  }, 1000/60) 
  document.onkeydown=function(e){
    switch(e.keyCode){
      case 37: carrito.goLeft()
        break;
      case 39: carrito.goRight()
        break;
           }
  } 
 

  }
};
