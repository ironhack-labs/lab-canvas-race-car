window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {
    const imgRoad = new Image()
    imgRoad.src = '/images/road.png'
    imgRoad.onload = ()=>{
      ctx.drawImage(imgRoad, 0, 0, 500, 700)
    }
  }
};
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')