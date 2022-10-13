const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowRight":
            player.moveRight()
            break;
        case "ArrowLeft":
            player.moveLeft()
            break;     
    }
})

class Car { 
     constructor (x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
} 

moveLeft() {
    this.x -= 10
}

moveRight() {
    this.x += 10
}

draw() {
        let car = new Image(); 
        car.src ="/images/car.png"
        ctx.drawImage (car, this.x, this.y, 50, 50);     
}

top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

left() {
    return this.x
}

right() {
    return this.x + this.w
}

}


class Game {
constructor (ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;  
        this.obstacles = []
        this.frames = 0; 
    } 

start() {
    this.intervalId = setInterval(this.update, 500 / 60) 
}

drawRoad () {
const road = new Image();
road.src ="/images/road.png";
  ctx.drawImage(road, 0, 0, 500, 700)
}

score () {
    const points = Math.floor(this.frames / 50);
    this.ctx.font = "25px monospace"
    this.ctx.fillStyle = "black"
    this.ctx.fillText (`Puentos: ${points}`, 320, 50)
}

clear() {
    this.ctx.clearRect(0, 0, this.width, this.height) 
  } 

update = () => {
    this.frames ++;
    this.clear();
    this.drawRoad();
    this.player.draw();
    this.updateObstacles ();
    this.checkGameOver ();
    this.score ();
  }

stop() {
    clearInterval(this.intervalId);
}

checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
});

if(crashed) {

        this.stop();
    }
}

updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++ ) {
        this.obstacles [i].y += 1;
        this.obstacles[i].draw();
    }
    if (this.frames % 180 === 0){
        let y = 0;
        
        let minWidth = 50
        let maxWidth = 300

        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
        
     
        this.obstacles.push(new Component(randomX - width, 0, width, 30, "black", this.ctx))
        
        let minGap = 50;
        let maxGap = 250;

        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

        this.obstacles.push(
            new Component(0 + gap, 0, width, 50, "red", this.ctx)
          );

    } 
}

}


window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      game.start()
    } 
}

const player = new Car(250, 600, 50, 50, ctx)
let game = new Game (ctx, 500, 700, player)

game.start();












