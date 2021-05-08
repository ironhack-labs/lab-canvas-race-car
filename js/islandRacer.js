const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class CanvasEntity {
    constructor(
        positionX,
        positionY,
        width,
        height,){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
}

class Background extends CanvasEntity {
    constructor(
        positionX,
        positionY,
        width,
        height,
        backgroundImage,){

        super(positionX, positionY, width, height);
        this.backgroundImage = new Image();
        this.backgroundImage.src = backgroundImage;
        this.points = 0;

    }

    draw(){
        //DrawBackground
        ctx.drawImage(this.backgroundImage, this.positionX, this.positionY, this.width, this.height);
    }

    score() {
        ctx.fillStyle = "black";
        ctx.font = "40px Arial";
        ctx.fillText(`Score: ${this.points}`, 65, 35);
    }

    gameOver(){
        ctx.fillStyle = "black";
        ctx.fillRect(40, 0, canvas.width-80, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText(`GAMEOVER`, 140, 300);
        ctx.fillText(`Score: ${this.points}`, 140, 360);
    }
}

class Player extends CanvasEntity {
    constructor(
        positionX,
        positionY,
        width,
        height,
        imageSrc){

        super(positionX, positionY, width, height);
        this.image = new Image();
        this.image.src = imageSrc;

    }

    draw(){
        //Player
        ctx.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
    }

    coillision(obstacle) {
        return (
            this.positionX < obstacle.positionX + obstacle.width &&
            this.positionX + this.width > obstacle.positionX  &&
            this.positionY < obstacle.positionY + obstacle.height &&
            this.positionY + this.height > obstacle.positionY
        )
    }
}

class Obstacle extends CanvasEntity {
    constructor(
        positionX,
        positionY,
        width,
        height){
        super(positionX, positionY, width, height);
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
}