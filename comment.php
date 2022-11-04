<?php
  if (date("a") == "am") {
   include "comment0.php";
  } else {
   switch (rand(1,7)) {
    case 1:
     include "comment1.php";
     break;
    case 2:
     include "comment2.php";
     break;
    case 3:
     include "comment3.php";
     break;
    case 4:
     include "comment4.php";
     break;
    case 5:
     include "comment5.php";
     break;
    case 6:
     include "comment6.php";
     break;
    case 7:
     include "comment7.php";
     break;
    default:
     include "comment1.php";
   }
  }
?>
