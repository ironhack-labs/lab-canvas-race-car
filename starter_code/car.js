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
      var width = this.image.width * 0.5;
      var height = this.image.height * 0.5;
      console.log(this.canvas.width/2)
        this.ctx.drawImage(this.image,0,0,this.image.width, this.image.height, this.canvas.width/2 - width/2, this.canvas.height-height,width,height);
    }.bind(this)
  }

