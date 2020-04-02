window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    app.startGame('canvas');
    app.drawImage('car.png')
  };
};

