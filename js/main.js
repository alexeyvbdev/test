var c = document.getElementById("field");
var ctx = c.getContext("2d");
var x = 0;
var y = 145;
var h = 5;
var w = 50;

var x_min = 0;
var x_max = 250;

var color = '#6666ff';

function draw(x, y, w, h, color){
	if (typeof color == 'undefined')
	{
		color = "red";
	}
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

function clear(x, y, w, h){
	ctx.clearRect(x, y, w, h);
}

var move_left = document.getElementById('move_left');
var move_up = document.getElementById('move_up');
var move_right = document.getElementById('move_right');
var move_down = document.getElementById('move_down');
draw(x, y, w, h, color);

document.onkeydown = function(e){
	switch (e.keyCode) {
		case 37:
			clear(x, y, w, h);
			x-=h;
			if (x < x_min)
			{
				x = x_min;
			}
			draw(x, y, w, h, color);
			break;
		case 39:
			clear(x, y, w, h);
			x+=h;
			if (x > x_max)
			{
				x = x_max;
			}
			draw(x, y, w, h, color);
			break;
		/*case 40:
			clear(x, y, w, h);
			y+=h;
			console.log(y);
			draw(x, y, w, h, color);
			break;
		case 38:
			clear(x, y, w, h);
			y-=h;
			draw(x, y, w, h, color);
			break;*/
	}
};