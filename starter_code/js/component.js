class Player {   
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x;
    this.y = y;
    this.keys= {
      ARROW_UP: 38,
      ARROW_LEFT: 37
    }
 
  }
    
    

  showCar(){
    let img = new Image()
    img.src="./images/car.png"
    this.ctx.drawImage(img, 220, 390, 60, 100)

  }

  movePlayer() {
    document.onkeydown = (e) => {
        switch(e.keyCode) {                   //Gestion del movimiento
            case this.keys.ARROW_RIGHT:
            console.log('derecha')
            this.x += 10
            break;  

            case this.keys.ARROW_LEFT:
            console.log('izquierda')
            this.x -= 10
            break; 
        }
    }
  }
 
}
  

//aqui ira la clase para crear los obstaculos
