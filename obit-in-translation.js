var cycle = 0;

function obit() {
 if (cycle == 0) {
  for (var n = 0; n < document.getElementsByClassName("hidden").length; n++) {
   setTimeout(transparent, 512 * (n + 1), document.getElementsByClassName("one")[n]);
   setTimeout(opaque, 512 * (n + 2), document.getElementsByClassName("zero")[n]);
  }
  cycle++;
 } else {
  for (var n = 0; n < document.getElementsByClassName("hidden").length; n++) {
   setTimeout(transparent, 512 * (n + 1), document.getElementsByClassName("zero")[n]);
   setTimeout(opaque, 512 * (n + 2), document.getElementsByClassName("one")[n]);
  }
  cycle--;
 }
 setTimeout(obit, 8192 + random(16384));
}

setTimeout(obit, 4096);

if (touch) {
 for (var n = 0; n < document.body.getElementsByClassName("hidden").length; n++) {
  document.getElementsByClassName("zero")[n].style.transitionDuration = ".512s";
  document.getElementsByClassName("one")[n].style.transitionDuration = ".512s";
 }
}