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
