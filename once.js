var n = 0;

var t = 512;

function once() {
 transparent(document.getElementsByClassName("lit")[n]);
 n++;
 if (n != document.getElementsByClassName("lit").length) {
  setTimeout(once, t);
  t -= 2;
 }
}

setTimeout(once, 1024);