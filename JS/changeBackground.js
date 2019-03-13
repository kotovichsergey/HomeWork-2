let logo = document.getElementById('add');
logo.onmouseover = function() {rndColor()};

	//создаёт случайный цвет фона
function rndColor() {
	let r = Math.floor(Math.random()*220),
		g = Math.floor(Math.random()*220),
		b = Math.floor(Math.random()*220);
	setColor(r, g, b);	
}

	//устанвливает цвет шрифта и фона
function setColor (r, g, b){
	let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
	logo.style.color = (r > 128 && g > 128 && b > 128) || (r > 200 && g > 200) || (r > 200 && b > 200) || (r > 200 && g > 200)  ? 'black' : 'white';
	logo.style.backgroundColor = rgb;
}

	//менет цвет фона каждую секунду
setInterval(() => {
	let colors = logo.style.backgroundColor.replace(/[^\d,]/g, '').split(',');
	if (colors.length == 1) rndColor();
	else {
		let	r = +colors[0],
			g = +colors[1],
			b = +colors[2];
		if (b+3 < 220) b += 3;
		else if (g+2 < 220) g += 2;
		else if (r+1 < 220) r += 1;
		else { 
			rndColor();
			return;
		}		
		setColor(r, g, b);
	}
}, 1000);
