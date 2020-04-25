class Car {
    constructor (col, row, canvas, context, basePixel) {
    this.basePixel = 50;  
    this.col = col*basePixel;
    this.row = row*basePixel;
    this.canvas = canvas;
    this.context = context;
    
    this.image = new Image();
    this.image.src = 'images/car.png';
      
    }
    
    drawPlayer () {
        this.image.addEventListener('load', () => {
            this.context.drawImage(this.image, this.col, this.row);
        });
        this.context.drawImage(this.image, this.col, this.row);
    }

    moveDown () {
        if (this.row < height - basePixel || this.row <= basePixel){
            this.row = this.row + basePixel;
        } else {this.row = height - basePixel}
    }
    
    moveUp () {
        if (this.row >= height - basePixel || this.row >= basePixel){
            this.row = this.row - basePixel;
        } else {this.row = 0}
        }

    moveLeft () {
        if (this.col >= width - basePixel || this.col >= basePixel){
            this.col = this.col - basePixel;
        } else {this.col = 0}
        }

    moveRight () {
        if (this.col < width - basePixel || this.col <= basePixel){
            this.col = this.col + basePixel;
        } else {this.col = width - basePixel}
    }
        
    }    