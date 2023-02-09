var counter = 0;

var statement = "My number one priority in life is ";

var extension = "that my number one priority in life is ";

var priorities = ["myself.", "my family.", "my friends.", "my work.", "my religion.", "my politics.", "my country.", "the planet."];

function extinction() {
 if (counter < priorities.length) {
  document.getElementById("lit").innerHTML = statement + priorities[counter];
  counter++;
 } else {
  document.getElementById("lit").innerHTML = statement + extension + priorities[0];
  statement += extension;
  counter = 0;
 }
}

setInterval(extinction, 2048);