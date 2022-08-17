let startTime = new Date().getTime();

function getRandomColor() {
	return Math.floor(Math.random() * 255);
}

// эта функция спижжена, потому что я не понял как адаптировать свою под треугольник
function getRandomColorSpizjeniy() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let makeFigureVisible = function() {
	let shape = document.getElementById("figure");
	let top = Math.random() * 400;
	let left = Math.random() * 700;
	let width = Math.random() * 200 + 50;
	let height = Math.random() * 200 + 50;
	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.width = width + "px";
	shape.style.height = height + "px";

	let roll = Math.random(); 
											// ВОТ ТУТ ЕСЛИ ПО-ЧЕЛОВЕЧЕСКИ, ТО НАДО ДЕЛАТЬ SWITCH(CASE)
	if(roll < 0.3) {
		shape.style.borderRadius = "50%";
		shape.style.backgroundColor = getRandomColorSpizjeniy();
		shape.style.borderBottom = "0";
	} else if(roll >= 0.3 && roll < 0.7) {
		shape.style.borderRadius = "0";
		shape.style.backgroundColor = getRandomColorSpizjeniy();
		shape.style.borderBottom = "0";
	} else if(roll >= 0.7) {
		shape.style.borderRadius = "0";
		shape.style.width = "0";
		shape.style.borderLeft = "50px solid transparent";
		shape.style.borderRight = "50px solid transparent";
		shape.style.borderBottom = "100px solid" + getRandomColorSpizjeniy();
		shape.style.backgroundColor = "transparent";
	}

	shape.style.display = "block";
	startTime = new Date().getTime();
}

setTimeout(makeFigureVisible, Math.random() * 10);


document.getElementById("figure").onclick = function() {
	let shape = document.getElementById("figure");
	
	shape.style.display = "none";
	
	let finishTime = new Date().getTime();
	let reactionTime = (finishTime - startTime) / 1000;
	document.getElementById("reactionTime").innerHTML = reactionTime + " сек";
	setTimeout(makeFigureVisible, Math.random() * 1500);
}
