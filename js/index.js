window.onload = () => {

  const game = new Game('canvas')
  document.getElementById('start-button').onclick = () => {
   
    game.start();
  }
  };

 /* function start() {

      this.interval = setInterval(() => {
        this.clear()
        this.draw()
        this.move()
      }, this.fps)
    }
  
};*/
