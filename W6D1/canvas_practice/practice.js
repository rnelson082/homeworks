document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas"); //make sure the font is correct!
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(2,20,0)";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath()
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke()

  ctx.fillStyle = "rgb(200,1,1)"
  ctx.fill();

    function draw() {
    var canvas = document.getElementById('mycanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }

  draw()
});
