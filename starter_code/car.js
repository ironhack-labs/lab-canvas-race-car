function Car(imagem, road) {
  this.x = 0;

  this.draw = function() {
    let img = new Image();

road.save()

    img.src = imagem;
    road.drawImage(img, this.x, -70, 40, 60);
    img.onload = function() {};

    //road.restore();

  };
  this.turnRight = function() {
    if (this.x >= 90) {
      return;
    }
    this.x += 10;

    road.clearRect(-150, 0, 300, -600);
   
   };

   this.turnLeft = function() {
    if (this.x <= -130) {
      return;
    }
    this.x -= 10;
    road.clearRect(-150, 0, 300, -600);
  };

  };

  

