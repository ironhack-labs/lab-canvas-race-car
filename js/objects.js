class Object {
    constructor(canvas, context, posX, posY, width, heigth){
        this.canvas = canvas;
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.heigth = heigth;
    }

    move(speed){
        this.posY += speed;
    }

    top(){
        return this.posY;
    }

    bottom(){
        return this.posY + this.heigth;
    }

    left(){
        return this.posX;
    }

    right(){
        return this.posX + this.width;
    }

    crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
}

class Field extends Object {
    constructor(canvas, context, posX, posY, width, heigth, image){
        super(canvas, context, posX, posY, width, heigth);
        this.image = image;
        
    }

    drawField(){
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
        this.context.drawImage(this.image, this.posX, this.posY - this.heigth, this.width, this.heigth);

        this.resetFieldPos();
    }

        
    resetFieldPos(){
        if (this.posY > this.heigth){
            this.posY = 0;
        }
    }
}

class Obstacle extends Object {
    constructor(canvas, context, posX, posY, width, heigth, color){
        super(canvas, context, posX, posY, width, heigth);
        this.color = color;

        this.context.fillStyle = this.color;
        
    }

    drawObstacle(){
        this.context.fillRect(this.posX, this.posY, this.width, this.heigth);
        
    }

}

class Player extends Object {
    constructor(canvas, context, posX, posY, width, heigth, image){
        super(canvas, context, posX, posY, width, heigth);
        this.image = image;
    }

    drawCar(){
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    
    }

    move(keyCode, speed) {
        switch (keyCode) {
            case 37:
                if (this.posX < 60) return;

                this.posX -= speed;
                break;
            case 39:
                if (this.posX > this.canvas.width - 115) return;

                this.posX += speed;
                break;
            default:   
                console.log('Invalid key');      
        }
    }
}