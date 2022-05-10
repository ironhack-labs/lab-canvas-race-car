window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    const Image1 = new Image();
    const Image2 = new Image();
    const img = new Images();
   
   
    Image1.src = "images/road.png";
    Image2.src = "images/car.png";
    Image1.onload = () => {
      this.Images = new Images(Image1);
      Image2.onload = () => {
      this.Image = new Image(Image2);



      }
    }; 




class Component {
  constructor(src, x,y, width, height){
    this.width = width;
    this.height = height;
     this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
  




document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case "ArrowLeft":
      player.speedx -= 1;
      break;            
      case "ArrowRight":
      player.car.speedX += 1;
      break;
    default:
      break;
  }
};

const myGameArea = {

  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};