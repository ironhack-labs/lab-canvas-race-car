/* Objects:
    1) field: width, height, x-axis, y-axis, context, canvas, image, 
    drawField, moveField;
    2) obstacles: width, height, x-axis, y-axis, context, canvas, color, 
    drawObstacle, moveObstacle, colisionVerification;
    3) player: width, height, x-axis, y-axis, context, canvas, image, 
    drawCar, moveCar, colisionVerification;
*/

// classe genérica - pontos em comum

class Object {
    constructor(canvas, context, xaxis, yaxis, width, height) {
        this.canvas = canvas;
        this.context = context;
        this.xaxis = xaxis;
        this.yaxis = yaxis;
        this.width = width;
        this.height = height;
    }

    move(speed) {
            this.yaxis += speed;
    }

    // aqui vai a lógica de colisão do carro
    top() {
        return this.yaxis;
    };

    bottom() {
        return this.yaxis + this.height;
    };

    left() {
        return this.xaxis;
    };

    right() {
        return this.xaxis + this.width;
    };

    crashWith(obstacle) {
        return !(   this.bottom() < obstacle.top() ||
                    this.top() > obstacle.bottom() ||
                    this.right() < obstacle.left() ||
                    this.left() > obstacle.right() 
                );
    };
}

// classe field que herda propriedades de object

class Field extends Object {
    constructor(canvas, context, xaxis, yaxis, width, height, image) {
        super (canvas, context, xaxis, yaxis, width, height);
        this.image = image;
    };

    // método que vai desenhar o game board

    drawField() {
        this.context.drawImage(this.image, this.xaxis, this.yaxis, this.width, this.height);
        this.context.drawImage(this.image, this.xaxis, this.yaxis - this.height, this.width, this.height);
        this.resetField();
    };


    resetField() {
        if(this.yaxis > this.height) {
            this.yaxis = 0;
        };
    };
}; 

// classe obstacle que herda propriedades de object

class Obstacle extends Object {
    constructor(canvas, context, xaxis, yaxis, width, height, color) {
        super (canvas, context, xaxis, yaxis, width, height);
        this.color = color;

        this.context.fillStyle = this.color;
    };

    drawObstacle() {
        this.context.fillRect(this.xaxis, this.yaxis, this. width, this.height);
    }
};  
        
// classe player que herda propriedades de object

class Player extends Object {
    constructor(canvas, context, xaxis, yaxis, width, height, image) {
        super (canvas, context, xaxis, yaxis, width, height);
        this.image = image;
    };

    drawCar() {
        this.context.drawImage(this.image, this.xaxis, this.yaxis, this.width, this.height);
    }

    move(key, speed) {
        switch (key.toLowerCase()) {
            case "arrowleft":
                // o if é para implementar os boundaries
                if (this.xaxis < 60) return;
                this.xaxis -= speed;
                break;
            case "arrowright":
                if(this.xaxis >this.canvas.width - 60 - 60) return;
                this.xaxis += speed;
                break;
            default:
                console.log("comando inválido")
        }
    }
}; 