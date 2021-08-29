class Car {
  //8. Crea un constructor paraa no tener que ir a otro sitio
  constructor(ctx, width, height, dimensionCanvas) {
    this.ctx = ctx;
    this.carWidth = width;
    this.carHeight = height;
    this.dimensionCanvas = dimensionCanvas;
    //Declaramos la imagen
    this.carImage = new Image();
    this.carImage.src = "../images/car.png";
    //Posicion inicial del coche
    this.carPosition = {
      x: this.dimensionCanvas.w / 2 - this.carWidth / 2,
      y: this.dimensionCanvas.h - this.carHeight - 20,
    };
    this.moveLeft = false;
    this.moveRight = false;
  }

  move() {
  this.carPosition.x <= this.dimensionCanvas.w - 100 && this.moveRight ? this.carPosition.x += 7 : null;
  this.carPosition.x >= 30 && this.moveLeft ? this.carPosition.x -= 7 : null;
  }

  draw() {
    //9. 5parametros en drawImage
    // Primer parametro Image, posicion X, posicion Y, dimension coche W, dimension coche H
    this.ctx.drawImage(
      this.carImage,
      this.carPosition.x,
      this.carPosition.y,
      this.carWidth,
      this.carHeight
    );
  }
 
}
