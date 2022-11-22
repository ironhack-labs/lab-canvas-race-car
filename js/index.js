window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    console.log('Started!')
  };
}

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const background = new Image();
    background.src = '../images/road.png';
    background.onload = function(){
      ctx.drawImage(background, 500, 700, 0, 0);
    };
  }


