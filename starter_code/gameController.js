class gameController{

  
  constructor(road, car){
    
    //Get canvas from DOM
    this.canvas = document.getElementById('game');

    //Get canvas context
    this.ctx = this.canvas.getContext('2d');
    
    //Set canvas size
    this.canvas.width = 500;
    this.canvas.height = 500;

    //Set road and car
    this.road = road;
    this.car = car;

    //Make a boolean array of key presses with event listeners (true on keydown and false on keyup)
    this.keys = [];
    $('body')[0].addEventListener('keydown', (e) =>{
      this.keys[e.keyCode] = true;
    });
    $('body')[0].addEventListener('keyup', (e) =>{
      this.keys[e.keyCode] = false;
    });

  }


  //Collision detection
  








  //Draw road, map hazards, and car
  updateGameFrame(){

    //Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw the road
    this.road.draw(this.ctx);

    //Move the car
    this.car.drive(this.keys);

    //Draw the car
    this.car.draw(this.ctx);

    requestAnimationFrame(() => this.updateGameFrame());
    
  }
}