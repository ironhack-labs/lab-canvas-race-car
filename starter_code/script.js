window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("cvx-game-board");
    var ctx = canvas.getContext("2d");
    //Rectangles
    ctx.beginPath();
    ctx.fillStyle = "rgb(194,194,194)";
    ctx.fillRect(0, 0, 300, 800);
    ctx.fillStyle = "#00C853";
    ctx.fillRect(0, 0, 20, 800);
    ctx.fillStyle = "#00C853";
    ctx.fillRect(280, 0, 20, 800);
    ctx.fillStyle = "white";
    ctx.fillRect(30, 0, 10, 800);
    ctx.fillStyle = "white";
    ctx.fillRect(260, 0, 10, 800);

    //Ligne pointilée au milieu
    
    // ctx.closePath();
    // var img = new Image();
    // img.onload = function () {
    //   ctx.drawImage(img,135,0,30,20);
    // };
    // img.src = "./images/car.png";

    function drawLine(){
      ctx.beginPath();
      ctx.setLineDash([5, 2]);
      ctx.strokeStyle = "white";
      ctx.moveTo(150, 0);
      ctx.lineTo(150, 800);
      // ctx.lineWidth=4;
      ctx.stroke();
    }

    var racecar = {
      x: 135,
      y: 0,
      last_x:105,
      last_y: 0,
      moveUp: function() {
        if(this.y>0) {
          this.last_x=this.x;
          this.last_y = this.y;
          this.y -= 25;
        }else {
          console.log("can't keep moving");
        }

      },
      moveDown: function() {
        if(this.y<800) {
        this.last_x=this.x;
        this.last_y = this.y;
        this.y += 25;
      }else {
        console.log("can't keep moving");
      }
      },
      moveLeft: function() {
        if(this.x>50){
          this.last_y = this.y;
          this.last_x = this.x;
          this.x -= 25;
        }else {
          console.log("can't keep moving");
        }

      },
      moveRight: function() {
        if(this.x<210){
        this.last_y = this.y;
        this.last_x = this.x;
        this.x += 25;
      }else {
        console.log("can't keep moving");
      }
    }
  }
    function deleteImg(){
      var img=document.getElementsByTagName('img');
      img.deleteImg;
      // ctx.globalAlpha=0.0;
    }

    function hideRaceCAR(racecar){
      ctx.beginPath();
      ctx.fillStyle = "rgb(194,194,194)";
      // ctx.fillStyle = "red";  
      ctx.fillRect(racecar.last_x, racecar.last_y, 30, 20);
       
      ctx.closePath();
    }

    function draw(racecar) {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, racecar.x, racecar.y, 30, 20);
      };
      img.src = "./images/car.png";
      // racecar.last_x=racecar.x;
      // racecar.last_y=racecar.y;
    }

    document.onkeydown = function(e){
      switch (e.keyCode) {
        case 38:
          racecar.moveUp();
          break;
        case 40:
          racecar.moveDown();
          break;
        case 37:
          racecar.moveLeft();
          break;
        case 39:
          racecar.moveRight();
          break;
      }
      updateCanvas();
    };

    function updateCanvas() {
      // ctx.clearRect(0,0,1500,1700);
      // ctx.fillText("RaceCar_x: " + racecar.x, 200, 40);
      // ctx.fillText("RaceCar_y: " + racecar.y, 200, 60);
      
      draw(racecar);
      hideRaceCAR(racecar);
      drawLine();
    }
    
    updateCanvas();
  }
};
