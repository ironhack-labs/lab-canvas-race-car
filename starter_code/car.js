function CreateCarObject() {
    this.x = 220;
    this.speed = 10;
    this.img = new Image();
    this.scale = 158 / 319;
}

CreateCarObject.prototype.move = function(key){
    switch (key) {
        case 37: // left
          this.x -= 5;
          if (this.x < 20) {
            this.x = 20;
          }
          break;
        case 39: // right
          this.x += 5;
          if (this.x > 265) {
            this.x = 265;
          }
          break;
        default:
          return; // exit this handler for other keys
      }
  }

CreateCarObject.prototype.render = function(ctx){
        ctx.drawImage(this.img, this.x, 650, 90 * this.scale, 90);
}
