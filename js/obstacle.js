class Obstacle {
  constructor(ctx, side) {
    this.ctx = ctx;
    this.width = Math.random() * 150 + 150; //para estar entre 230 e 330px, descontando 50px de cada lado e 90px para passar o elro
    this.height = 30;
    this.x = side ? 40 : 460 - this.width; //empieza o em 50px para estar a la izquierda o en (450px-width) para estar a la derecha
    this.y = 0;
    this.vy = 2;
    this.color = "blue";
    this.img = new Image();
    this.img.src = "./images/barrier.png";
  }

  move() {
    this.y += this.vy;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  collide(elem) {
    const collideX =
      elem.x + elem.width > this.x && elem.x < this.x + this.width;
    const collideY =
      elem.y < this.y + this.height && elem.y + elem.height > this.y;

    return collideX && collideY;
  }
}
