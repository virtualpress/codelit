for (var n = 0; n < document.body.getElementsByClassName("lit").length; n++) {
 document.body.getElementsByClassName("lit")[n].addEventListener("click", lit);
}

function lit() {
 for (var n = 0; n < document.body.getElementsByClassName("lit").length; n++) {
  transparent(document.body.getElementsByClassName("lit")[n]);
 }
 opaque(event.target);
}