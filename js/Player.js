class Player {
  constructor(ctx, size, color) {
    this.ctx = ctx
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
    this.score = 0
    this.img = new Image();
    this.img.src = '/Images/Dancer.gif'
    this.imgP2 = new Image()
    this.imgP2.src = '/Images/Dancer2.png'
  
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
    // this.ctx.fillStyle = this.color
    // this.ctx.fillRect(this.x, this.y, this.size, this.size)
    this.ctx.drawImage(this.img,this.x-10,this.y-14,100,100)



  }

  drawP2 (){
    this.ctx.drawImage(this.imgP2,this.x-10,this.y-14,100,100)
  }
}

// var img_obj = {
//   'source': null,
//   'current': 0,
//   'total_frames': 16,
//   'width': 16,
//   'height': 16
// };

// var img = new Image();
// img.onload = function () { // Triggered when image has finished loading.
//   img_obj.source = img;  // we set the image source for our object.
// }
// img.src = '/Images/Dancer.gif'; // contains an image of size 256x16
//                           // with 16 frames of size 16x16

// function draw_anim(ctx, x, y, iobj) { // ctx is the canvas 2d ctx.
//   if (iobj.source != null)
//       ctx.drawImage(iobj.source, iobj.current * iobj.width, 0,
//                         iobj.width, iobj.height,
//                         x, y, iobj.width, iobj.height);
//   iobj.current = (iobj.current + 1) % iobj.total_frames;
//                  // incrementing the current frame and assuring animation loop
// }

// function on_body_load() { // <body onload='on_body_load()'>...
//   var canvas = document.getElementById('canvasElement');
//                // <canvas id='canvasElement' width='320' height='200'/>
//   var ctx = canvas.getContext("2d");

//   setInterval((function (c, i) {
//               return function () {
//                   draw_anim(c, 10, 10, i);
//               };
//   })(ctx, img_obj), 100);
// }