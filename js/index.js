//car width 40px
// 40 -> 420 ---> 390px
class Obstacle{
  constructor(context){
    this.x=Math.floor(Math.random()*350)+40
    this.y=20
    this.width=Math.floor(Math.random()*110)+60
    this.height=20
    this.context=context
    this.speed=35
    this.colors = ['blue', 'red','white']
    this.color = this.colors[Math.floor(Math.random()*3)]
  }
  // get y(){
  //   return this.y
  // }
  print(){ 
    this.context.fillStyle = this.color
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }
  move(){
    if(this.y<=700){
      this.y+=30
    }
  }
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementsByTagName('canvas')[0]
  const context = canvas.getContext('2d')
  const carImage = new Image()
  carImage.src = './images/car.png'
  
  const roadImage = new Image()
  roadImage.src = './images/road.png'
  
  const car ={
    x:230,
    y:600,
    move(direction){
      if(direction==='r' && this.x<=420){
        this.x+=10
      }else if(direction==='l' && this.x>=40){
        this.x-=10
      }
      // context.clearRect(0,0, canvas.width, canvas.height )
      // context.drawImage(roadImage,0,0,500,700)
      // context.drawImage(carImage, this.x, this.y, 40, 100)
      // console.log(this.x)
    }
  }
  const background = {
    a:0,
    b:-700,
    print(){
      context.drawImage(roadImage,0,this.a,500,700)
      context.drawImage(roadImage,0,this.b,500,700)
      if(this.a<700){
        this.a+=35
        this.b+=35
      }else{
        this.a=0
        this.b=-700
      }
    }
  }
  let obstacleArray = []
  // const obstacle = new Obstacle(context)
  window.addEventListener('keydown',(event)=>{
    console.log(event.key)
    if(event.key==='ArrowLeft'){
      car.move('l')
    }else if(event.key==='ArrowRight'){
      car.move('r')
    }
  })
  function startGame() {
    //context.drawImage(roadImage,0,0,500,700)
    background.print()
    context.drawImage(carImage, car.x, car.y, 40, 100)
    console.log('start')
  }
  function refresh(){
    createRandomObstacles(obstacleArray,context)
    obstacleArray = moveObstacles(obstacleArray)
    context.clearRect(0, 0, canvas.width, canvas.height)
    //context.drawImage(roadImage,0,0,500,700)
    background.print()
    context.drawImage(carImage, car.x, car.y, 40, 100)
    //context.rotate(Math.PI)
    printObstacles(obstacleArray)
    if(obstacleArray[0].y>=650  &&  obstacleArray[0].x<=car.x+40  &&  obstacleArray[0].x+obstacleArray[0].width>=car.x){
      console.log('LLLOOOOSSSEEERRRR', obstacleArray[0].y)
      clearInterval(intervalID)
    }
  }

  const intervalID = setInterval(()=>{
    refresh()
  },300)
};


const createRandomObstacles = (obstacleArray,context) =>{ 
  if(obstacleArray.length===0 || obstacleArray[obstacleArray.length-1].y>90 && Math.random()<0.2){
    const obstacle = new Obstacle(context)
    obstacleArray.push(obstacle)
  }
  //console.log(obstacleArray[obstacleArray.length-1].y)
}

const moveObstacles = (obstaclesArray) =>{
  obstaclesArray.forEach(obstacle=>obstacle.move())
  return obstaclesArray.filter(obstacle=>obstacle.y<690)
}

const printObstacles = (obstacleArray) =>{
  obstacleArray.forEach(obstacle=>obstacle.print())
}