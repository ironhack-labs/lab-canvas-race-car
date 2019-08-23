class Car {
    constructor(game) {
        this.canvas = game.canvas;
        this.context = game.context;
        this.x = 130;
        this.y = 100;
        }

      paint (){
        const image = new Image();
        image.src = 'images/car.png'
        let x = this.x;
        let y = this.y;

        image.addEventListener('load', function () { 
          const imageWidth = image.width;
          const imageHeight = image.height;
      
         context.drawImage(image, x, y, imageWidth/4, imageHeight/4);
        });
      }

      moveLeft () {
            this.x += 100;
      }

      moveRight () {
        this.y -= 100;
      }
    
}    

