<div id="page">
   <p class="header"><a href="/" aria-label="code lit"><span id="sign"><?php
    switch (rand(0,3)) {
     case 0:
      echo '>';
      break;
     case 1:
      echo '$';
      break;
     case 2:
      echo '#';
      break;
     case 3:
      echo '%';
      break;      
     default:
      echo '>';
    }
?></span> <span id="header"></span><span id="cursor">_</span></a></p>
