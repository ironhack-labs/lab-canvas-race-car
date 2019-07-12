class Component {             //Esta clase instanciara al player y a los obstaculos.
  constructor(x, y, color, width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    let ctx = Game.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // movePlayer() {
  //   document.onkeydown = (e) => {
  //       switch(e.keyCode) {                   //Gestion del movimiento.

  //           case this.keys.ARROW_RIGHT:
  //           this.x += 10
  //           break;  

  //           case this.keys.ARROW_LEFT:
  //           this.x -= 10
  //           break; 
  //       }
  //   }
  // }

  moveObstacle() {
    this.y += 5
  }



}