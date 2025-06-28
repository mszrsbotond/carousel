const container = document.querySelector(".container");

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
console.log(dot1);
let currentX = 0;

colorDots(currentX);

function colorDots(x) {
	if (x == 0) {
		dot1.style["background-color"] = "rgb(0, 98, 101)";
		dot2.style["background-color"] = "#bbb";
		dot3.style["background-color"] = "#bbb";
	} else if (x == -66.66) {
		dot2.style["background-color"] = "rgb(0, 98, 101)";
		dot1.style["background-color"] = "#bbb";
		dot3.style["background-color"] = "#bbb";
	} else {
		dot3.style["background-color"] = "rgb(0, 98, 101)";
		dot1.style["background-color"] = "#bbb";
		dot2.style["background-color"] = "#bbb";
	}
}

function nextPic() {
	currentX += 33.33;
	if (currentX > 0) {
		currentX = -66.66;
	}
	colorDots(currentX);
	container.style["transform"] = `translateX(${currentX}%)`;
}

function previousPic() {
	currentX -= 33.33;
	if (currentX < -99) {
		currentX = 0;
	}
	colorDots(currentX);
	container.style["transform"] = `translateX(${currentX}%)`;
}

previous.addEventListener("click", () => {
	previousPic();
});

next.addEventListener("click", () => {
	nextPic();
});

var intervalID = window.setInterval(nextPic, 4000);
