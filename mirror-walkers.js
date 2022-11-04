var n = random(35);

var l;

var r;

function mirror() {
 var o = n;
 while (n == o) {
  n = random(35);
 }
 l = document.getElementsByClassName("zero")[n].innerHTML;
 r = document.getElementsByClassName("one")[n].innerHTML;
 transparent(document.getElementsByClassName("zero")[n]);
 transparent(document.getElementsByClassName("one")[n]);
 setTimeout(reflect, 2048, n);
}

function reflect(n) {
 document.getElementsByClassName("zero")[n].innerHTML = r;
 document.getElementsByClassName("one")[n].innerHTML = l;
 opaque(document.getElementsByClassName("zero")[n]);
 opaque(document.getElementsByClassName("one")[n]);
 setTimeout(mirror, 8192);
}

setTimeout(mirror, 16384);