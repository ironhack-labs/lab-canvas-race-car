let road = document.createElement("img");
road.src = "images/road.png";
    
let player = document.createElement("img");
player.src = "images/car.png";
let xPlayer = 230;
let score = -60;



const canvasObj = {
  canvas: null,
  ctx: null,
  intervalId: null,

  start: function () {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.intervalId = setInterval(update,60);
  },

  clear: function () {
    this.ctx.clearRect(0,0,500,700)
  },

  stop: function () {
    clearInterval(this.intervalId)
  },
}

function playerPrint() {
  document.getElementById("canvas").getContext("2d").drawImage(player, xPlayer, 580, 40, 80);
}

function scorePrint(num) {
  let textToShow;
  if (num < 0) {
    textToShow = "Score: 0";
  } else textToShow = `Score: ${num}`
  document.getElementById("canvas").getContext("2d").fillStyle = "white";
  document.getElementById("canvas").getContext("2d").font = "20px Arial"
  document.getElementById("canvas").getContext("2d").fillText(textToShow, 20, 20)
}




class Rectangle {
  constructor (x,w) {
    this.x = x;
    this.y = -40;
    this.w = w;
    this.h = 40;    
  }

  recalculatePosition(moveY) {
    this.y += moveY;
    
  }

  print() {
    canvasObj.ctx.fillStyle = "red";
    canvasObj.ctx.fillRect(this.x,this.y,this.w,this.h)
  }
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    canvasObj.start();
  };    
}


let obstacles = [];
let i=0;

const update = () => {
  i++;
  
  //limpiar
  canvasObj.clear();

  //redibujar
  // 1-carretera
  document.getElementById("canvas").getContext("2d").drawImage(road, 0, 0, 500, 700);
  // 2-obstaculos

//meter aqui el draw de los obstaculos
  if (i%20 == 0) {
    score += 20;

    let x = Math.random() * 400;
    let w = Math.random() * 300;
    
    let newObstacle = new Rectangle (x,w);

    obstacles.push(newObstacle);
  }

  obstacles.forEach((obstacle) => {
    obstacle.y += 10;

    if(!(((obstacle.y + obstacle.h) < 580)||(obstacle.x + obstacle.w < xPlayer)||((xPlayer + 40) < obstacle.x)||((580 + 80) < obstacle.y))) {
      canvasObj.stop();
    }

    obstacle.print();
  })
  

  // 3-jugador
  playerPrint()
  
  scorePrint(score)

}


document.body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    xPlayer -= 20
  }
  if (e.key == "ArrowRight") {
    xPlayer += 20
  }


  if (xPlayer < 0) {
    xPlayer = 0;
  }
  if (xPlayer > 460) {
    xPlayer = 460;
  }
})


// Me he guiado casi al 100% por el código que hizo Mariona para el codealong del flappy bird explicándonoslo paso a paso