document.addEventListener("keypress", e => {
 switch(e.code) {
  case "Quote":
   if (!e.shiftKey) {
    e.preventDefault();
    document.getElementById("lit").innerHTML += "'";
   } else {
    document.getElementById("lit").innerHTML += e.key;
   }
   break;
  case "Slash":
   if (!e.shiftKey) {
    e.preventDefault();
    document.getElementById("lit").innerHTML += "/";
   } else {
    document.getElementById("lit").innerHTML += e.key;
   }
   break;
  case "Enter":
   document.getElementById("lit").innerHTML += "<br>";
   window.scrollTo(0,document.body.scrollHeight);
   break;
  case "Space":
   e.preventDefault();
   document.getElementById("lit").innerHTML += " ";
   break;   
  case "Backspace":
   e.preventDefault();
   break;
  default:
   document.getElementById("lit").innerHTML += e.key;
 }
});