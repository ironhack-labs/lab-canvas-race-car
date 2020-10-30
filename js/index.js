const btnStart = document.getElementById('start-button')
const roadImage = document.getElementById('img-road')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");

const gameArea = {

  player: null,
  obstacles: [],
  frames: 0,
  score: 0,
  animationId: 0,

};

window.addEventListener("load", () => { //Executar todas as funções apenas se a page carregar

  btnStart.addEventListener("click", startGame); //Após clicar no btn, execute a func startGame

  function startGame() {

    //Retirando itens da home após apertar START
    btnStart.parentElement.style.display = "none"
    roadImage.style.display = "none"

    //Aparecendo o canvas após remover os itens da home da tela
    canvas.style.display = "block"

    //Definindo o background do canvas //estamos usando no updata game()
    // let background = new Image()
    // background.src = "./images/road.png"
    // ctx.drawImage(background, 0, 0, 500, 700)

    //Criando nosso objeto car
    gameArea.player = new Component(230, 550, 40, 40, "red");
  
    updateGame()

  }

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        gameArea.player.speedX -= 1;
        break;
      case "ArrowRight":
        gameArea.player.speedX += 1;
        break;
      default:
        return;
    }
  });

  document.addEventListener("keyup", (event) => {
    gameArea.player.speedX = 0;
    gameArea.player.speedY = 0;
  });




  function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Criar novamente o background no loop
    let background = new Image()
    background.src = "./images/road.png"
    ctx.drawImage(background, 0, 0, 500, 700)
    gameArea.player.update()

    gameArea.player.newPos();

    updateObstacles();

    gameArea.animationId = requestAnimationFrame(updateGame);
  }






  function updateObstacles() {
    gameArea.frames++;
  
    if (gameArea.frames % 30 === 0) {
      gameArea.score++;
    }
  
    gameArea.obstacles.map((obstacle) => {
      obstacle.x--;
      obstacle.update();
    });
  
    if (gameArea.frames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );
  
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
  
      const upperObstacle = new Component(x, 0, 10, height, "green");
      const bottomObstacle = new Component(
        x,
        height + gap,
        10,
        x - height - gap,
        "green"
      );
  
      gameArea.obstacles.push(upperObstacle);
      gameArea.obstacles.push(bottomObstacle);
    }
  }







  class Component {
    constructor(x, y, width, height, color) {
      this.image = ""
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      
    }
  
    update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }


  
  }



});
    
  