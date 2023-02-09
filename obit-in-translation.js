var lines = [0, 1, 7, 8, 12, 17];

var line = -1;

function obit() {
 line++;
 if (lines.includes(line)) {
  var i = lines.indexOf(line);
  transparent(document.getElementsByClassName("one")[i]);
  setTimeout(opaque, 512, document.getElementsByClassName("zero")[i]);
  setTimeout(transparent, 512 + 4096, document.getElementsByClassName("zero")[i]);
  setTimeout(opaque, 512 + 4096 + 512, document.getElementsByClassName("one")[i]);
  setTimeout(obit, 512 + 4096 + 512 + 512);
 } else if (line == 18) {
  line = -1;
  setTimeout(translation, 512);
 } else {
  setTimeout(obit, 4096);
 }
}

function translation() {
 var n = 0;
 while (n < lines.length) {
  transparent(document.getElementsByClassName("one")[n]);
  setTimeout(opaque, 512, document.getElementsByClassName("zero")[n]);
  setTimeout(transparent, 512 + 16384, document.getElementsByClassName("zero")[n]);
  setTimeout(opaque, 512 + 16384 + 512, document.getElementsByClassName("one")[n]);
  n++;
 }
 setTimeout(obit, 512 + 16384 + 512 + 512);
}

setTimeout(obit, 4096);