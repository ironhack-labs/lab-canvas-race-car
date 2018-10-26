function Car(imagem, road) {
  this.x = 0;
  this.y = -20;

  this.draw = () => {
    const img = new Image();
    img.src = imagem;
    road.drawImage(img, this.x, -70, 40, 60);
    img.onload = function () {};
  };

  this.turnRight = () => {
    if (this.x >= 90) {
      return;
    }
    this.x += 10;
  };

  this.turnLeft = () => {
    if (this.x <= -130) {
      return;
    }
    this.x -= 10;
  };
}
  

