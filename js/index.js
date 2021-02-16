class RaceCanvas{
  construct(){
    this.context = document.getElementById('game-board').getContext('2d');
  }

  drawRoad(){
    const ctx = this.context;
    const img = new Image();
    img.src = "./images/road.png";
    img.onload = ('load', e => () {
      ctx.drawImage(img, 10, 10);
    });
  }
}

class Component{
  constructor(width, height, color, x, y, image){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.image = image;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    race = new RaceCanvas();
    race.drawRoad();
  }
};
