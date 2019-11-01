class Grid { 
    constructor() {} 

drawGrid() { 
context.fillStyle = "green";
context.fillRect(0, 0, 35, 600);
context.fillRect(370, 0, 35, 600);

context.fillStyle = "white";
context.fillRect(45, 0, 10, 600);
context.fillRect(350, 0, 10, 600);

context.fillStyle = "white";
for(let i = 0; i < 600; i++) { 
  context.fillRect(200, 1 * i, 10, 20);} 
}
}