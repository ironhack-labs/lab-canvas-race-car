window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
    drawBackground();

   


  };

  var canvas = document.querySelector('#canvas')
  var ctx = canvas.getContext("2d")


  let obstacle = {
     yPos : 20,
    
    create: function(){
      ctx.fillStyle = "#008100"
      ctx.fillRect(70, this.yPos, 300, 50)
    },
    moveDown: function(){
      this.yPos += 40
      ctx.fillRect(70, this.yPos, 300, 50)
      

    }

  }


  function startGame() {
    console.log("start game clicked")

    // //Draw Racecar---DOES NOT WORK---
    // const car = new Image()
    // car.src = "images/car.png"
    // ctx.drawImage(car, 20, 100, 100, 100)

  }

  let car = {
    xPos: 300,
    draw: function () {
      console.log(this.xPos)
      ctx.fillStyle = "#008100"
      ctx.fillRect(this.xPos, 500, 50, 100)
    },
    clear: function () {
      console.log("clear working...kinda")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  document.onkeydown = function (e) {

    switch (e.keyCode) {

      case 37: // left arrow   
        car.xPos -= 25
        car.clear()
        drawBackground()
        car.draw()
        obstacle.create();
        obstacle.moveDown();
    
   
        break;
      case 39: // right arrow

        car.xPos += 25
        car.clear()
        drawBackground()
        car.draw()

        break;
    }
  };

  function drawBackground() {

    //Green Rectangles
    ctx.fillStyle = "#008100";
    ctx.fillRect(20, 20, 30, 900);
    ctx.fillRect(590, 20, 30, 900)
    //Gray Rectangles
    ctx.fillStyle = "#808080"
    ctx.fillRect(50, 20, 10, 900)
    ctx.fillRect(70, 20, 500, 900)
    ctx.fillRect(580, 20, 10, 900)
    //White Rectangles
    ctx.fillStyle = "white"
    ctx.fillRect(60, 20, 10, 900)
    ctx.fillStyle = "white"
    ctx.fillRect(570, 20, 10, 900)

    //Dash Line
    ctx.style = "black"
    ctx.strokeRect(320, 20, 1, 900);
    ctx.fillStyle = "white"
  }

 

};