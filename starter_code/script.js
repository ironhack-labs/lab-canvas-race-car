window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};
window.onload = function() {

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var myGamePiece;
  var myObstacle = []; 


function startGame() {
    myGamePiece = new Component(40, 60, "images/car.png", 180, 570, "image");
    //myObstacles = new Component(180, 15, "red", 0, 300);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 650;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    frames: 0,
    clear : function() {
        ctx.beginPath();
        ctx.rect(0, 0, 30, 650);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(370, 0, 30, 650);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.fillStyle = "grey";
        ctx.fillRect(30, 0, 340, 650);
        ctx.clearRect(40, 00, 320, 650);

        ctx.beginPath();
        ctx.rect(50, 0, 300, 650);
        ctx.fillStyle = "grey";
        ctx.fill();
        
        ctx.beginPath();
        ctx.setLineDash([20, 20]);
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 650);
        ctx.lineWidth = 3;
        ctx.strokeStyle="white";
        ctx.stroke();

        // Fill with gradient
        //ctx.fillStyle = grd;
        ctx.fillRect(50, 190, 150, 80);
    },
    score: function() {
      points = (Math.floor(this.frames/5))
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText('Score: '+points, 300, 50);
    },
    stop : function() {
          clearInterval(this.interval);
      }
}

function Component(width, height, color, x, y, type) {
    this.type = type;
    if (this.type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.left   = function() { return this.x                 }
    this.right  = function() { return (this.x + this.width)  }
    this.top    = function() { return this.y                 }
    this.bottom = function() { return this.y + (this.height) }
    
                                                                this.crashWith = function(obstacle) {
      return !((this.bottom() < obstacle.top())    ||
               (this.top()    > obstacle.bottom()) ||
               (this.right()  < obstacle.left())   ||
               (this.left()   > obstacle.right())) 
    }
}

function updateGameArea() {
  for (i = 0; i < myObstacle.length; i += 1) {
    if (myGamePiece.crashWith(myObstacle[i])) {
        myGameArea.stop();
        return;
    } 
}
    myGameArea.clear();
    myGameArea.frames +=1;
    if (myGameArea.frames % 100 === 0) {
      console.log(myObstacle)
      //ponemos y porque nos interesa el largo
        y = myGameArea.canvas.width;
        minWidht = 20;
        maxWidht = 200;
        width = Math.floor(Math.random()*(maxWidht- minWidht+1)+ minWidht);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacle.push(new Component(width, 10, "blue", width+gap, 0, 'e'));
    }
    for (i = 0; i < myObstacle.length; i ++) {
        myObstacle[i].y += 1;
        myObstacle[i].update();
    }
    myGamePiece.newPos();
    myGamePiece.update();
    myGameArea.score();
   // myObstacle.update();
    

   
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveup();
      break;
    case 40:
      movedown();
      break;
    case 37:
      moveleft();
      break;
    case 39:
      moveright();
      break;
  }
}
document.onkeyup = function(e) {
  if (e.keyCode) {
    clearmove(); 
  }
}
startGame();



  document.getElementById("start-button").onclick = function() {
    
  };
};




    



