window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    const = gameSize: { w: "500", h: "700" }
    const = ctx: undefined,
    init() {
          this.setContext()
          this.setSize()
      },
    function setContext() {
          this.ctx = document.querySelector('#myCanvas').getContext('2d')
          console.log(this.ctx)
      },
    function setSize() {
          this.gameSize = {
              w: window.innerWidth,
              h: window.innerHeight
          }
          document.querySelector('#myCanvas').setAttribute('width', this.gameSize.w)
          document.querySelector('#myCanvas').setAttribute('height', this.gameSize.h)
      },
    function drawFilledRectangle() {
          this.ctx.fillStyle = 'red'
          this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 50, 100, 100)
          this.ctx.fillStyle = 'green'
          this.ctx.fillRect(this.gameSize.w / 2 - 100, this.gameSize.h / 2 - 25, 200, 50)
      },





  }
};
