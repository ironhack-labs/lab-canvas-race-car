class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        //0,0 es el origen  del canvas
        this.width = Canvas.width;
        this.height = Canvas.height;
        this.image = new Image()
        this.image.src="images/road.png"
    }  
    //methods
  
    draw(){
        this.y ++; //a tu x restale 1
        if(this.y > +Canvas.height){ //hacer loop del mapa para que mi imagen sea infinita 
            this.y=0
        }
  
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(
            this.image,
            this.x,
            this.y - this.height,
            this.width,
            this.height
        )
    }
    gameOver(){
        /*ctx.font = "50px Arial"
        
        ctx.fillText("Game Over",150,150)*/
    }

}
class Character{
    //valores dinamicos()
constructor(x,y,w,h){
this.x=x
this.y=y
this.width=w
this.height=h
   
}
//methods
selectCharacter(){
return "Selecciona algo";
}


}

class Car extends Character{
    constructor(carImg,x,y,w,h){
        super(x,y,w,h)
        this.image1=new Image()
        this.image1.src=carImg
        
    }

    draw(){

        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        
    }
    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Obstacules {
    constructor (x,y,w,h){
       this.x=x;
       this.y=y;
       this.width=w;
       this.height=h;
    }

    draw(){
       this.y +=2;
       ctx.beginPath();
       ctx.fillStyle="red"
       ctx.rect(this.x,this.y,this.width,this.height)
       ctx.fill()
        
        console.log("que se dibuja")
    }
}