class Obstacle {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.x = Math.floor(Math.random() * 440 + 30);
    this.y = 150;
    this.width = 100;
    this.height = 150;
    this.img = new Image();
  }

  draw() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.src = './images/car.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 20) % 3 === 0) {
      console.log('moving ---- ', this.y);
      this.y += 0.5;
    }
  }
}
