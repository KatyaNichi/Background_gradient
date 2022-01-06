var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let randomButton = document.getElementById("randomColor");
console.log(randomButton);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setLinearView() {
	let text = body.style.background;
	css.textContent = "${body.style.background}";
	console.log(body.style.background);
}
///create random color
function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for(let i =0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];	
	}
	return color;
}

//set background by button
function setFromButton() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor() 
	+ ", " 
	+ getRandomColor()
	+ ")";

	css.textContent = body.style.background + ";";

}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setFromButton);

setLinearView();
setGradient();