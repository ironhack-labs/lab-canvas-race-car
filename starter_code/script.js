window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  var car = {
    x: 80,
    y: 105,

    moveLeft:  function() { this.x -= 15 },
    moveRight: function() { this.x += 15 },
  }

  function startGame() {
    updateCanvas();
  }

  function updateCanvas(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //green background
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 510, 600);
    
    //gray road
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 238, 600);

    //solid white road line
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0 ,10, 600);
    ctx.fillRect(248, 0, 10, 600);

    //middle dashed road line
    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(143, 0);
    ctx.lineTo(143, 600);
    ctx.strokeStyle="#FFFFFF";
    ctx.stroke();
    
    //car image 
    var img = new Image();
    img.onload = function() {
    //x & y coordinates to be upated upon update
    ctx.drawImage(img, car.x, car.y , 50, 40);
  };
  img.src = "images/car.png";
  }

  //use keycodes to read left/right inputs
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    //update the full canvas when key is pressed
    updateCanvas();
  }


};

