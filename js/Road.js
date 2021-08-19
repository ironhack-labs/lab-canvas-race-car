class Road {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.speed = 2;

    this.x = 0;
    this.y = 0;

    const roadImg = new Image();
    roadImg.src = "../images/road.jpg";
    this.roadImg = roadImg;
  }

  move() {
    this.y += this.speed;
    this.y %= this.height;
  }

  draw() {
    // roadContext.drawImage(this.roadImg, 0, 0, roadCanvas.width, roadCanvas.height);
    // this.interval = setInterval(this.update, 1);

    roadContext.drawImage(
      this.roadImg,
      0,
      this.y,
      roadCanvas.width,
      roadCanvas.height
    );
    if (this.speed < 0) {
      roadContext.drawImage(
        this.roadImg,
        0,
        this.y + roadCanvas.height,
        roadCanvas.width,
        roadCanvas.height
      );
    } else {
      roadContext.drawImage(
        this.roadImg,
        0,
        this.y - roadCanvas.height,
        roadCanvas.width,
        roadCanvas.height
      );
    }
  }
}
