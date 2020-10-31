let carX = 225
let direction = 'right'
const createRoad = () => {
const road = new Image()
road.src = './images/road.png'//otra vez la imagen sino, no funciona.
road.onload = () => {
    ctx.drawImage(road, 0, 0, 500, 700)
}
}
const createCar = () => {
let car = new Image()
car.src = './images/car.png'
car.onload = () => {
    ctx.drawImage(car, carX, 580, 50, 100)
}
}
//Movimiento derecha e izquierda:
const moveCar = () => {
    if(direction==='right' && carX<400){
    createRoad()
    carX+=10
    createCar()
    } else if (direction === 'left' && carX>50){
    createRoad()
    carX-=10
    createCar()
    }
    }
    document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
        direction = 'left'
        moveCar()
    } else if(event.key === 'ArrowRight'){
        direction='right'
        moveCar()
    } 
    });