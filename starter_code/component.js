class Component {             //Esta clase instanciara al player y a los obstaculos.
  constructor(ctx) {
    this.ctx = ctx
   
    }
  
  draw() {
    this.ctx.lineWidth = '2'
    this.ctx.strokeStyle = 'white';
    this.ctx.setLineDash([20, 20]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width / 2, 0);
    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    this.velDashed -= 2;
    this.ctx.stroke();
    this.ctx.lineDashOffset = this.velDashed;
    
  }

/*  moveLines() {
    this.y += 10
  }*/

  // Velocidad linea
  this.velRoad--
  // Movimiento de la linea
  this.ctx.lineDashOffset = this.velRoad;
}
