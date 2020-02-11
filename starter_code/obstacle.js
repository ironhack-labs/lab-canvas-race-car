// var $canvas = document.querySelector('canvas');
// var context = $canvas.getContext('2d');

class Obstacle {
  constructor() {
    this.positionX = 0;
    this.positionY = -30;
    this.height = 30;
    this.width = 0;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.positionX = Math.random() * 400;
    this.width = 50 + Math.random() * 150;
  }
  paint() {
    //console.log('im running');
    context.fillStyle = 'white';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  runLogic() {
    this.positionY += 2;
  }
}
