function drawRoad() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 20, 600);
    context.fillRect(380, 0, 20, 600);
    context.fillStyle = 'grey';
    context.fillRect(20, 0, 10, 600);
    context.fillRect(370, 0, 10, 600);
    context.fillStyle = 'white';
    context.fillRect(30, 0, 10, 600);
    context.fillRect(360, 0, 10, 600);
    context.fillStyle = 'grey';
    context.fillRect(40, 0, 320, 600);
    for (let i = 20; i < 600; i += 50) {
        context.strokeStyle = 'white';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(197, i);
        context.lineTo(197, i + 30);
        context.stroke();
        context.closePath();
    }
}

console.log("I am connected")