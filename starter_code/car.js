function Car(canvas,ctx,url) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.url = url;
    
  }

  Car.prototype.drawImage = function () {

    this.image.src = this.url;

    this.image.onload = function() {
      console.log(this.image.width, this.image.height );
      console.log(this.canvas.width, this.canvas.height);
      console.log(this.canvas.width/2)
        this.ctx.drawImage(this.image,this.canvas.width/2 - this.image.width,this.canvas.height-this.image.height);
    }.bind(this)
  }

