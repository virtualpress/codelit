function x(n) {
 var i = 0;
 while (i < document.body.getElementsByClassName("lit").length - 1) {
  transparent(document.body.getElementsByClassName("lit")[i]);
  i++;
 }
 opaque(document.body.getElementsByClassName("lit")[n]);
}

function y(n) {
 opaque(document.body.getElementsByClassName("lit")[n]);
}

function z(n) {
 transparent(document.body.getElementsByClassName("lit")[n]);
}