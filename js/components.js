class Component {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  newPos() {
    this.x += this.speedX % 500;
    this.y += this.speedY % 700;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
}

/*class Invisible1 {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
}

class Invisible2 {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
}*/

class Player {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.speedX = 0;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./images/car.png";
  }
  newPos() {
    this.x += this.speedX % 500;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 100);
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
  /*crashWithLeft(inv) {
    return !(
      this.bottom() < inv.top() ||
      this.top() > inv.bottom() ||
      this.right() < inv.left() ||
      this.left() > inv.right()
    );
  }
  crashWithRight(inv) {
    return !(
      this.bottom() < inv.top() ||
      this.top() > inv.bottom() ||
      this.right() < inv.left() ||
      this.left() > inv.right()
    );
  }*/
}
