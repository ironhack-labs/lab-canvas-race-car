
class Component {
  constructor( img, x, y, w, h) {
    this.imgScr = img;
    this.posX = x;
    this.posY = y;
    this.imgW = w;
    this.imgH = h
  }
};

let canva = {
  width: 500,
  height: 780
};

function init() {
  // insert canvas HTML
  let canvasHTML = `<canvas id="road" width=${canva.width} height=${canva.height}></canvas>`
  document.querySelector('#game-board').insertAdjacentHTML('afterBegin', canvasHTML);  
  // set canvas context
  let ctx = document.getElementById("road").getContext('2d');
  
  // new object instances
  let road = new Component( "./images/road.PNG", 0, 0, 500, 780 );
  let car = new Component( "./images/car.png", 225, 670, 50, 100 );
  let obstacles = [];
  obstacles.push( new Component( "./images/car_grey.png", 100, 20, 50, 100 ) );
  obstacles.push( new Component( "./images/car_orange.png", 250, 20, 50, 100 ) );
  obstacles.push( new Component( "./images/car_yellow.png", 250, 20, 50, 100 ) );
  obstacles.push( new Component( "./images/car_red.png", 250, 20, 50, 100 ) );
  
  // draw components
  drwaComp( ctx, road );
  drwaComp( ctx, car );
  obstacles.forEach( car => drwaComp( ctx, car ))
  //drwaComp( ctx, obstacles[0] );
  //drwaComp( ctx, obstacles[1] );

  animation( ctx, road, car, obstacles )
}

function animation( ctx, road, car, obstacles ) {
  let order = 0;
  setInterval( () => {
    clear( ctx );
    drwaComp( ctx, road );
    drwaComp( ctx, car );
    drwaComp( ctx, obstacles[order] );
    //drwaComp( ctx, rockect );
    obstacles[order].posY += 2

    if( obstacles[order].posY >= 800 ) {
      obstacles[order].posY = 20;
      order = Math.floor( Math.random() * obstacles.length );
      obstacles[order].posX = Math.floor(Math.random() * 400);
    }
  }, 1000/200 )
}

function drwaComp ( ctx, obj ) {
  console.log(obj.imgScr)
  let img = new Image();
  img.src = obj.imgScr;

  //img.addEventListener('load', function(){
  //  ctx.drawImage(img, obj.posX, obj.posY, obj.imgW, obj.imgH);
  //})

  ctx.drawImage(img, obj.posX, obj.posY, obj.imgW, obj.imgH);
}

function clear( ctx ) {
  ctx.clearRect(0, 0, canva.width, canva.height)
}

// ********************************************************** //

window.onload = function() {
  init();
  //document.getElementById("start-button").onclick = function() {
  //  startGame();
  //};
//
  //function startGame() {
//
  //}
}
