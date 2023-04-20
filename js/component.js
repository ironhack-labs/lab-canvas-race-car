console.log("JS is loaded component")

class Component {
    constructor(x,y,w,h,color,ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
      
       }
   draw(){
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
 
 
}

class Player{
   constructor(x,y,w,h,color,ctx){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
      this.ctx = ctx;
      
      

      const img = new Image();
      img.addEventListener("load", ()=>{
      this.img = img;
      
    });
    img.src="../images/car.png";
     }
     draw(){
      ctx.drawImage(this.img, this.x, this.y, 50,50)

     }
     moveLeft(){
      this.x-=20;
     }
     moveRight(){
      this.x+=20;
     }

     newPos(){
      if(this.x<0){
         this.x=0;
     }
     if(this.x>=canvas.width-40){
         this.x=canvas.width-40;
     }
      
   } 
   top(){
      return this.y;
   }
   bottom(){
      return this.y + this.h;
   }
   left (){
      return this.x;
   }
   right(){
      return this.x + this.w;
   }
   /*crashWith(enemy){
      return (this.bottom()>enemy.top() && 
      this.top() < enemy.bottom() && 
      this.right() > enemy.left() 
      && this.left() < enemy.right())
   } */
}