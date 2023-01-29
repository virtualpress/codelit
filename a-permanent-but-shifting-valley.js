var lit = document.getElementsByClassName("lit");

var n = 0;

function reappearer() {
 r = setInterval(reappear, 8192);
}

function reappear() {
 if (random(4) == 0 && lit[n].style.opacity == 1.0) {
  n = random(lit.length);
  while (lit[n].style.opacity != 1.0) {
   n = random(lit.length);
  }
  transparent(lit[n]);
 } else {
  n = random(lit.length);
  while (lit[n].style.opacity == 1.0) {
   n = random(lit.length);
  }
  opaque(lit[n]);
 }
 if (styles(1.0)) {
  clearInterval(r);
  setTimeout(disappearer, 32768);
 }
}

function disappearer() {
 d = setInterval(disappear, 8192);
}

function disappear() {
 if (random(4) == 0 && lit[n].style.opacity == 0) {
  n = random(lit.length);
  while (lit[n].style.opacity != 0) {
   n = random(lit.length);
  }
  opaque(lit[n]);
 } else {
  n = random(lit.length);
  while (lit[n].style.opacity == 0) {
   n = random(lit.length);
  }
  transparent(lit[n]);
 }
 if (styles(0)) {
  clearInterval(d);
  setTimeout(reappearer, 8192);
 }
}

function styles(styles) {
 var i = 0;
 while (i < lit.length) {
  if (lit[i].style.opacity != styles) {
   return false;
  }
  i++;
 }
 return true;
}

setTimeout(reappearer, 2048);

setTimeout(reappear, 2048);