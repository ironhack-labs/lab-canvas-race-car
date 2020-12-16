const backgroundImage = {
    img: img,
    x: 0,
    y:0,
    speed: -1,

    moveRoad: function() {
      this.y += this.speed;
      this.y %= backgroundCanvas.height;
    },

    drawRoad: function() {
      ctx.drawImage(this.img, 0, this.y);
      if (this.speed < 0) {
        ctx.drawImage(this.img, 0, this.y + this.img.height);
      } else {
        ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
      }
    },
  };