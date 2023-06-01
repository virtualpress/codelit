for (i = 0; i < document.getElementsByClassName("analysis").length; i++) {
 document.getElementsByClassName("analysis")[i].id = i+1;
 document.getElementsByClassName("analysis")[i].draggable = "true";
}
 
function prepare(analysis) {
 analysis.preventDefault();
}

function drag(analysis) {
 analysis.dataTransfer.setData("text", analysis.target.id);
}

function hold(analysis) {
 analysis.preventDefault();
 var data = analysis.dataTransfer.getData("text");
 analysis.target.appendChild(document.getElementById(data));
}