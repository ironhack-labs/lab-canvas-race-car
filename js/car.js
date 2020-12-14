class Car {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  ;
    this.vx = 0;
    this.vy = 0;
    this.width =80;
    this.height= 160;
    
    this.speed = 10;
    this.img = new Image();
    this.img.src="./images/car.png";

    this.movements = {

      left: false,
      right: false
    }
  }
  draw() {

 this.ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
  }

  move() {
// si se ha pulsado izquierda cambiamos la coordenada x restando para que se dibuje mas a la izquierda. Si es la derecha sumamos
    if (this.movements.left) {
      this.vx = -this.speed
    } else if (this.movements.right) {
      this.vx = this.speed
    } else {
      this.vx = 0
    }
    // asignamos las nuevas coordenadas al objeto
    this.x += this.vx
    this.y += this.vy
// controlamos límites
    if (this.x + this.width>= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width
    } else if (this.x <= 0) {
      this.x = 0
    }
/*
    if (this.y + this.size >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.size
    } else if (this.y <= 0) {
      this.y = 0
    }
  */  
  }


onKeyEvent(event) {
  // si el evento es que han pulsado una tecla validamos si es izquierda o derecha y ponemos a true el booleano que valida que hacer en cada caso
  const status = event.type === 'keydown'
  switch (event.keyCode) {
  
    case KEY_RIGHT:
      this.movements.right = status
      break;
    case KEY_LEFT:
      this.movements.left = status
      break;
   
    default:
      break;
  }
}

collidesWith(element) {
  // if the three conditions are true there is a collition
  return this.x < element.x + element.width && // collition by right side
    this.x + this.width > element.x &&               // collition by left side
    this.y < element.y + element.height &&   // frontal collition
    this.y + this.height > element.y       // back collition
    
  
}
// fin clase
}