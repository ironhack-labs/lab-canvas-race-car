let x = 0;
let y = 0;

const img_car = new Image();
img_car.src = 'images/car.png'
const img_road = new Image();
  img_road.src = 'images/road.png';
const bg_canvas = document.getElementById('canvas');
const ctx = bg_canvas.getContext('2d');

score = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

  /* 
    Limites para el carro
    X = 63, 392 */ 

  function startGame() {
    updateBackgroundCanvas()
  }

  function updateBackgroundCanvas() {
    backgroundImage.move();
    ctx.clearRect(0, 0, bg_canvas.width, bg_canvas.height);
    backgroundImage.draw();
    auto.draw();
    text();
    requestAnimationFrame(updateBackgroundCanvas);
  }

//----------------------------Codigo de camino--------------------------------/
  const backgroundImage = {
    img: img_road,
    y: 0,
    speed: +1, // Valor para que vaya de arriba hacia abajo el camino
  
    move: function() {
      this.y += this.speed;
      this.y %= bg_canvas.height;
    },
  
    draw: function() {                //500W, 700H
      ctx.drawImage(this.img, 0, this.y, 500, 700); //Primer imagen BG
      ctx.drawImage(this.img, 0, this.y - bg_canvas.height, 500, 700); // Repeticion de la imagen BG
    }
  };

 //-------------------------------------------------------------------------/

//------------------------------Codigo de auto-------------------------------/
  const auto = {
    img : img_car,
    x : 225,
    draw: function(){
      ctx.drawImage(this.img, this.x, 575, 50, 100);
    }
  }
  addEventListener('keydown', event =>{
    if (event.keyCode === 37 && auto.x > 75){
      auto.x -= 25
    }
    if (event.keyCode === 39 && auto.x < 375){
      auto.x += 25
    }
  })
//-------------------------------------------------------------------------/

//------------------------------Puntaje------------------------------------/

const up_score = {
  score2: setInterval(() => {
    score +=1;
  },1000)
}

function text() { 
  ctx.font = "18px serif";
  ctx.fillStyle = "black";
  ctx.fillText(`${up_score.score2}`,350,50)
  console.log(up_score.score2);
}


