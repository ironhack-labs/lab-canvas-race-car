class Controls{
    constructor(game){
        this.game = game;
        this.context = game.context;
    }

    setControls(){
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      
      switch (event.keyCode) {
        case 37:  
          game.player.moveLeft()
          context.clearRect(0, 0, 420, 588);
          game.background.drawGrid()
          game.player.drawPlayer()
          game.obstacle.drawObst()
          break;
    
        case 39:  
          game.player.moveRight()
          context.clearRect(0, 0, 420, 588);
          game.background.drawGrid()
          game.player.drawPlayer()
          game.obstacle.drawObst()
          break;
      }
    })}}
