class Game {

  constructor() {
    const gameBoard =  document.getElementById('game-board');
    gameBoard.innerHTML = `<canvas class="off" id="game"></canvas>`;

    this.myCanvasDOMEl = document.getElementById("game");
    
    this.ctx = this.myCanvasDOMEl.getContext("2d");
    this.w = 299;
    this.h = 500;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;

    this._setControllers();
  }

  start() {
    this.myCanvasDOMEl.classList.remove('off');
    this.myCanvasDOMEl.setAttribute("width", `${this.w}px`);
    this.myCanvasDOMEl.setAttribute("height", `${this.h}px`);

    this.road = new Road(this);
    this.car = new Car();
    this.road.load();
    this.road.addCar(this.car);

    
   
  }

  _setControllers() {
    
    window.onkeydown = function(e) {
      
      switch (e.key) {
        case "ArrowLeft":
          this.car.moveLeft(this.road.limitLeft);
          this.road.load();
          break;
        case "ArrowRight":
            this.car.moveRight(this.road.limitRight);
            this.road.load();
          break;
      }
    }.bind(this);
  }


  


}