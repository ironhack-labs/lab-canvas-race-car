
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
  let obstacles = [
    new Component( "./images/car_grey.png", 100, 20, 50, 100 ),
    new Component( "./images/car_orange.png", 250, 20, 50, 100 ),
    new Component( "./images/car_yellow.png", 250, 20, 50, 100 ),
    new Component( "./images/car_red.png", 250, 20, 50, 100 )
  ];
  
  // draw components
  animation( ctx, road, car, obstacles );
}

function animation( ctx, road, car, obstacles ) {
  let order = 0;
  setInterval( () => {
    clear( ctx );
    drwaComp( ctx, road );
    drwaComp( ctx, car );
    drwaComp( ctx, obstacles[order] );
    //drwaComp( ctx, obstacles[order + 1] );
    moveCar( car );
    let compCollision = collision( car, obstacles[order] );
    order = randomCars( obstacles[order], compCollision, order, obstacles );
  }, 1000/200 )
}

function drwaComp ( ctx, obj ) {
  console.log(obj.imgScr)
  let img = new Image();
  img.src = obj.imgScr;

  ctx.drawImage(img, obj.posX, obj.posY, obj.imgW, obj.imgH);
}

function randomCars( obj, collisionOccur, idx, objArr ) {
  obj.posY += 1;
  if( collisionOccur || obj.posY >= 800 ) {
    obj.posY = 20;
    obj.posX = Math.floor(Math.random() * 400);
    idx = Math.floor( Math.random() * objArr.length );
  }
  return idx;
}

function clear( ctx ) {
  ctx.clearRect(0, 0, canva.width, canva.height)
}

function moveCar( obj ) {
  document.onkeydown = event => {
    let keyCodes = [37, 38, 39, 40];
    const key = event.keyCode;    
    
    if ( keyCodes.includes(key) ) {
      console.log(keyCodes.includes(key));
      event.preventDefault();
      if ( key === 37 && obj.posX >= 0 ) console.log(obj.posX -= 20)
      else if ( key === 39 && obj.posX <= 500 - obj.imgW ) obj.posX += 20
      else if ( key === 38 && obj.posY >= 10 ) obj.posY -= 20
      else if ( key === 40 && obj.posY <= 760 - obj.imgH ) obj.posY += 20
    }   
  }
}

function collision( car, obs ) {
  let colRight = ( (car.posX + car.imgW >= obs.posX) && (car.posX <= obs.posX) );
  let colLeft = ( (car.posX <= obs.posX + obs.imgW) && (car.posX + car.imgW >= obs.posX + obs.imgW) );
  let colTop = ( (car.posY + 20 <= obs.posY + obs.imgH) && (car.posY + car.imgH >= obs.posY + obs.imgH) );
  let colBot = ( (car.posY + car.imgH - 20 >= obs.posY) && (car.posY <= obs.posY) );
  
  if ( (colRight || colLeft) && (colTop || colBot)) return true;
  return false;
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
