window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    this.ctx = document.getElementById("race").getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "grey";
    this.ctx.beginPath();
    this.ctx.moveTo(400, 1000);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(190, 900);
    this.ctx.lineTo(190, 100);
    this.ctx.moveTo(430, 900);
    this.ctx.lineTo(430, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 50;
    this.ctx.strokeStyle = "#86af49";
    this.ctx.moveTo(160, 900);
    this.ctx.lineTo(160, 100);
    this.ctx.moveTo(460, 900);
    this.ctx.lineTo(460, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "grey";
    this.ctx.rect(200, 100, 220, 800);
    this.ctx.fillStyle = "grey";
    this.ctx.fill();
    //this.ctx.moveTo(200, 700);
    //this.ctx.lineTo(200, 200);
    //this.ctx.lineTo(450, 200);
    //this.ctx.lineTo(450, 700);
    //this.ctx.lineTo(200, 700);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(300, 900);
    this.ctx.lineTo(300, 100);
    this.ctx.setLineDash([10, 20]);

    this.ctx.stroke();
    this.ctx.closePath();


  var car = {
    x: 250,
    y: 600,
    
    moveLeft:  function() { this.x -= 30 },
    moveRight: function() { this.x += 30 },
  }
  
  function draw(car) {
    var img = new Image();
    img.onload = function() { 
       ctx.drawImage(img, car.x, car.y, 100, 100); 
    }
    img.src = "./images/car.png";
  }
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
  }
  
  function updateCanvas() {
    
    this.ctx.clearRect(1200,1200,2000,1000);
    draw(car)
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "grey";
    this.ctx.beginPath();
    this.ctx.moveTo(400, 1000);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(190, 900);
    this.ctx.lineTo(190, 100);
    this.ctx.moveTo(430, 900);
    this.ctx.lineTo(430, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 50;
    this.ctx.strokeStyle = "#86af49";
    this.ctx.moveTo(160, 900);
    this.ctx.lineTo(160, 100);
    this.ctx.moveTo(460, 900);
    this.ctx.lineTo(460, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "grey";
    this.ctx.rect(200, 100, 220, 800);
    this.ctx.fillStyle = "grey";
    this.ctx.fill();
    //this.ctx.moveTo(200, 700);
    //this.ctx.lineTo(200, 200);
    //this.ctx.lineTo(450, 200);
    //this.ctx.lineTo(450, 700);
    //this.ctx.lineTo(200, 700);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(300, 900);
    this.ctx.lineTo(300, 100);
    this.ctx.setLineDash([10, 20]);
    this.ctx.stroke();
    this.ctx.closePath();

  }
}
  updateCanvas()
  
};