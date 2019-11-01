
  class Car {
    constructor(game) {
      this.game = game;
      this.col = 152;
      this.row = 400;
      this.width = 40;
      this.height = 80;
  }

  drawCar(){
    const IMAGE_URL = "images/car.png";
    const image = new Image();
    image.src = IMAGE_URL;
    const imageHeight = image.height;
    const imageWidth = image.width;
    game.context.drawImage(image, this.col , this.row, imageWidth *0.3, imageHeight *0.3 )
  }


  moveLeft(){
    if (this.col > 50){
        this.col -= 10
    }
  }

  moveRight(){
    if (this.col < 270){
    this.col += 10
  }
}

}
