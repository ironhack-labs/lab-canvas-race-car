
class Road {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.imgRoadSrc = '../images/car.png';
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.speed = 2;
    this.direction = 0; 
  }

  update(){ // move vertically--> + y coord
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    let imgRoad = new Image(); // create image object
    imgRoad.src = this.imgRoadSrc;
    imgRoad.onload = () => {
      // draw background 1
      this.ctx.drawImage(imgRoad, this.x, this.y, this.width, this.height);
      // // draw background 2 -- below canvas.height
      this.ctx.drawImage(imgRoad, this.x, this.y - this.height, this.width, this.height);
    }
  }

  checkScreen(){ // 
    // if passes the bottom of screen
    if (this.y - this.height / 2 <= 0){
      this.direction =  1; // add 1, so the direction is to right
    } else if (this.y + this.height / 2 >= this.canvas.height) { // off to the right
      this.direction = -1; // to the left of the board
    }
  }

}

export default Road;