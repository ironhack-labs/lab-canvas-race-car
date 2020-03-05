window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  let canvas = document.getElementById ('canvas')
  let ctx = canvas.getContext ('2d')


  let roadImg = new Image ();
  roadImg.src ="images/road.png";

  let carImg = new Image ();
  carImg.src="images/car.png";

  let car = {
    x:300,
    y:500,
    width: 50,
    height: 100,


    rightArrowPressed: function () {
      this.x += 25
    },
    leftArrowPressed: function () {
      this.x -= 25
    },

    update: function () {
      ctx.drawImage(car,this.x,this.y,this.width, this.height)
    }
  }

  let frameCounter=0

  function startGame() {
    draw()
  }


  let draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage( roadImg, 0, 0, canvas.width, canvas.height)
      ctx.drawImage (carImg,300,450,60,120)
      frameCounter++
car.update()
      window.requestAnimationFrame(draw)
    }
    

  



  document.onkeydown = function (event) {
   
   switch (event.keyCode) {
     case 39: 
     car.rightArrowPressed();
     break;
     case 37: 
     car.leftArrowPressed();
     break;
    }
    
  }




}


