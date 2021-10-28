const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// LOAD ALL IMAGES
const loadImages = {}
  let counterForLoadedImages = 0
  const imagesLinks = [
    {link: '/images/road.png', name:'road'},
    {link: '/images/car.png', name:'car'},
    {link: '/images/logo.png', name:'logo'},
    {link: '/images/arrows.png', name:'arrows'}
  ]
  imagesLinks.forEach(function (image){
    let img = new Image()
    img.src = image.link
    img.onload = ()=>{
      counterForLoadedImages ++
      loadImages[image.name] = img
    }
  })
  // CLASSES

  class Car{
    constructor(){
      this.x = 225
      this.y = 550
      this.speedX = 0
      this.speedY = 0
      this.width = 50
      this.heigth = 100
    }
  }
  const car = new Car()
  

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };
  
  // FUNCTIONS
  function startGame() {
    if(imagesLinks.length === counterForLoadedImages){
    clearCanvas()
    drawRoad()
    drawCar()
    updateCar()
    updateObstacle()
  }
    requestAnimationFrame(startGame)
  }
  function drawRoad() {
    ctx.drawImage(loadImages.road, 0, 0, 500, 700)

  }
  function drawCar() {
    ctx.drawImage(loadImages.car, car.x, car.y, car.width, car.heigth)
  }
  function updateCar(){
  car.x += car.speedX
  car.y += car.speedY
  checkLimits()
  }
  function checkLimits(){
    if(car.x > 405){
      car.x = 405
    }
    if(car.x < 50){
      car.x = 50
    }
    if(car.y > 600){
      car.y = 600
    }
    if(car.y < 0){
      car.y = 0
    }
  }
  function Obstacle(width, height, x, y) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  function updateObstacle(){
    let obstacle1 = new Obstacle(200, 50, 100, 0)
    obstacle1.y += 1
  }
  function clearCanvas() {
  ctx.clearRect(0, 0, 500, 700)
  }
  
  // EVENT LISTENERS

  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
      car.speedX = -5
    }else if(event.key === 'ArrowRight'){
      car.speedX = +5
    }else if(event.key === 'ArrowUp'){
      car.speedY = -5
    }else if(event.key === 'ArrowDown'){
      car.speedY = +5
    }
  })
  document.addEventListener('keyup', function(event){
    if(event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
      car.speedX = 0
    }
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown'){
      car.speedY = 0
    }
  })
};
