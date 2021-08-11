/* Objetos a se criar: pista, obstáculos
pista: imagem, width, height, posX, posY, context, canvas, drawField, move
obstáculo: width, height, posX, posY, context, canvas, color, drawObstacle, moveObstacle, collisionVerification
player: width, height, posX, posY, context, canvas, image, drawCar, moveCar, collisionVerification
*/

class Object {
   constructor (canvas, context, posX, posY, width, height) {
    this.canvas = canvas;
    this.context = context;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
 }
}

class Field extends Object {
   constructor(canvas, context, posX, posY, width, height, image) {
       super (canvas, context, posX, posY, width, height);
       this.image = image;
   }
}

drawField() {
    this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
}

moveField(speed) {
this.posY += speed;
}

class Obstacle extends Object {
    constructor(canvas, context, posX, posY, width, height,color){
        super (canvas, context, posX, posY, width, height);
        this.color = color;
    }
}

class PLayer extends Object {
    constructor(canvas, context, posX, posY, width, height, image) {
        super (canvas, context, posX, posY, width, height);
        this.image = image;
    }
 }