var wordCounter = -1;
var cycleCounter = 0;
var metaCycleCounter = 0;
var arbitraryCycleCounter = 0;
var sentence = "I just want every sentence I write to feel like it has existed since the beginning of time and like I discovered it by digging a hole in the desert in a remote location described to me by a neon raven that I met while high on DMT. Is that too much to ask?";
var wordArray = sentence.split(' ');
var wordArrayLength = wordArray.length;
document.addEventListener("keypress", function(event) {
 switch(event.code) {
  case "Quote":
   if (!event.shiftKey) {
    event.preventDefault();
   }
   break;
  case "Slash":
   if (!event.shiftKey) {
    event.preventDefault();
   }
   break;
  case "Space":
   event.preventDefault();
   break;
  default:
   break;
 }
 wordCounter++;
 if (wordCounter === wordArrayLength) { 
  wordCounter = 0;
  cycleCounter++;
  if (cycleCounter === 1) {
   wordArray.splice(48);
  }
 }
 if (metaCycleCounter === 50) {
  arbitraryCycleCounter++;
 }
 if (cycleCounter === 3) {
   wordCounter = 36;
   cycleCounter = 0;
 }
 if (cycleCounter === 2) {
  if (metaCycleCounter === wordArrayLength - 2) {
   metaCycleCounter = 0;
  } else {
   metaCycleCounter++;
  }
  var r = random(wordArrayLength);
  while (wordArray[r] == undefined) {
   r = random(wordArrayLength);
  }
  document.getElementById("lit").innerHTML += wordArray[r] + ' ';
 }
 if (cycleCounter === 1 || cycleCounter === 0) {
  if (wordArray[wordCounter] == undefined && cycleCounter === 0) {
   var r = random(wordArrayLength);
   while (wordArray[r] == undefined) {
    r = random(wordArrayLength);
   }
   document.getElementById("lit").innerHTML += wordArray[r] + ' ';
  } else if (wordArray[wordCounter] == undefined) {
   document.getElementById("lit").innerHTML += 'wait ';
  } else {
   if ((metaCycleCounter >= 1 && metaCycleCounter < 4) || (arbitraryCycleCounter > 5 && arbitraryCycleCounter < 8)) {
    switch(event.code) {
     case "Enter":
      document.getElementById("lit").innerHTML += "<br>";
      break;  
     case "Backspace":
      document.getElementById("lit").innerHTML += "NO ";
      break;                
     case "Period":
      if (!event.shiftKey) {
       document.getElementById("lit").innerHTML = "";
       cycleCounter = random(3);
      } else {
       document.getElementById("lit").innerHTML += ">";
      }
      break;
     default:
      if (event.key.length == 1) {
       document.getElementById("lit").innerHTML += event.key;
      }
      break;
    }
   } else if (arbitraryCycleCounter > 11) {
    document.getElementById("lit").innerHTML += 'fuck ';
   } else {
    document.getElementById("lit").innerHTML += wordArray[wordCounter] + ' ';
   }
  } 
 }   
 window.scrollTo(0,document.body.scrollHeight);
});