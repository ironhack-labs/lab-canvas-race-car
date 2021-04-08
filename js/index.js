const canvas = document.querySelector(('#canvas'));
canvas.width = 500;
canvas.height = 700;
const ctx = canvas.getContext("2d");

let bgImg = new Image();
bgImg.src = 'images/road.png';
//load bg on pageload
ctx.drawImage(bgImg, 0, 0, 500, 700);
let carImg = new Image();
carImg.src = 'images/car.png';

function startGame () {
  let timerS = 0;
  let timerMs = 0;


  setInterval(function() {
    timerS += 1;
    document.querySelector('#score span').innerHTML = `${timerS}`
  }, 1000);

  setInterval(function() {
    if (timerMs< 90) {
      timerMs += 10;
    } else {
      timerMs = 0;
    }

    if (timerMs===0) {
      document.querySelector('#score span:nth-child(2)').innerHTML = `.00s`
    } else {
      document.querySelector('#score span:nth-child(2)').innerHTML = `.${timerMs + 10}s`
    }
  }, 100);


  const bg = {
    x: 0,
    y: 0,
    w: 500,
    h: 700,
    draw: function(){
      ctx.drawImage(bgImg, this.x, this.y, this.w, this.h)
    }
  };

  const car = {
    x: 200,
    y: 500,
    w: 70,
    h: 95,
    draw: function () {
      ctx.drawImage(carImg, this.x, this.y, this.w, this.h)
    }
  };

  class obstacle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}`
    }
    draw = () => {
      if (this.y > 800) {} else {
        ctx.fillStyle = this.color;
        //ctx.fillRect(this.x, this.y, this.h, this.w)
        ctx.fillRect(this.x, this.y, this.w, this.h)
      }
    }
    move = () => {
      if (this.y > 800) {
      } else {
        this.y += 5;
      }
    }
  }

  let obstacles = [];


  setInterval(function () {
    obstacles.push(new obstacle(Math.random() * 400, 0, Math.random() * 300, 50));
  }, 2000);

  function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
      //collision debug
      // console.log('======================================================');
      // console.log(`carX: ${rect1.x} < obX: ${rect2.x} + obW: ${rect2.w}  || ${rect1.x} < ${rect2.x + rect2.w}`);
      // console.log(`carX: ${rect1.x} + carW: ${rect1.w} > obX: ${rect2.x}  || ${rect1.x + rect1.w} > ${rect2.x}`);
      // console.log(`carY: ${rect1.y} < obY: ${rect2.y} + obH: ${rect2.h} || ${rect1.y} < ${rect2.y + rect2.h}`);
      // console.log(`carY: ${rect1.y} + carH: ${rect1.h} > obY: ${rect2.y} || ${rect1.y + rect1.h} > ${rect2.y}`);
      // console.log('======================================================');
      // console.log(`car: x${rect1.x}/y${rect1.y} | w${rect1.w}/h${rect1.h}`);
      // console.log(`ob: x${rect2.x}/y${rect2.y} | w${rect2.w}/h${rect2.h}`);
      cancelAnimationFrame(gameInt);
      document.querySelector('#score span').innerHTML = `${timerS}`;
      if (timerMs===0) {
        document.querySelector('#score span:nth-child(2)').innerHTML = `.00s`
      } else {
        document.querySelector('#score span:nth-child(2)').innerHTML = `.${timerMs + 10}s`
      }
      alert(`Game over! You lasted ${timerS}.${timerMs}s. Reload Page to try again.`);
      window.location.reload();
    }
  }

  let gameInt = null;
  function animate() {
    gameInt = requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillText(score, 10, 10, 200, 100);
    bg.draw();
    car.draw();
    obstacles.forEach(ob => {
      ob.move();
      ob.draw();
      detectCollision(car, ob)
    });

    window.onkeydown = function (e) {
      if (e.key === 'ArrowLeft') {
        car.x -= 15
      }
      if (e.key === 'ArrowRight') {
        car.x += 15
      }
    };
  }
  animate();


}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};