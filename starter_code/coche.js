function CarToGo(){
    this.posX= 250;
    this.speed= 10;
}

CarToGo.prototype.moving = function(keyPressed){
    switch(keyPressed){
        case 37:
        this.x -= 5;
        break;

        case 39:
        this.x +=5;
        break;

        default:
        return;
    }
}

// CarToGo.prototype.draw = function(){
//     var img = new Image();
//     imgScale = 300/600;
//     img.onload = function() {
//     ctx.drawImage(img, 215, 600,150*imgScale,150);
//     };
//     img.src = 'images/car.png';
//     }
