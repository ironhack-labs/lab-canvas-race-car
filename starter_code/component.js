class Component {
  //Esta clase instanciara al player y a los obstaculos.
  constructor(x, y, color, width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;

    this.keys = {
      //Definimos las keys que controlaran el movimiento del player.
      ARROW_UP: 38,
      ARROW_DOWN: 40,
      ARROW_RIGHT: 39,
      ARROW_LEFT: 37
    };
  }

  draw() {
    let ctx = Game.ctx;
    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  movePlayer() {
    document.onkeydown = e => {
      //El evento keydown se lanza cuando el usuario presiona una tecla y recibe el valor de la misma
      //    en este caso, el codigo de tecla internacional
      switch (
        e.keyCode //Gestion del movimiento.
      ) {
        // case this.keys.ARROW_UP:
        //   this.y -= 100;
        //   break;

        // case this.keys.ARROW_DOWN:
        //   this.y += 100;
        //   break;

        case this.keys.ARROW_RIGHT:
          this.x += 100;
          break;

        case this.keys.ARROW_LEFT:
          this.x -= 100;
          break;
      }
    };
  }
  moveObstacle() {
    this.y += 10; /////////////////////CAMBIO EL EJE DE MOVIMIENTO DE LOS OBSTACULOS, A Y, incrementa la velocidad!!
  }

  //

  moveLines() {
    this.y -= 5;
  }
}
