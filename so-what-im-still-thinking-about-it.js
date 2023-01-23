window.scrollTo(0, 0);

var height = document.documentElement.scrollHeight * 4;

var i;

var x;

var y;

var centering = document.getElementsByClassName("lit")[47].offsetWidth / 2;

function coordinates(event) {
 x = event.clientX;
 y = event.clientY;
 if (i == undefined) {
  i = setInterval(hovering, 4);
  window.addEventListener("scroll", function() {
   document.getElementById("page").style.minHeight = (height + window.pageYOffset).toString() + "px";
  });
 }
}

function hovering() {
 var n = 0;
 while (n < document.getElementsByClassName("lit").length) {
  var e = document.getElementsByClassName("lit")[n];
  if (e.offsetLeft < x - centering) {
   e.style.left = Number(e.style.left.slice(0,-2)) + random(4) + "px";
  } else if (e.offsetLeft > x - centering) {
   e.style.left = Number(e.style.left.slice(0,-2)) - random(4) + "px";
  } else {
   if (random(32) == 0) {
    e.style.left = Number(e.style.left.slice(0,-2)) + random(8) + 1 + "px";
   } else if (random(32) == 0) {
    e.style.left = Number(e.style.left.slice(0,-2)) - random(8) - 1 + "px";
   }
  }
  if (e.offsetTop < window.pageYOffset - window.innerHeight) {
   if (random(2) == 0) {
    e.style.left = Number(e.style.left.slice(0,-2)) - random(16) + "px";
   } else {
    e.style.left = Number(e.style.left.slice(0,-2)) + random(16) + "px";
   }
   e.style.top = window.pageYOffset - window.innerHeight + "px";
  }
  if (Number(e.style.top.slice(0,-2)) > window.pageYOffset + window.innerHeight) {
   if (random(2) == 0) {
    e.style.left = Number(e.style.left.slice(0,-2)) - random(16) + "px";
   } else {
    e.style.left = Number(e.style.left.slice(0,-2)) + random(16) + "px";
   }
   e.style.top = window.pageYOffset + window.innerHeight + "px";
  }
  if (e.offsetTop < y - 16 + window.pageYOffset) {
   e.style.top = Number(e.style.top.slice(0,-2)) + random(2) + "px";
  } else if (e.offsetTop > y - 16 + window.pageYOffset) {
   e.style.top = Number(e.style.top.slice(0,-2)) - random(2) + "px";
  } else {
   if (random(32) == 0) {
    e.style.top = Number(e.style.top.slice(0,-2)) + random(8) + 1 + "px";
   } else if (random(32) == 0) {
    e.style.top = Number(e.style.top.slice(0,-2)) - random(8) - 1 + "px";
   }
  }
  n++;
 }
}

document.getElementById("page").addEventListener("mousemove", coordinates);