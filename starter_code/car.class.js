class Car {

  constructor() {
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.speed = 10;
  }

  moveRight(limitRoad) {

    let newPosition = this._xPosition + this.speed;
    
    if(newPosition < limitRoad) {
      this.setXPosition(newPosition);
    } else {
      
      this.setXPosition(limitRoad);
    }
  }

  moveLeft(limitRoad) {

    let newPosition = this._xPosition - this.speed;

    if(newPosition > limitRoad) {
      this.setXPosition(newPosition);
    } else {
      this.setXPosition(limitRoad);
    }    
  }

  isNotInitialized() {
   
   return (
    this._width == undefined && 
    this._height == undefined) ? true : false;
  }

  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }

  setWidth(width){
    this._width = width;
  }
  setHeight(height) {
    this._height = height;
  }

  setXPosition(xPosition) {
    this._xPosition = xPosition;
  } 
  setYPosition(yPosition) {
    this._yPosition = yPosition;
  }
  getXPosition() {
    return this._xPosition;
  } 

  getYPosition() {
    return this._yPosition;
  }
}