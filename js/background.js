class Background {
  constructor() {
    this.height = 700;
    this.width = 500;
  }
  drawBg() {
    let img = new Image();
    img.src = "../images/road.png";
    ctx.drawImage(img, 0, 0, width, height);
  }
}
