class Background {
    
  constructor(x, y, canvas, context, width, height, basePixel) {
      this.x = x;
      this.y = y;
      this.canvas = canvas;
      this.context = context;

      this.canvas.width = canvas.width;
      this.canvas.height = canvas.height;
      this.basePixel = 50

      this.image = new Image();
      this.image.src =  'images/road.png';

    }

    drawBackground () {
      this.context.drawImage(this.image, this.y, 0);
    }
    
    // this.context.drawImage(this.image, this.y + this.image.height, 0);
    // this.context.drawImage(this.image, this.y + this.image.height * 2, 0);
    
    clearCanvas () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    loop = () => {
      this.y++;
      this.y = this.y % this.image.height;
      
      this.clearCanvas();
      this.drawBackground();
      setTimeout(this.loop, 1000 / 240);
    }
  }

