class hazardObject {
  constructor(ctx){
    this.ctx = ctx;
    this.width = (Math.floor(Math.random() * 251 + 50))
    this.height = 25,
    // this.x = 0;
    this.x = Math.floor(Math.random() * (500 - this.width + 1));
    this.y = 0;
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

  draw(){
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(){
    this.y++;
  }

  setStartingX(){
    this.x = Math.floor(Math.random() * (500 - this.width + 1))
  }

  outOfBounds(){
    return (this.y > 700);
  }
  
  //   width: (Math.floor(Math.random() * 251 + 100)),
  //   height: 25,
  //   x: Math.floor(Math.random() * (25 - 250 + 1)),
  //   y: 0,
  //   draw: function() {
  //     // ctx.fillRect(this.x, this.y, this.width, this.height);
  //     console.log(this.width);
  //     console.log(this);
  //     ctx.fillRect(this.x, this.y, this.width, this.height);
  //   },
  //   move: function() {
  //     this.y++;
  //   }
  // }


}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    startGame();
  };

};

let score = 0;

function startGame() {

  let frameCount = 0;  
  const myCanvas = document.querySelector('#canvas');
  myCanvas.style.border = '1px solid red';
  const ctx = myCanvas.getContext('2d');

  const roadImage = new Image(500, 700);  
  roadImage.src = './images/road.png';
  // roadImage.src = './svg/road-2.svg';  
  roadImage.onload = () => {
    ctx.drawImage(roadImage,0,0,500,700);
    updateBackgroundCanvas();
  }

  
  const carImage = new Image(500, 700);  
    carImage.src = './svg/car.svg';
  
  // roadImage.onload = () => {
  //   ctx.drawImage(roadImage,0,0,500,700);
  //   updateBackgroundCanvas();
  // }

  const roadImageObject = {
    img: roadImage,
    x: 0,
    y:0,
    speed: 1,
  
    move: function() {
      this.y += this.speed;
      this.y %= myCanvas.height;
    },
  
    draw: function() {
      ctx.drawImage(this.img, 0, this.y, 500, 700);
      if (this.speed < 0) {
        ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 700);
      } else {
        ctx.drawImage(this.img, 0, this.y - myCanvas.height, 500, 700);
      }
    },
  };

    const carImageObject = {
      img: carImage,
      x: 210,
      y: 530,
      width: 79,
      height: 160,
      // speedX: 0, 
      moveLeft: function(){
        // this.x -= this.speedX;
        this.x -= 3;
      },
      moveRight: function(){
        // this.x += this.speedX;
        this.x += 3;
      },
      draw: function(){
        ctx.drawImage(this.img, this.x, this.y, this.width,this.height) //210,530,79,160
      },
      left() {
        return this.x;
      },
      right() {
        return this.x + this.width;
      },
      top() {
        return this.y;
      },
      bottom() {
        return this.y + this.height;
      } ,     
      colide(hazards){
        return !(this.bottom() < hazards.top() || this.top() > hazards.bottom() || this.right() < hazards.left() || this.left() > hazards.right());

      }
    }

    const hazards = [];    

  
  function updateBackgroundCanvas() {
    frameCount++;


    // console.log(frameCount);
    roadImageObject.move();


    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    roadImageObject.draw();

    if(frameCount%500 === 0){
      hazards.push(new hazardObject(ctx));
    }
    // hazards[0].draw();
    // hazards[0].move();
    // hazards[0].draw();
    for(i = 0; i < hazards.length; i++){
      hazards[i].draw();
      hazards[i].move();
      hazards[i].draw();            
      // console.log(hazards);      
        if(carImageObject.colide(hazards[i])){
            console.log('boop');     
        }
        if(hazards[i].outOfBounds()){
          score += 1;
          hazards.splice(i,1);
          // score++;
        }
        // console.log(hazards);
    }

    // ctx.drawImage(carImage,210,530,79,160);

    carImageObject.draw();

    // hazards.draw();
    document.getElementById('score').innerText = score;

    requestAnimationFrame(updateBackgroundCanvas);
  }
  
  window.addEventListener('keydown', event => {
  //  console.log(event);
    switch (event.key){
      case 'ArrowRight' :
      case 'd' :
        carImageObject.moveRight();
        carImageObject.moveRight();
        carImageObject.moveRight();
        break;
      case 'ArrowLeft' :
      case 'a' :
        carImageObject.moveLeft();
        carImageObject.moveLeft();
        carImageObject.moveLeft();
        break;
      default :
        break;
    }
  })  


}



// Old Junk


/*


class Game {
  constructor(width,height,sprite,x,y){
    this.width = width;
    this.height = height;
    // this.sprite = sprite;
    this.x = x;
    this.y = y;
  }

  

}

const screen = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
    this.interval = setInterval(refresh,2000);
  },
  clear: function () {
    this.context.
  }
}

function refresh(){
  screen.Clear();

}

class Draw {
  constructor ( width, height, sprite, x, y ){
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.px = 0;
    thix.py = 0;
  }

  update() {
    const ctx = screen.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }

}

const myGameArea = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    //call update game area every 20 seconds
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function (){
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
};

function updateGameArea(){
  // myGameArea.clear();
  // player.newPos();
  // player.update();
  // updateObstacles();
};

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
 
  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


*/