var x = "My number one priority in life is ";

var y = "that my number one priority in life is ";

var _ = ["myself.", "my family.", "my friends.", "my work.", "my religion.", "my politics.", "my country.", "the planet."];

var $ = 0;

setInterval(() => {
 if ($ < _.length) {
  document.querySelector("#lit").innerHTML = x + _[$++];
 } else {
  document.querySelector("#lit").innerHTML = x + y + _[0];
  x += y;
  $ = 0;
 }
}, 2048);