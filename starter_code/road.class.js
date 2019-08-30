class Road {

  constructor(game) {

    this.game = game;
    this.intervalId;
    
    this.offset = 0;
    
    this.limitRight = this.game.w - 46 - 23;
    this.limitLeft = 23;

    this.countDownText = 3;
  }

  load() {
    
    this.game.ctx.clearRect(0, 0, this.game.w, this.game.h);
    
    this._drawRectangle(0, 0, this.game.w, this.game.h, `rgba(0, 129, 0, 1)`);
    this._drawRectangle(this.limitLeft, 0, this.limitRight + 23, this.game.h, `rgba(128, 128, 128, 1)`);
  
    this._drawLineSetting(0, [], `white`, 7);
    this._drawVerticalLine(37, this.game.h);
    this._drawVerticalLine(this.game.w - 37, this.game.h);
    
    this._drawLineSetting(-this.offset, [25, 20], `white`, 4);
    this._drawVerticalLine(this.game.w2, this.game.h);

    if(this.car) this.addCar(this.car);

    this.movingRoadEffect();
    this.countDown(this.countDownText);
  }

  countDown(time) {
    this.game.ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    this.game.ctx.font = "80px Arial";
    this.game.ctx.fillText(time, this.game.w2 - 22, 160);
  }

  movingRoadEffect() {
    let contador = 0;
    this.intervalId = setInterval(function(){ 
      this.load();
      
       }.bind(this), 0);
  }

  stopRoadEffect() {
    clearInterval(this.intervalId);
  }

  addCar(car) {

    
    const drawCar = function() {
      
      if(car.isNotInitialized()) {
        this.car = car;
        
        car.setWidth(car.image.naturalWidth / 3.5);
        car.setHeight(car.image.naturalHeight / 3.5);
        car.setXPosition(this.game.w2 - car.getWidth()/2);
        car.setYPosition(this.game.h - car.getHeight() - 10);
        
      }
      
      this.game.ctx.drawImage(car.image, 
                              car.getXPosition(), 
                              car.getYPosition(), 
                              car.getWidth(), 
                              car.getHeight());
                              
    }.bind(this); 
    
    if (car.isNotInitialized()) {
      car.image.onload = drawCar;
    } else {
      drawCar();
    }

    
  }
  _drawLineSetting(offset, setDash, color, width) {
    this.offset++
    this.game.ctx.setLineDash(setDash);
    this.game.ctx.lineDashOffset = (setDash.length == 2) ? offset : offset;
    this.game.ctx.strokeStyle = color;
    this.game.ctx.lineWidth = width;
  }
  
  _drawVerticalLine(x,y) {
    
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(x , y);
    this.game.ctx.lineTo(x, 0);
    this.game.ctx.stroke();
  }
  _drawRectangle(x, y, width, height, color) {

    this.game.ctx.beginPath(); 
    this.game.ctx.rect(x, y, width, height);
    this.game.ctx.fillStyle = color;
    this.game.ctx.fill(); 
  }

}