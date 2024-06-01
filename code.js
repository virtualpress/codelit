console.log("hello world");

random = number => {
 return ~~(Math.random() * number);
}

(rainbow = () => {
 color = "hsl(" + hue + ", 100%, 90%)";
 document.querySelectorAll("a").forEach(element => element.style.color = color);
 document.querySelectorAll(".a").forEach(element => element.style.backgroundColor = color);
 document.querySelectorAll("input").forEach(element => element.style.color = color);
 document.body.style.color = color;
 hue < 359 ? hue++ : hue = 0;
})(hue = random(359), setInterval(rainbow, 32));

visible = element => {
 element.style.visibility = "visible";
}

hidden = element => {
 element.style.visibility = "hidden";
}

opaque = element => {
 element.style.opacity = 1.0;
}

transparent = element => {
 element.style.opacity = 0;
}

block = element => {
 element.style.display = "block";
}

inline = element => {
 element.style.display = "inline";
}

none = element => {
 element.style.display = "none";
}

var cursor;

blink = setInterval(() => {
 cursor ? hidden(document.getElementById("cursor")) : visible(document.getElementById("cursor"));
 cursor = !cursor;
}, 512);

var touch = ("ontouchstart" in document.documentElement);

document.addEventListener("keydown", event => {
 if (event.code == "ArrowLeft") {
  history.back();
 }
 if (event.code == "ArrowRight") {
  history.forward();
 }
});