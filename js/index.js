window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  const myGameArea = {
      canvas: document.getElementById('canvas'),
      start: function() {
        this.context = this.canvas.getContext('2d');
       
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
      },

      bgImage: function() {
        const background = new Image();
        background.src = '../images/road.png';
        this.ctx.drawImage(background, 0, 0, this.width, this.height)
      },

      clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
      
      stop: function() {
      clearInterval(this.interval);
    },
  
	}
 
  // car 
class Component {
    constructor(x, y, width, height) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }
    update() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  function updateGameArea() {
    myGameArea.clear();
    player.update();
  }

  drawCar() { 
  const car = new Component();
  car.src = '../images/car.png';
  this.ctx.drawImage(car, this.x, this.y, this.width, this.height);
}

  myGameArea.start()
}
