var c = document.getElementById("game_canvas");
var ctx = c.getContext("2d");


function draw() {
	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
	requestAnimationFrame(draw);
}
draw();
