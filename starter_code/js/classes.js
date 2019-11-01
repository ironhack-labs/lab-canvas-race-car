class Board {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'gray';
        ctx.fillRect(50, 0, 350, canvas.height);

        ctx.fillStyle = 'white';
        ctx.fillRect(60, 0, 10, canvas.height);

        ctx.fillStyle = 'white';
        ctx.fillRect(380, 0, 10, canvas.height);

        ctx.fillStyle = 'white';
        ctx.fillRect(380, 0, 10, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 10, 5, 40);

        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 90, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 170, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 250, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 330, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 410, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 490, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 570, 5, 40);
        ctx.fillStyle = 'white';
        ctx.fillRect(canvas.width / 2, 650, 5, 40);


        // for(let i = 0; i <= 14; i++) {
        //     let distance = 10;
        //     ctx.fillStyle = 'white';
        //     ctx.fillRect(canvas.width / 2, distance, 5, 40);
        //     distance = distance + 50;
        // }
    }
}

class Car {
    constructor(){
        this.width = 50
        this.height = 100
        this.y = 550 // canvas.height - this.height
        this.x = canvas.width / 2 - 20
        this.vx = 0
        this.position = 0
        this.img = new Image()
        this.img.src = 'images/car.png';
        this.hp = 1;
    }
    draw(){
        if (this.x > canvas.width - this.width ) {
            this.x = canvas.width - this.width
          } else if (this.x <= 0){
            this.x = 0;  
          }
           else {
            //this.vx++
          }
        ctx.drawImage(
        // imagen de fuente
        this.img,
        // posición de x en canvas (destino, dx)
        this.x,
        // posición de y en canvas (destino, dy)
        this.y,
        // ancho desde la posición de x en canvas (dw)
        this.width,
        // alto desde la posición de y en canvas (dh)
        this.height
        )
    }
    moveLeft() {
        this.vx -= 2
        this.position = 1
    }
    moveRight() {
        this.vx += 2
        this.position = 2
    }
    isTouching(obstacle) {
        return (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x && 
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        );
    }
}

class Obstacle {
    constructor(x){
        this.x = x;
        this.y = 0;
        this.width = 200;
        this.height = 50;
    }
    draw(){
        this.y += 5;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);    
    }
}
