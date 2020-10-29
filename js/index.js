window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
    movement();
}

const carX = 225
const carY = 400
const direction = 'right'

function startGame() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const imgRoad = new Image();
  imgRoad.onload = () => { ctx.drawImage(imgRoad, 0, 0, 500, 700)}
  imgRoad.src = "./images/road.png";  

  const imgCar = new Image();
  imgCar.onload = () => { ctx.drawImage(imgCar, 225, 400, 50, 80)}
  imgCar.src = "./images/car.png";  
}

function movement(){
  if(direction === 'right'){
    carX++
    if(carX > 500){
    carX = -50
    } else if(_direction === 'left'){
      carX--
          if(carX < -50){
            carX = 500
          }
        } 

      }
     }

     document.getElementById('top').addEventListener('click', ()=>{
      direction = 'top'
     
    })
  
    document.getElementById('right').addEventListener('click', ()=>{
      direction = 'right'
      
    })
  
    document.getElementById('down').addEventListener('click', (event)=>{
      direction = 'down'
     
    })
  
    document.getElementById('left').addEventListener('click', ()=>{
      direction = 'left'
      
    })

     document.addEventListener('keydown', (event)=>{
      if(event.key === 'ArrowUp'){
        direction = 'top'
      } else if(event.key === 'ArrowRight'){
        direction = 'right'
      } else if(event.key === 'ArrowDown'){
        direction = 'down'
      } else if(event.key === 'ArrowLeft'){
        direction = 'left'
      
      } 
    })}


