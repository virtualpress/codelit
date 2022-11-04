function reset() {
 var r = 0;
 while (r < document.getElementsByClassName("third").length) {
  hidden(document.getElementsByClassName("first")[r]);
  visible(document.getElementsByClassName("third")[r]);
  r++;
 }
}

window.addEventListener("scroll", function() {
 var i = (document.documentElement.scrollHeight - window.innerHeight) / (document.getElementsByClassName("third").length + 1);
 var s = window.pageYOffset;
 var n = 0;
 while (n < document.getElementsByClassName("third").length) {
  if (s > i * (n + 1) && s < i * (n + 2)) {
   reset();
   hidden(document.getElementsByClassName("third")[n]);
   visible(document.getElementsByClassName("first")[n]);
  }
  n++;
 }
 if (s == 0) {
  reset();
 }
 if (s > document.documentElement.scrollHeight - window.innerHeight - 1) {
  reset();
 }
});