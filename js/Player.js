// Class Background, Car
class Sprite {
  constructor({position}) {
    this.position = position
    this.image = new Image()
    this.image.src = '/images/road.png'
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y, canvas.width, canvas.height)
  }
}


// Class Player , Moves
class Player {
    constructor() {
      this.position = {
        x: 200,
        y: 500,
      }
      this.velocity = {
        b: 0,
        c: 0, 
      }
      this.width = 100
      this.height = 100
      this.sides = {
        bottom: this.position.y + this.height
      }
    }
    draw() {
      let car = new Image()
      car.src = '/images/car.png'
      ctx.drawImage(car, this.position.x, this.position.y, 100, 170); 
    }
    moveRight() {
      this.position.x += 10
    }
    moveLeft() {
      this.position.x -= 10
    }
    update() {
       this.sides.top = this.position.y + 170
       //above bottom of canvas
       if (this.sides.top < canvas.height) {
           this.position.y --       
    } else this.velocity.c = 0
   }
  }

// Obstacles
class Obstacles  {
    constructor (a, w, h, color, ctx){
        this.a = 20
        this.weidth = 150;
        this.height = 10;
        this.color = 'yellow';
        this.ctx = ctx;
    }

// Draw Obstacles 
draw(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.w, this.h);
    }
    one() {
        return this.a;
    }
    two() {
        return this.a + this.w;
    }
  };

 //Class Game 
  // class Game {
  //   constructor(ctx, width, height, player) {
  //     this.ctx = ctx;
  //     this.width = width;
  //     this.height = height;
  //     this.player = player;
  //     this.intervalId = null;
  //   }

  // start () {
  //   this.intervalId = setInterval(this.upDate, 1000 / 60);
  //   }
  // }

