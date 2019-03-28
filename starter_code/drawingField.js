w = window.innerWidth/2;
h = window.innerHeight;
w2 = w / 2;
h2 = h / 2;


function drawRoad(ctx) {
    // start the path
    ctx.beginPath();
    // starting position is x=50, y=50
    // draw the line that has final coordinates x=250, y=50
    ctx.fillStyle = `rgba(14, 129, 20, 1)`;
    ctx.fillRect(50, 0, w-100, h);
    // .stroke() executes the drawing
    ctx.stroke();
    ctx.beginPath();
    // starting position is x=50, y=50
    // draw the line that has final coordinates x=250, y=50
    ctx.fillStyle = `rgba(128, 128, 128, 1)`;
    ctx.fillRect(90, 0, w-180, h);
    // .stroke() executes the drawing
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(105,0)
    ctx.lineTo(105,h)
    ctx.stroke()
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(w-105,0)
    ctx.lineTo(w-105,h)
    ctx.stroke()


    // start a new line from these coordinates: x=250, y=50
    // ctx.moveTo(250, 50);
    // draw the line that has final coordinates x=250, y=100
    // ctx.lineTo(250, 100);
    // .stroke() executes the drawing
    // ctx.stroke();
}
function drawMiddleLine(ctx,offset) {
    ctx.beginPath();
    ctx.setLineDash([50,50]);
    ctx.lineDashOffset = -offset;
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(w2,0)
    ctx.lineTo(w2,h)
    ctx.stroke()
}

// function march(ctx,offset) {
//     offset++;
//     if (offset > 16) {
//       offset = 0;
//     }
//     drawMiddleLine(ctx,offset);
//     setTimeout(march, 20);
//   }
  

function drawBugga(ctx){
    // debugger
    bugga = new Image();   // Create new <img> element
    bugga.src = './images/car.png'; // Set source path
    bugga.onload = ()=>{
        ctx.drawImage(bugga, w2-25,h-200,50,100);
    }
}