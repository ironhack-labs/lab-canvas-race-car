var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


class Cuadro{
  constructor(x,y,w,h,color){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.color=color
    this.right=true
    this.down=false
    
  }
  draw(){ 
    ctx.fillStyle=this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
  goRight(){
    if(this.x>400)return
    this.x+=this.w
  }
  goLeft(){
    if(this.x<50)return
    this.x-=this.w
  }
  goDown(){
    if(this.y>200)return
    this.y+=this.h
  }
  goUp(){
    if(this.y<50)return
    this.y-=this.h
  }
}

var cuadrito1 = new Cuadro(0,0,50,50,'blue')

var interval = setInterval(function(){
  ctx.clearRect(0,0,600, 300)
  cuadrito1.draw()

}, 1000/60)

document.onkeydown=function(e){
  switch(e.keyCode){
    case 38: cuadrito1.goUp()
       break;
    case 40: cuadrito1.goDown();
      break;
    case 37: cuadrito1.goLeft();
      break;
    case 39: cuadrito1.goRight();
      break;
  }
}