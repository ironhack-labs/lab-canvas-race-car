class Game {

  constructor() {
    const gameBoard =  document.getElementById('game-board');
    gameBoard.innerHTML = `<canvas class="off" id="game"></canvas>`;

    this.myCanvasDOMEl = document.getElementById("game");
    
    this.ctx = this.myCanvasDOMEl.getContext("2d");
    this.w = '299';
    this.h = '500';
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
  }

  start() {
    this.myCanvasDOMEl.classList.remove('off');
    this.myCanvasDOMEl.setAttribute("width", `${this.w}px`);
    this.myCanvasDOMEl.setAttribute("height", `${this.h}px`);

    const road = new Road(this);
    road.draw();
    road.movingRoadEffect();

    road.stopRoadEffect();
    

  }


  


}