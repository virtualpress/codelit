var x = 0;

var y = 0;

var z = false;

function intros() {
 if (x < document.getElementsByClassName("intro").length) {
  document.getElementsByClassName("intro")[x].style.opacity = 1.0;
  x++;
  setTimeout(intros, 2000);
 } else {
  setTimeout(story, 4000);
 }
}

function outros() {
 if (y < document.getElementsByClassName("outro").length) {
  document.getElementsByClassName("outro")[y].style.opacity = 1.0;
  y++;
  setTimeout(outros, 2000);
 } else {
  setTimeout(story, 4000);
 }
}

function story() {
 document.getElementById("story").style.opacity = 1.0;
 z = true;
}

var i = false;

var o = false;

function intro() {
 if (i == false) {
  i = true;
  intros();
 }
}

function outro() {
 if (o == false) {
  o = true;
  outros();
 }
}

var text = "";

var supplements = ["Our pre-teens were all headed to college.", "Rumors that Muller's stepmother invested in NextToLast™ have been debunked, but there's more than one credible photo of the girl in early versions of the line, slouched in black lace on intersections frequented by highschoolers.", "NextToLast™ and their imitators discontinued their coffin lines and grandparents removed exhumation and coffin-endowments from their wills.", "Now fondly known as WiSfA, after which the WiSfA Act is named.", "And even went to jail for it?", "They were on their way to being dead.", "Given the expenses around their new pre-teen dormitories and toddler-friendly cafeterias.", "\"A slack hand causes poverty, but the hand of the diligent makes rich.\" - The Bible<br>\"Every morning we are born again. What we do today is what matters the most.\" - The Buddha<br>\"So where are you going?\" - The Quran", "And only mildly envious."];

function comment(n) {
 if (z == true) {
  hidden(document.getElementById("lit"));
  text = document.getElementsByClassName("a")[n].innerHTML;
  document.getElementsByClassName("a")[n].innerHTML = supplements[n];
  visible(document.getElementsByClassName("a")[n]);
 }
}

function uncomment(n) {
 if (z == true) {
  hidden(document.getElementsByClassName("a")[n]);
  document.getElementsByClassName("a")[n].innerHTML = text;
  document.getElementsByClassName("a")[n].style.visibility = "inherit";
  visible(document.getElementById("lit"));
 }
}

function supplement(n) {
 if (z == true) {
  if (document.getElementsByClassName("a")[n].innerHTML != supplements[n]) {
   comment(n);
  } else {
   uncomment(n);
  }
 }
}