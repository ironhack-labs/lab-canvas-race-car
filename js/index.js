class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;

    this.speedX = 0; // used to update the X position
    this.speedY = 0; // used to update the Y position
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
  }
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const player = new Component(30, 30, 'red', 0, 110);