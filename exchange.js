window.addEventListener("scroll", function() {
 var i = (document.documentElement.scrollHeight - window.innerHeight) / (document.getElementsByClassName("lit").length + 1);
 var s = window.pageYOffset;
 var n = 0;
 while (n < document.getElementsByClassName("lit").length) {
  if (s > i * (n + 1)) {
   transparent(document.getElementsByClassName("lit")[n]);
  } else {
   opaque(document.getElementsByClassName("lit")[n]);
  }
  n++;
 }
});