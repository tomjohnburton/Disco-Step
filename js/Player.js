class Player {
  constructor(ctx, size, color) {
    this.ctx = ctx
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
    this.score = 0
  }
  move(direction) {
    var xMin = -this.size;
    var xMax = this.ctx.canvas.width;
    var yMin = -this.size;
    var yMax = this.ctx.canvas.height;

    switch (direction) {
      case "up":
        this.y -= this.size 
        if (this.y == yMin){
          this.y = yMax -this.size;
        } 
        break;
      case "right":
        this.x += this.size ;
        if (this.x == xMax){
          this.x = xMin + this.size
        }
        break;
      case "down":
        this.y += this.size 
        if (this.y == yMax){
          this.y = yMin + this.size
        }
        break;
      case "left":
        this.x -= this.size 
        if (this.x == xMin){
          this.x = xMax - this.size
        }
        break;
    }
  }
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }
}