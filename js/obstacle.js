class Obstacle {
  constructor(x=0,y=0,width=50,height=35,count=10) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.count = count
  }

  setRandomValues() {
    this.x = Math.floor(Math.random() * (450))
    this.width = Math.floor(Math.random() * (430 - 50)) + 50
  }
}