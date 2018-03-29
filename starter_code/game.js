function Game(canvas)  {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");

    this.coche = new Coche(this.canvas, this.ctx);
    this.carretera = new Carretera (this.canvas, this.ctx);
}

Game.prototype.start = function () {
    setInterval(function() { 
     this.clear()
     this.draw()

    }.bind(this), 50) 
}

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.draw = function () {
    this.carretera.draw();
    this.coche.draw();
}

/////////////////////////////////////////

window.onload = function() {
    var game = new Game("my-canvas");

    $("#start-button").click(game.start.bind(game))
}