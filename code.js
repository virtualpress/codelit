console.log("hello world");

function random(number) {
 return Math.floor((Math.random() * number));
}

var hue = random(359);

function rainbow() {
 color = "hsl(" + hue + ", 100%, 90%)";
 document.querySelectorAll("a").forEach((q) => q.style.color = color);
 document.querySelectorAll(".a").forEach((q) => q.style.backgroundColor = color);
 document.querySelectorAll("input").forEach((q) => q.style.color = color);
 document.body.style.color = color;
 if (hue < 359) {
  hue++;
 } else {
  hue = 0;
 }
}

rainbow = setInterval(rainbow, 32);

function visible(element) {
 element.style.visibility = "visible";
}

function hidden(element) {
 element.style.visibility = "hidden";
}

function opaque(element) {
 element.style.opacity = 1.0;
}

function transparent(element) {
 element.style.opacity = 0;
}

function block(element) {
 element.style.display = "block";
}

function inline(element) {
 element.style.display = "inline";
}

function none(element) {
 element.style.display = "none";
}

var cursor;

function blink() {
 if (cursor) {
  hidden(document.getElementById("cursor"));
  cursor = false;
 } else {
  visible(document.getElementById("cursor"));
  cursor = true;
 }
}

blink = setInterval(blink, 512);

var touch = ("ontouchstart" in document.documentElement);

document.addEventListener("keydown", function(event) {
 if (event.code == "ArrowLeft") {
   history.back();
 }
 if (event.code == "ArrowRight") {
   history.forward();
 }
});