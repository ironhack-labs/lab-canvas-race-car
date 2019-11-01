  const IMAGE_URL = "images/car.png";
  const image = new Image();
  image.src = IMAGE_URL;
  

class Player {
    constructor(game) {
      this.col = 182;
      this.row = 480;
      this.height = game.height;
      this.width = game.width;
      this.context = game.context;
    }
    moveLeft() {
      if (game.player.col>0){
      this.col -= 20;
    }}
    moveRight() {
      if (game.player.col<370){
      this.col += 20;
    }}
    
    drawPlayer() {
        context.drawImage(image, this.col, this.row, 50, 90)
    }
}
