var c;

var duration = ["32s", "8s"];

if (touch) {
 duration = [".5s", ".25s"];
}

var opacity = [.1, 1];

function ptsd(n) {
 document.getElementsByClassName("lit")[n].style.transitionDuration = duration[c];
 document.getElementsByClassName("lit")[n].style.opacity = opacity[c];
}

function cycle() {
 if (c != 0) {
  c = 0;
 } else {
  c = 1;
 }
 for (var n = 0; n < document.body.getElementsByClassName("lit").length; n++) {
  setTimeout(ptsd, random(2000), n);
 }
}

cycle();

i = setInterval(cycle, 32000);