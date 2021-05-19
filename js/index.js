
window.onload = () => {
  const game = new Game('canvas');
  document.getElementById('start-button').onclick = () => {
    console.log("hey");
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
