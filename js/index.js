

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    var score = new Score();
  };

  function startGame(){
    let canvas = document.getElementById('canvas');
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
  
  }

  

  function get_scores(callback) {
    let file = "scores.json";
    fetch(file, {cache:'no-cache'})
        .then(function(response){
            if (response.status !=200){
                Error.innerHTML= response.status
            } 
            response.json().then(function(data){
                let scores = JSON.stringify(data);
                console.log(scores);
                callback(scores)
            });
        })
        .catch(function(err){
            Error.innerHTML = err;
        })
}

};


