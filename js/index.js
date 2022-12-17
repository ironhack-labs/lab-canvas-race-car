window.onload = () => {
  const bg = new Background()
  const car = new Car({x:220,y:600,h:50,w:40})

  document.getElementById('start-button').onclick = () => {
    startGame();
    if(!intervalId){
      intervalId = requestAnimationFrame(startGame)
    }

  };

  function startGame() {}
  function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frames++;
    bg.render()
    car.render()
    generateObstacles()
    renderObstacles()

    ctx.fillStyle = "#000";
    ctx.fillText(`SCORE: ${score}`,10,50)
    if(intervalId){ 
      requestAnimationFrame(startGame)
    }
  }

  function generateObstacles(){
    if( !(frames % 160 === 0) ){
      return  true
    }
    const randW = Math.floor(Math.random() * (200 - 50) + 50)
    let randX = Math.floor(Math.random() * (440 - 70) + 70)
    if(randX + randW >= 440){
       randX = randX - randW
    }
    const obstacle = new Obstacles({x:randX,y:0,h:50,w:randW})
    arrObstacles.push(obstacle)
  }

  function renderObstacles(){
    arrObstacles.forEach((obs,index_obs)=>{
      obs.render()

      if(obs.y + obs.height>canvas.height){
        arrObstacles.splice(index_obs,1)
        score++;
      }
      if(car.collition(obs)){

        gameover()
      }
    })
  }

  function gameover(){
    ctx.fillStyle = "#000";
    intervalId=undefined
    ctx.fillRect(0,400,canvas.width,300)
    ctx.fillStyle = "red";
    ctx.fillText(`Game Over!`,150,550)
    ctx.fillStyle = "#fff";
    ctx.fillText(`Your final score`,100,600)
    ctx.fillText(score,250,650)
  }

};
