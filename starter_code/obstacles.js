function Obstacle() {
  this.x = Math.random() * (130) - 130;
  this.y = -600;
  this.width = Math.random()* 150 + 50;

  this.draw = (road) => {
    this.y += 5;
    road.fillStyle = 'red';
    road.fillRect(this.x, this.y, this.width, 30);
  };
}