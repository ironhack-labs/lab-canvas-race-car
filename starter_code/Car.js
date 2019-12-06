class Car {
  constructor(initialPosX, initialPosY, imgSrc) {
    // this.c = context;
    this.x = initialPosX;
    this.y = initialPosY;
    this.imgSrc = imgSrc;
  }

  drawImg(context) {
    const image = new Image();
    image.src = this.imgSrc;
    // const that = this; // envelopa um contexto e passa pra baixo
    image.onload = () => {
      context.drawImage(image, this.x, this.y, image.width * 0.3, image.height * 0.3);
    };
  }
}
