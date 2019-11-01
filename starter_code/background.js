class Background {
    constructor(game){
        this.context = game.context;
        this.width = game.width;
        this.height = game.height;
    }

    road(){
          //main road
    this.context.fillStyle = 'grey';
    this.context.fillRect(40, 0, 230, 600);
  
    //left line
    this.context.fillStyle = 'white';
    this.context.fillRect(55, 0, 5, 600);
  
    //right line
    this.context.fillStyle = 'white';
    this.context.fillRect(250, 0, 5, 600);
  
    //middle lines
    for (let i = 0; i < 600; i++) {
    this.context.fillStyle = 'white';
    this.context.fillRect(150, i * 50, 5, 30);
    }
    }

    obstacles() {
        
    this.context.fillStyle = 'brown';
    this.context.fillRect(65, 30, 100, 30);
          
    this.context.fillRect(130, 200, 120, 30);
          
    this.context.fillRect(110, 300, 140, 30);
          
    this.context.fillRect(65, 450, 100, 30);
          
    }
  
  
  }
  
  
  
  
  
  // drawing the picture in the canvas
  

  
  
 
  