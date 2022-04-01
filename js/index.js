const myObstacles = []
const myGameArea = {
  canvas: document.querySelector("canvas"),
  frames: 0,
  start: function(){
    this.canvas.width = 500
    this.canvas.height = 700
    this.context = this.canvas.getContext("2d")
    this.interval = setInterval(updateGameArea,20)
  },
  drawRoad: function(){
    const roadImg = new Image()
    roadImg.src = "../images/road.png"
    roadImg.onload = this.context.drawImage(roadImg,0,0,this.canvas.width,this.canvas.height)
  },
  clear: function(){
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
  },
  showScore: function(){
    const score = `Score: ${myCar.score}`
    this.context.font = "30px Arial"
    this.context.fillStyle = "white"
    this.context.fillText(score,75,50)
  },
  stop: function(){
    clearInterval(this.interval)
  }
}
const updateGameArea = () => {
  myGameArea.clear()
  myGameArea.drawRoad()
  myCar.update()
  updateObstacles()
  myGameArea.showScore()
  checkGameOver()
}
const updateObstacles = () => {
  for (let i=0; i<myObstacles.length; i++){
    myObstacles[i].y += 3
    myObstacles[i].update()
    if (myObstacles[i].y >= 725 && myObstacles[i].y <=726){
      myCar.scoreAdd()
    }
  }
  myGameArea.frames += 1
  if(myGameArea.frames % 120 === 0){
    let y = 0
    let leftEdge = 430
    let rightEdge = 65
    let minWidth = 20
    let maxWidth = 250
    let height = 25
    let width = Math.floor(Math.random()*(maxWidth-minWidth)+minWidth)
    let edges = Math.floor(Math.random()*(rightEdge-leftEdge)+leftEdge)
    if ((width + edges) > 430){
      width = 430 - edges
    }
    myObstacles.push(new Obstacle(width, height, edges, y))
  }
}
class Component {
  constructor(width, height, x, y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = "../images/car.png"
  }
  left() {
    return this.x
  }
  right(){
      return this.x + this.width
  }
  top(){
      return this.y
  }
  bottom(){
      return this.y + this.height
  }
  crashWith(obstacle){
    return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
    )
  }
}
const checkGameOver = () => {
  const crashed = myObstacles.some((element) => {
      return myCar.crashWith(element)
  })
  if(crashed){
      myGameArea.stop()
  }
  return
}
class Car extends Component{
  constructor(width, height, x, y){
    super(width, height, x, y)
    this.score = 0
  }
  update(){
    const ctx = myGameArea.context
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    //this.y += -1
  }
  scoreAdd(){
    this.score += 1
  }
}
class Obstacle extends Component{
  update(){
    const ctx = myGameArea.context
    ctx.fillStyle = "brown"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
const myCar = new Car(60, 110, 220, 550)
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  document.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "ArrowLeft":
          myCar.x -= 5
            break
        case "ArrowRight":
          myCar.x += 5
            break
        default:
            break
    }
})
  function startGame() {
    myGameArea.start()
  }
};