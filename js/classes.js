


class Background{
    constructor(){
        this.height=canvas.height;
        this.width=canvas.width;
        this.image=new Image()
        this.image.src = "images/road.png"
        this.y=0,
        this.x=0
    }

    render(){
        this.y ++;
        if(this.y > canvas.height){
            this.y=0
        }
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(
            this.image,
            this.x,
            this.y - this.height,
            this.width,
            this.height)
    }
}





class Car{
    constructor({x,y,h,w}){
        this.height=h;
        this.width=w;
        this.image=new Image()
        this.image.src = "images/car.png"
        this.y=y,
        this.x=x
        addEventListener("keydown",this.keydown)
    }
    keydown=(key)=>{
        switch(key.which){
            case 37:
                this.x-=10;
            break;
            case 39:
                this.x+=10;
            break;
        }
    }
    render(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    collition(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}


class Obstacles{
    constructor({x,y,h,w}){
        this.height=h;
        this.width=w;
        this.y=y;
        this.x=x
    }

    render(){        
        this.y ++;
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}
