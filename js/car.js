class Car{

    constructor(ctx,x,y){
        this.ctx=ctx
        this.x=x
        this.y=y

        this.heigth= 200
        this.width= 80

        this.speed=4
        this.vx= 0
        this.vy=0
        

        this.movements = {
            right: false,
            left: false
        }

        this.img = new Image();
        this.img.src= './images/car.png'
        this.img.isReady= false;

        this.img.onload = () => {
            this.img.isReady=true;
        }
        
    }

    isReady(){
        return this.img.isReady
    }

    draw(){
        if(this.isReady()){
            this.ctx.drawImage(
                this.img, this.x, this.y, this.width,this.heigth
            )
        }
    }

    onKeyEvent(event){
        const status = event.type === 'keydown'

        if(event.keyCode === KEY_RIGHT){
            console.log('right clicked')
            this.movements.right = status
        }else if(event.keyCode === KEY_LEFT){
            this.movements.left = status
        }
    }
    move(){

        //Speed values
        if(this.movements.right){
            this.vx=this.speed
        }else if(this.movements.left){
            this.vx=-this.speed
        }else{
            this.vx=0
        }
        //Position values change with speed
        this.x+= this.vx
        

        //Lateral border collision conditions

        if(this.x + this.width >= this.ctx.canvas.width){
            this.x=this.ctx.canvas.width-this.width
        }else if(this.x <=0){
            this.x=0
        }
    }

    collisionWith(obstacle){
        if(this.y <= obstacle.y + obstacle.heigth
            &&this.x+this.width>=obstacle.x
            &&this.x<=obstacle.x + obstacle.width
            &&this.y + this.heigth >= obstacle.y
            ){
              return true
          }
        }
}


  

