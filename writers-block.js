document.addEventListener("keypress", function(event) {
 switch(event.code) {
  case "Quote":
   if (!event.shiftKey) {
    event.preventDefault();
    document.getElementById("lit").innerHTML += "'";
   } else {
    document.getElementById("lit").innerHTML += event.key;
   }
   break;
  case "Slash":
   if (!event.shiftKey) {
    event.preventDefault();
    document.getElementById("lit").innerHTML += "/";
   } else {
    document.getElementById("lit").innerHTML += event.key;
   }
   break;
  case "Enter":
   document.getElementById("lit").innerHTML += "<br>";
   break;
  case "Space":
   event.preventDefault();
   document.getElementById("page").innerHTML += " ";
   break;   
  case "Backspace":
   event.preventDefault();
   break;
  default:
   document.getElementById("lit").innerHTML += event.key;
 }
});