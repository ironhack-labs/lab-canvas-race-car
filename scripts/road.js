

class Road {
    constructor() { }
drawRoad() {        
context.fillStyle= 'green'
context.fillRect(0, 0, 330, 550);

context.fillStyle = 'grey'
context.fillRect(30, 0, 270, 550)

context.strokeStyle = 'white'
context.lineWidth = 9;
context.beginPath();
context.moveTo(45,0);
context.lineTo(45, 550)
context.stroke()
context.closePath()

context.beginPath();
context.moveTo(285, 0);
context.lineTo(285, 550)
context.stroke()
context.closePath()

context.strokeStyle = 'white'
context.lineWidth = 4;
context.beginPath();
context.setLineDash([17, 15])
context.moveTo(170, 0);
context.lineTo(170, 550)
context.stroke()
context.closePath() 
}

}

