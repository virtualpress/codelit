var x = 1;

var y = 0;

function criminality() {
 if (y == document.getElementsByClassName("content")[x].children.length) {
  for (var i = 0; i < document.getElementsByClassName("content")[x].children.length; i++) {
   transparent(document.getElementsByClassName("content")[x].children[i]);
  }
  x++;
  if (x == document.getElementsByClassName("content").length) {
   x = 1;
  }
  y = 0;
 }
 opaque(document.getElementsByClassName("content")[x].children[y]);
 y++;
}

setInterval(criminality, 4096);