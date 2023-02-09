var n;

var foreboded = [];

function forebode() {
 foreboded.shift();
 while (foreboded.length < 16) {
  n = random(document.getElementsByClassName('lit').length);
  if (!foreboded.includes(n)) {
   foreboded.push(n);
  }
 }
 if (document.getElementsByClassName('lit')[foreboded[0]].style.opacity != 0) {
  transparent(document.getElementsByClassName('lit')[n]);
 } else {
  opaque(document.getElementsByClassName('lit')[n]);
 }
 setTimeout(forebode, random(128) + 128);
}

setTimeout(forebode, random(128) + 128);