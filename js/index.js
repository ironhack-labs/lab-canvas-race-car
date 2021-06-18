
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  function startGame() {}
  class car {
    constructor(img, x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
      }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}
}