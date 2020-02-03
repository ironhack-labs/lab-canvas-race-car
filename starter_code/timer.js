const timer = document.querySelector('#timer');
let counter = 0;
const timerT = () => {
  setInterval(function() {
    if (gameIsRunning) {
      counter += 1;
      timer.innerText = counter;
    }
  }, 1000);
};
/*
const restart =()=>{
  let carImg = new Image();
  carImg.src = './images/car.png';
  for (let i = 0; i < 100; i++) {
    let obst = new Obstacle(i * -500 + Math.random() * -100);
    loadObst.push(obst);
  }
};*/
