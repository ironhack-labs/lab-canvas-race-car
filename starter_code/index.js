window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.canvas.width = 1000;
    this.canvas.height = 800;

    // this.width = this.canvas.width;
    // this.height= this.canvas.height;
    this.ctx = this.canvas.getContext("2d");
  }

  
}

Canvas.prototype.draw = function () {
  this.drawRoad();
}

function startGame() {
  var canvas = new Canvas("canvas");
  canvas.draw();
}
};
