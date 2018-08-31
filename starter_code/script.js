var obs1, obs2,obs3,obs4,obs5
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById('car-board');
  var ctx = canvas.getContext("2d");
  var car = new Image(75,150);
  car.src="images/car.png";
  
  var positionX = 210;
  var positionY = 600;
  var obsPos = 20;
  var countDown = 0;
  var valueDash = 0; 
  car.onload = function(){
    ctx.drawImage(car,positionX,positionY,75,150);
  };
  scenario();
  function startGame() {
    scenario();
    blueCar();
    setInterval(function (){drawScenario();},1000/30);
  }

function scenario(){
  ctx.fillStyle = '#3e8317';
  ctx.fillRect(0,0,40,810);
  ctx.fillRect(460,0,40,810);
  ctx.fillStyle = '#808080';
  ctx.fillRect(40,0,10,810);
  ctx.fillRect(460,0,10,810);
  ctx.fillRect(60,0,390,810);
  ctx.strokeStyle = '#ffffff';
  ctx.setLineDash([25, 35]);
  ctx.beginPath();
  ctx.lineDashOffset = valueDash;
  ctx.moveTo(250, 20);
  ctx.lineWidth = 7;
  ctx.lineTo(250, 800);
  ctx.stroke();
  valueDash-=5;
}

function blueCar(){
  ctx.drawImage(car,positionX,positionY,75,150);
}

  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:   
      moveLeft();
      break;
      case 39: 
      moveRight();
      break; 
    }
  }

  function moveLeft(){
    if(positionX > 55){
      positionX -=5;
    }   
  }
  
  function moveRight(){
    if(positionX + car.width < canvas.width - 50){
      positionX +=5;
    }
    
  }
  function drawScenario(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    scenario();
    obstacle();
    moveObs();
    blueCar();
    colision();
    countDown++;
    count();
  }

  function obstacle(){
    ctx.fillStyle = "#8a230f";
    obs1 = ctx.fillRect(80,obsPos,200,40);
    obs2 = ctx.fillRect(310,obsPos-300,120,40);
    obs3 = ctx.fillRect(180,obsPos-500,80,40);
    obs4 = ctx.fillRect(210,obsPos-700,210,40);
    obs5 = ctx.fillRect(80,obsPos-1200,160,40);
  }
  
  function moveObs(){
    obsPos +=5;
  }

  function count(){
    if(countDown == 400){
      alert("Winner Winner, Chicken Dinner")
      location.reload();
      
    }
  }

  function colision(){
    if(positionY +10 == obsPos){
      location.reload();
    }
  }
}
