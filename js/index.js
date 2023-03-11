window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  const road = document.querySelector('#canvas');  
  road.style.backgroundImage= 'url("../images/road.png")'
  road.style.backgroundSize= "cover"
  }
};
