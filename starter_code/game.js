function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');

  this.carretera = [new Carretera(this.canvas, this.ctx)
                  , new Carretera(this.canvas, this.ctx)];

}

Game.prototype.start = function() {

  this.carretera[1].y = -510;
  setInterval(function(){
    this.clear();
    this.carretera[0].draw();
    this.carretera[1].draw();
    if(this.carretera[0].y >= 510){
      this.carretera[0].y = -510;
    }
    if(this.carretera[1].y >= 510){
      this.carretera[1].y = -510;
    }
    this.carretera[0].y ++;
    this.carretera[1].y ++;
  }.bind(this),5)
}


Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}