class Obsticle {
  constructor(ctx){
    this.ctx = ctx
    this.x = Math.floor(Math.random()*canvas.height - p1.size)
    this.y = 0
    this.width = Math.floor(Math.random()*canvas.height - p1.size)
    this.height = Math.floor(Math.random()*canvas.height - p1.size)
  }

  randomHeight(){
    
    height = Math.floor(Math.random()*canvas.height - p1.size)
    if (height < p1.size ){
      this.randomHeight()
    }
   return this.height = height;

  }
  randomWidth(){
    
    width = Math.floor(Math.random()*canvas.width - p1.size)
    if (this.width < p1.size ){
      this.randomHeight()
    }
   return this.height = height;

  }

  drawObs(){
    this.ctx.beginPath();
    this.ctx.moveTo(Math.floor(Math.random()*canvas.height - p1.size),0);
    this.ctx.lineTo(Math.floor(Math.random()*canvas.height - p1.size),this.height)
    this.ctx.stroke()


  }
}



// Math.floor(Math.random()*width/2)
// M