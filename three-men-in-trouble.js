function connect(n) {
 visible(document.getElementsByClassName("forest")[n]);
 var t;
 if (n < 16) {
  t = 4096;
 } else if (n < 32) {
  t = 2048;
 } else if (n < 64) {
  t = 1024;
 } else {
  t = 512;
 }
 setTimeout(disconnect, 512 + random(t), n);
}

function disconnect(n) {
 hidden(document.getElementsByClassName("forest")[n]);
 var t;
 if (n < 16) {
  t = 512;
 } else if (n < 32) {
  t = 1024;
 } else if (n < 64) {
  t = 2048;
 } else {
  t = 4096;
 }
 setTimeout(connect, 512 + random(t), n)
}

function service() {
 var n = 0;
 while (n < document.getElementsByClassName("forest").length) {
  disconnect(n);
  n++;
 }
}

service();

function healer() {
 hidden(document.getElementById("bone"));
}

function breaker() {
 visible(document.getElementById("bone"));
 setTimeout(healer, 4096);
}

setInterval(breaker, 32768 + random(16384));

var x = 0;

var y = document.getElementsByClassName("river").length - 4;

function current() {
 visible(document.getElementsByClassName("river")[x]);
 hidden(document.getElementsByClassName("river")[y]);
 x++;
 if (x == document.getElementsByClassName("river").length) {
  x = 0;
 }
 y++;
 if (y == document.getElementsByClassName("river").length) {
  y = 0;
 }
}

setInterval(current, 256)