

function drawCar(player){
    const IMAGE_URL = "images/car.png";
    const image = new Image();
    image.src = IMAGE_URL;
    image.addEventListener('load', () => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    context.drawImage(image, player.col , player.row, imageWidth *0.3, imageHeight *0.3 )
  })
  };

  class Car {
    constructor(col, row) {
      this.col = 152;
      this.row = 400;
  }
  moveLeft() {
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