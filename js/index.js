window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    setInterval(() => {
      gameCar.init();
    }, 1000 / 70)
  };
};
