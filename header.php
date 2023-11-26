<header>
   <h1><a href="/" aria-label="code lit"><span id="sign"><?php
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
?></span> <span id="name"></span><span id="cursor">_</span></a></h1>
  </header>
  <main>
