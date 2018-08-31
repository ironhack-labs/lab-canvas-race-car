window.onload = function() {
  
  document.getElementById("start-button").onclick = function() {
    startGame();
    
  };

  function startGame() {
    
    var canvas = document.getElementById('mainBoard');
    var ctx = canvas.getContext('2d');
    var padding = 20;

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'gray';
    ctx.fillRect(padding * 2, 0, canvas.width - padding * 4, canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(padding * 3, 0, padding, canvas.height);
    ctx.fillRect(canvas.width - padding * 4, 0, padding, canvas.height);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 16]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    var car = {
      x: 25,
      moveLeft:  function() { this.x -= 25 },
      moveRight: function() { this.x += 25 },
    }
    
    var img = new Image();

    function draw(car) {
      imgScale = 640/480;
      img.onload = function() { 
         ctx.drawImage(img, car.x, 600, 40*imgScale,70); 
      }
      img.src = 'images/car.png';
    }
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    }
    
    function updateCanvas() {
      ctx.clearRect(car.x, 600, 0, 0);
      draw(car);
    }
    updateCanvas();
  };

  
  
};
