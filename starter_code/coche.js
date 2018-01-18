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