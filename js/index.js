const canvas = document.getElementById('canvas') //Target canvas
const ctx = canvas.getContext ('2d') //Make the environment 2d


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Image(); //Create new image for the road
    road.src = "/images/road.png";

    road.onload = ()=>{ //Load road
      ctx.drawImage (road,0,0,500,700)
    }

  }
};
