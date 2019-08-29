class Road {

  constructor(game) {
    this.game = game;
    this.offset = 0;
    this.intervalId;
    
  }

  draw() {
    
    this.game.ctx.clearRect(0, 0, this.game.w, this.game.h);
    
    this._drawRectangle(0, 0, this.game.w, this.game.h, `rgba(0, 129, 0, 1)`);
    this._drawRectangle(23, 0, this.game.w - 46, this.game.h, `rgba(128, 128, 128, 1)`);
  
    this._drawLineSetting(this.offset, [], `white`, 7);
    this._drawVerticalLine(37, this.game.h);
    this._drawVerticalLine(this.game.w -37, this.game.h);
    
    this._drawLineSetting(-this.offset, [25, 20], `white`, 4);
    this._drawVerticalLine(this.game.w2, this.game.h);
  }

  movingRoadEffect() {
    
    this.intervalId = setInterval(function(){ 
      this.draw();
      this.offset--;
       }.bind(this), 10);
  }

  stopRoadEffect() {
    clearInterval(this.intervalId);
  }

  _drawLineSetting(offset, setDash, color, width) {
    
    this.game.ctx.setLineDash(setDash);
    this.game.ctx.lineDashOffset = offset;
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