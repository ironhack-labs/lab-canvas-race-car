class Road {
  paint () {
    context.save();

    context.fillStyle = 'green';
    context.fillRect(0, 0, 30, 600);
    context.fillRect(320, 0, 30, 600);

    context.fillStyle = 'white';
    context.fillRect(40, 0, 10, 600);
    context.fillRect(300, 0, 10, 600);

    context.lineWidth = 4;
    context.strokeStyle = 'white';
    /* for (let row = 0; row < i.length; row++) {
      for (let column = 0; column < i.length; column++) {
        context.fillRect(i * 50, 0, 6, 30);
      }  
    }; */

    // google draw dash line
    context.beginPath();
    context.moveTo(175, 600)
    context.lineTo(175, 0)
    context.stroke();
    context.closePath();

    context.save();
  }
}

