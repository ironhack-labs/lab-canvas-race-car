class Background {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.img = new Image();
        this.img.src = `/images/road.png`;

        //set the speed, how many px the img moves for each one of the 60 frames x second
        this.y = 0;
        this.vy = 4; 

        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
  

        // when the img is charged, we set the "this.img.isReady = true;"
        this.img.isReady = false;

        this.img.onload = () => {
          this.img.isReady = true;
        };
    }
    // 60 times x second we are going to draw an image + another one right on top
    draw() {
        if (this.img.isReady) {  // if the image is charged
          this.ctx.drawImage(    // draw the first image at
            this.img,
            0,                   // x = 0, 
            this.y,              // y = the current y set on the function move()
            
            this.width,
            this.height
          );
          this.ctx.drawImage(    // draw the second image at
            this.img,
            0,                   // x = 0, 
            this.y - this.height,// y = the current y set on the function move() - the height of the image 
            this.width,
            this.height
          );
          //console.log("first image y :",this.y , "second image y :",this.y - this.height);
        }
      }

    // 60 times x second we are going to set the value of "y" 
      move() {
        this.y += this.vy;
        //when the image height is finished, reset the y to 0
        if (this.y >= this.height ) {
          this.y = 0;
        }
      }

  }