function Car(){
    this.x = 680;
    this.y = 135;
    this.speed = 0;
}

Car.prototype.show = function(ctx){
    var img = new Image();
    img.onload = function(ctx) {
        ctx.drawImage(img, this.y, this.x, 50, 70);
      };
      img.src = "images/car.png";
    }

Car.prototype.move = function(e){
    for(i=0;i<1000;i++){
        this.x-=5;
    }
    switch(e.keyCode){
            case 37:
                this.x -= 5;
                if(this.x<20){
                    this.x = 20;
                }
                break;
            case 39:
            this.x += 5;
            if(this.x > 265){
                this.x = 265;
            }
            break;
            default:
            return;
        }
    }

Car.prototype.render = function(ctx,img){
    ctx.update(img,this.y,this.x,35,20);
}