

class Object {
    constructor(canvas, context, posX, posY, width, height) {
        this.canvas = canvas;
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    move(speed) {
        this.posY += speed;
    }
}

class Field extends Object {
    constructor(canvas, context, posX, posY, width, height, image) {
        super(canvas, context, posX, posY, width, height);
    this.image = image;
    }

    
    drawField() {
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.context.drawImage(this.image, this.posX, this.posY - this.height, this.width, this.height);
        this.resetField()
    }

    resetField() {
        if (this.posY > this.height) {
            this.posY = 0;
        }
    }
}

class Obstacle extends Object {
    constructor(canvas, context, posX, posY, width, height, color) {
        super(canvas, context, posX, posY, width, height);
    this.color = color;

    this.context.fillStyle = this.color;
    }

    drawObstacle() {
        this.context.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

class Player extends Object {
    constructor(canvas, context, posX, posY, width, height, image) {
        super(canvas, context, posX, posY, width, height);
    this.image = image;
    }

    drawPlayer() {
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move(keyCode, speed) {
        switch (keyCode) {
            case 37:
                if (this.posX < 80) return;
                this.posX -= speed;
                break;
            case 39:
                if (this.posX > this.canvas.width - 160) return;
                this.posX += speed;
                break;
                default:
                    console.log('Invalid Key')
        }
    }
}
