names = (n = random(100)) => {
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

namer = (header = names()) => {
 types = setInterval(() => {
  if (header != "") {
   document.getElementById("name").innerHTML += header.slice(0, 1);
   header = header.slice(1);
  } else {
   clearInterval(types);
   setTimeout(() => {
    untypes = setInterval(() => {
     if (document.getElementById("name").innerHTML != "") {
      document.getElementById("name").innerHTML = document.getElementById("name").innerHTML.slice(0, -1);
     } else {
      clearInterval(untypes);
      setTimeout(namer, 4096);
     }
    }, 256);
   }, 8192);
  }
 }, 256);
}

setTimeout(namer, 4096);

erase = () => {
 none(document.documentElement);
 document.getElementById("egg").innerHTML = "";
 document.title = "\u00A0";
}

read = () => {
 window.location = document.getElementsByClassName("title")[random(document.getElementsByClassName("title").length)].href;
}

var boolean;

var egg = "";

document.addEventListener("keypress", event => {
 egg += event.key.toLowerCase();
 egg = egg.replace(/ /, "");
 if (egg.slice(-4) == "2600") {
  opaque(document.body);
  none(document.getElementById("egg"));
  boolean = !boolean;
  boolean ? document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="2600"><source src="/egg/2600-0.mp3" type="audio/mpeg"></audio>' : document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="2600"><source src="/egg/2600-1.mp3" type="audio/mpeg"></audio>';
  document.getElementById("2600").play();
  document.getElementById("2600").volume = 0.2;
 }
 if (egg.slice(-4) == "3301") {
  opaque(document.body);
  none(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="3301"><source src="/egg/3301.mp3" type="audio/mpeg"></audio>';
  document.getElementById("3301").play();
  document.getElementById("3301").volume = 0.2;
 }
 if (egg.slice(-4) == "1337") {
  opaque(document.body);
  none(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<audio controls preload="auto" id="1337"><source src="/egg/1337.mp3" type="audio/mpeg"></audio>';
  document.getElementById("1337").play();
  document.getElementById("1337").volume = 0.2;
 }
 if (egg.slice(-5) == "0x539") {
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<img class="large" src="/egg/0x539.gif">';
 }
 if (egg.slice(-6) == "0x7a69") {
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("egg").innerHTML = '<img class="small" src="/egg/0x7a69.gif">';
 }
 if (egg.slice(-5) == "xyzzy") {
  document.getElementById("egg").innerHTML = '<video preload="auto" id="xyzzy"><source src="/egg/xyzzy.mp4" type="video/mp4"></video>';
  document.body.style.opacity = "0.9";
  block(document.getElementById("egg"));
  document.getElementById("xyzzy").play();
  document.getElementById("xyzzy").volume = 0.2;
 }
 if (egg.length > 64) {
  egg = egg.slice(-8);
 }
});