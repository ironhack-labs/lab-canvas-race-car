window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  // FUNCTIONS
  function startGame() {
    drawRoad()
    drawCar()
  }
  function drawRoad() {
    ctx.drawImage(loadImages.road, 0, 0, 500, 700)

  }
  function drawCar() {
    ctx.drawImage(loadImages.car, 250, 580, 50, 100)
  }
  const loadImages = []
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
  
};
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')