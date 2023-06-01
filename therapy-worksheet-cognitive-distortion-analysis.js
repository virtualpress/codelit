for (i = 0; i < document.getElementsByClassName("analysis").length; i++) {
 document.getElementsByClassName("analysis")[i].id = i;
 document.getElementsByClassName("analysis")[i].draggable = "true";
}
 
function prepare(ev) {
 ev.preventDefault();
}

function drag(ev) {
 ev.dataTransfer.setData("text", ev.target.id);
}

function hold(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}