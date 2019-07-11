class Car {             //Esta clase instanciara al car
    constructor(x, y, width, height,ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/car.png"
        
    this.keys= {            //Definimos las keys que controlaran el movimiento del car.
      ARROW_RIGHT: 39,
      ARROW_LEFT: 37
    }
  }

  draw() {
    
    this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
  }

  move() {
    
    document.onkeydown = (e) => {
        switch(e.keyCode) {                   //Gestion del movimiento.
         
          case this.keys.ARROW_RIGHT: //Movimiento a la derecha, sin pasar los límites
            if(this.x <360){ 
              this.x += 10
              break; 
            }

        case this.keys.ARROW_LEFT://Movimiento a la izquierda, sin pasar los límites
            if(this.x > 75){
            this.x -= 10
            break; 
          }
        }
   
    } 
}}
