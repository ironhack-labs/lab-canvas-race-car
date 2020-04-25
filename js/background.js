class Background {
    
  constructor(game) {
    this.game = game
    
    // this.canvas.width = canvas.width;
    // this.canvas.height = canvas.height;    
  }
      
  
  draw (x,y) {
    const context = this.game.context;
    this.x = 170;
    this.y = 100;
    
    let imageBackground = new Image();
    imageBackground.src =  'images/road.png';
    
    context.drawImage(imageBackground, this.x, this.y)
    // context.drawImage(imageBackground, this.x, this.y + imageBackground.height);
    // context.drawImage(imageBackground, this.x, this.y + imageBackground.height * 2)
  }
  
  loop = () => {
     this.y--;
     if (this.y < 0) {
       this.y = this.y % imageBackground.height;
      } 
      this.draw();
      setTimeout(this.loop, 1000 / 100);
    } 
   
    }
