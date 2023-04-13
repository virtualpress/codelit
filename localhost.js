function namer() {
 var n = random(100);
 if (n < 64) {
  return "code lit";
 } else if (n < 80) {
  return "code literary";
 } else if (n < 82) {
  return "code literature";
 } else if (n < 84) {
  return "code literati";
 } else if (n < 86) {
  return "code litterateurs";
 } else if (n < 90) {
  return "hack lit";
 } else if (n == 90) {
  return "hacker lit";
 } else if (n == 91) {
  return "hacked lit";
 } else if (n == 92) {
  return "coder lit";
 } else if (n == 93) {
  return "coded lit";
 } else if (n == 94) {
  return "phreak lit";
 } else if (n == 95) {
  return "superuser lit";
 } else if (n == 96) {
  return "cybernaut lit";
 } else if (n == 97) {
  return "silicon codex";
 } else if (n == 98) {
  return "code leet";
 } else {
  return "c0d3 1i7";
 }
}

function type() {
 var header = namer();
 function typer() {
  if (header == "") {
   setTimeout(untype, 8192);
   clearInterval(typer);
  } else {
   document.getElementById("header").innerHTML += header.slice(0, 1);
   header = header.slice(1);
  }
 }
 typer = setInterval(typer, 256);
}

function untype() {
 function untyper() {
  if (document.getElementById("header").innerHTML == "") {
   setTimeout(type, 4096);
   clearInterval(untyper);
  } else {
   document.getElementById("header").innerHTML = document.getElementById("header").innerHTML.slice(0, -1);
  }
 }
 untyper = setInterval(untyper, 256);
}

setTimeout(type, 4096);

function footer(n) {
 if (n < 64) {
  document.getElementById("footer").innerHTML = '<a href="about">ABOUT</a>';
 } else if (n < 80) {
  document.getElementById("footer").innerHTML = '<a onclick="erase();">DELETE WEBSITE</a>';
 } else if (n < 84) {
  document.getElementById("footer").innerHTML = '<a onclick="read();">READ SOMETHING RANDOM</a>';
 } else if (n < 86) {
  document.getElementById("footer").innerHTML = '<a href="mailto:codelit@codelit.com">CONTACT</a>';
 } else if (n < 88) {
  document.getElementById("footer").innerHTML = '<a href="mailto:codelit@codelit.com">SUBMIT</a>';
 } else if (n < 90) {
  document.getElementById("footer").innerHTML = '<a href="https://defcon.org" target="_blank">GO TO DEF CON</a>';
 } else if (n == 90) {
  document.getElementById("footer").innerHTML = '<a href="https://supporters.eff.org/donate/join-eff-4" target="_blank">DONATE TO THE ELECTRONIC FRONTIER FOUNDATION</a>';
 } else if (n == 91) {
  document.getElementById("footer").innerHTML = '<a href="https://www.ddosecrets.com/wiki/Contribute" target="_blank">DONATE TO DDOSECRETS</a>';
 } else if (n == 92) {
  document.getElementById("footer").innerHTML = '<a href="https://shop.wikileaks.org/donate" target="_blank">DONATE TO WIKILEAKS</a>';
 } else if (n == 93) {
  document.getElementById("footer").innerHTML = '<a href="https://www.ddosecrets.com/wiki/Contact" target="_blank">SEND A CLASSIFIED DOC TO DDOSECRETS</a>';
 } else if (n == 94) {
  document.getElementById("footer").innerHTML = '<a href="https://wikileaks.com/#submit" target="_blank">SEND A CLASSIFIED DOC TO WIKILEAKS</a>';
 } else if (n == 95) {
  document.getElementById("footer").innerHTML = '<a href="mailto:potus@whitehouse.gov">EMAIL THE PRESIDENT</a>';
 } else if (n == 96) {
  document.getElementById("footer").innerHTML = '<a href="http://en.letters.kremlin.ru/letters/send" target="_blank">FILE A LETTER OF COMPLAINT WITH THE KREMLIN</a>';
 } else if (n == 97) {
  document.getElementById("footer").innerHTML = '<a href="mailto:timbl@w3.org">SEND FAN MAIL TO THE CREATOR OF THE WORLD WIDE WEB</a>';
 } else if (n == 98) {
  document.getElementById("footer").innerHTML = '<a href="https://github.com/virtualpress/codelit" target="_blank">VIEW SOURCE CODE</a>';
 } else {
  document.getElementById("footer").innerHTML = '<a href="https://en.wikipedia.org/wiki/Special:Random">READ SOMETHING RANDOM ON WIKIPEDIA INSTEAD</a>';
 }
}

footer(random(100));

function erase() {
 clearInterval(rainbow);
 none(document.getElementById("page"));
 document.getElementById("egg").innerHTML = "";
 opaque(document.body);
 document.body.style.background = "#ffffff";
 document.title = "\u00A0";
}

function read() {
 var selection = document.getElementsByClassName("title")[random(document.getElementsByClassName("title").length)].innerHTML.toLowerCase();
 var url = "";
 var n = 0;
 while (n < selection.length) {
  if (selection[n] == " " && selection[n + 1] == "(") {
   n = selection.length;
  } else if (selection[n] == " ") {
   url += "-";
  } else if (selection[n] != "," && selection[n] != "." && selection[n] != ":" && selection[n] != ";" && selection[n] != "!" && selection[n] != "?" && selection[n] != "'") {
   url += selection[n];
  }
  n++;
 }
 window.location = url;
}

var egg = "";

var count = 0;

document.addEventListener("keypress", function(event) {
 if (event.code != "Space") {
  egg += event.key.toLowerCase();
 } else {
  event.preventDefault();
 }
 if (egg.slice(-4) == "2600") {
  opaque(document.body);
  none(document.getElementById("egg"));
  if (count == 0) {
   document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="2600"><source src="egg/2600-1.mp3" type="audio/mpeg"></audio>';
   count++;
  } else {
   document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="2600"><source src="egg/2600-2.mp3" type="audio/mpeg"></audio>';
   count--;
  }
  document.getElementById("2600").play();
  document.getElementById("2600").volume = 0.2;
 }
 if (egg.slice(-4) == "3301") {
  opaque(document.body);
  none(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="3301"><source src="egg/3301.mp3" type="audio/mpeg"></audio>';
  document.getElementById("3301").play();
  document.getElementById("3301").volume = 0.4;
 }
 if (egg.slice(-7) == "deadcow") {
  opaque(document.body);
  none(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="deadcow"><source src="egg/deadcow.mp3" type="audio/mpeg"></audio>';
  document.getElementById("deadcow").play();
  document.getElementById("deadcow").volume = 0.4;
 }
 if (egg.slice(-14) == "enterthematrix") {
  opaque(document.body);
  none(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="enterthematrix"><source src="egg/enterthematrix.mp3" type="audio/mpeg"></audio>';
  document.getElementById("enterthematrix").play();
  document.getElementById("enterthematrix").volume = 0.4;
 }
 if (egg.slice(-11) == "wearelegion") {
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<img class="large" src="egg/wearelegion.gif">';
 }
 if (egg.slice(-24) == "allyourbasearebelongtous") {
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<img class="small" src="egg/allyourbasearebelongtous.gif">';
 }
 if (egg.slice(-5) == "xyzzy") {
  document.getElementById("egg").innerHTML = '<video preload="auto" height="140%" id="xyzzy"><source src="egg/xyzzy.mp4" type="video/mp4"></video>';
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("xyzzy").play();
  document.getElementById("xyzzy").volume = 0.2;
 }
 if (egg.length > 64) {
  egg = egg.slice(-32);
 }
});