var errors = ["PAGE NOT FOUND", "ReferenceError", "SyntaxError", "TypeError", "Bad command or file name", "not a valid identifier", "No such file or directory", "Not a typewriter", "NO CARRIER", "SEGMENTATION FAULT", "Kernel panic", "Abort, Retry, Fail?", "Guru Meditation", "Guru Mediation", "lp0 on fire", "PC LOAD LETTER"];

var characters = [",", ".", ":", ";", "?", "!", "(", ")", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function corrupt() {
 var i = setInterval(error, 32);
 setTimeout(clearInterval, 8192, i);
 setTimeout(reboot, 8192);
}

function error() {
 var text =  document.getElementById("error").innerHTML;
 var x = random(text.length);
 if (random(8) != 0) {
  document.getElementById("error").innerHTML = text.slice(0, x) + characters[random(characters.length)] + text.slice(x + 1, text.length);
 } else {
  document.getElementById("error").innerHTML = text.slice(0, x) + " " + text.slice(x + 1, text.length);
 }
}

function reboot() {
 document.getElementById("error").innerHTML = "";
 setTimeout(recover, 2048 + random(2048));
}

function recover() {
 document.getElementById("error").innerHTML = errors[random(errors.length)];
 setTimeout(corrupt, 2048 + random(4096));
}

setTimeout(corrupt, 4096);