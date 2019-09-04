var myObstacles = [];
var img = new Image();	
const carImg=new Image();	
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  y: 0,
  speed: 1,
  move: function() {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function() {
    ctx.drawImage(this.img,  0,this.y);
	if (this.speed < 0) {
      ctx.drawImage(this.img, 0,this.y + canvas.height );
    } else {
      ctx.drawImage(this.img, 0,this.y -  canvas.height);
	
    }
  },
};

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.move();
  backgroundImage.draw();
  updateGameArea();
  console.log(myGameArea.status);
  if (myGameArea.status!=="stop")
   requestAnimationFrame(updateCanvas);
}




var myGameArea = {
   
  frames: 0,
  start: function(first) {
	  
	var ele=document.getElementById('message');
	ele.style.display='none';
	if (first)  
     this.status="stop";//if first time lets show one animation
    else
     this.status="running";
 
	img.src="images/track.png";
	img.onload = updateCanvas;
	
  },
  
  stop: function() {
    this.status="stop";
	myGameArea.frames= 0;
	myObstacles=[];
	var ele=document.getElementById('message');
	var score=document.getElementById('score');
	ele.style.display='block';
	score.innerHTML=myGameArea.points;
	
  },
  score: function() {
    this.points = Math.floor(this.frames / 5);
    ctx.font = "48px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.points, 100, 50);
  }
};

class Component {
  constructor(width,height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    // new speed properties
    this.speedX = 0;
    this.speedY = 0;
	
  }

   draw(){
	   carImg.src = "images/car.png";  
       ctx.drawImage(carImg, this.x, this.y , 50, 50);
	  
  }
  draw2(){
	   carImg.src = "images/car.png"; 
	   var that=this;
       carImg.onload=function(){	   
       ctx.drawImage(carImg, that.x, that.y , 50, 50);
	   }
	  
  }
  
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    if (this.x<0)
		 this.x=0;
    this.y += this.speedY;
	if (this.x>680)
		this.x=680;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}


var player = new Component(30, 30, "yellow", 345,700);

function updateGameArea() {

  // update the player's position before drawing
  player.newPos();
  if (myGameArea.status==='stop')
    player.draw2();
   else
	player.draw();
  
  // update the obstacles array
  updateObstacles();
  // check if the game should stop
  checkGameOver();
  // update and draw the score
  myGameArea.score();
  
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
   
   
    case 37: // left arrow
      player.speedX -= 5;
      break;
    case 39: // right arrow
      player.speedX += 5;
      break;
  }
};

document.onkeyup = function(e) {
  player.speedX = 0;
  player.speedY = 0;
};

function updateObstacles() {
	
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 3;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 200 === 0) {
    var y = canvas.height;
    var minWidth = 70;
    var maxWidth = 300;
    var width = Math.floor(
      Math.random() * (maxWidth - minWidth + 50) + minWidth
    );
	var x= Math.floor(
      Math.random() * (maxWidth - minWidth + 50) + minWidth
    );
    
   
    myObstacles.push(new Component(width, 20, "red", x, 0));
   
  }
}

function checkGameOver() {
  var crashed = myObstacles.some(function(obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
	 
    myGameArea.stop();
  }
}



window.onload = function() {
	
  myGameArea.start(true);
	
  document.getElementById("start-button").onclick = function() {
	  
 	startGame();
  };

  function startGame() {
       myGameArea.start();
  }
};
