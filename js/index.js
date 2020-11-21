

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    clicked++;
  };

  let clicked=1;

  function startGame(){
    let canvas = document.getElementById('canvas');
    if (clicked==1){
    var game = new Game(canvas);
    game.start();
  

    window.addEventListener('keydown', (event)=>{
      let key = event.key;
      switch (key){
          case "ArrowLeft":
              game.car.moveLeft();
              
              break;
          case "ArrowRight":
              game.car.moveRight();
              break;
          default:
              break;
      }
  })
  
  }}


};


