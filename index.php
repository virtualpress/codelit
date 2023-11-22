<!DOCTYPE html>
<?php include "comment.php";?>
<html dir="ltr" lang="en">
 <head>
  <title>CODE LIT</title>
  <?php include "meta.php";?>
 </head>
 <body>
  <?php include "header.php";?>
   <?php
    $contents = array(
     array("page"=>"between-the-lines", "title"=>"BETWEEN THE LINES", "link"=>"https://www.kellyluce.com/", "author"=>"kelly luce"),
     array("page"=>"meditations-on-the-line", "title"=>"MEDITATIONS ON THE LINE", "link"=>"https://www.tianaclark.com/", "author"=>"tiana clark"),
     array("page"=>"obit-in-translation", "title"=>"OBIT, IN TRANSLATION", "link"=>"https://liwenxu.wixsite.com/website", "author"=>"liwen xu"),
     array("page"=>"discrepancies", "title"=>"DISCREPANCIES", "link"=>"https://mwektaehtabr.com/", "author"=>"matthew baker"),
     array("page"=>"three-men-in-trouble", "title"=>"THREE MEN IN TROUBLE", "link"=>"https://lydia-conklin.com/", "author"=>"lydia conklin"),
     array("page"=>"romance-languages", "title"=>"ROMANCE LANGUAGES", "link"=>"https://kanakkapur.carrd.co/", "author"=>"kanak kapur"),
     array("page"=>"criminality", "title"=>"CRIMINALITY", "link"=>"https://umkalra.carrd.co", "author"=>"umang kalra"),
     array("page"=>"excoriator", "title"=>"EXCORIATOR", "link"=>"", "author"=>"nick marshall"),
     array("page"=>"brain-map", "title"=>"BRAIN MAP", "link"=>"https://www.annevalente.com/", "author"=>"anne valente"),
     array("page"=>"poem-in-which-foreboding-again-figures-prominently", "title"=>"POEM IN WHICH FOREBODING AGAIN FIGURES PROMINENTLY", "link"=>"https://katemlucas.com/", "author"=>"kate lucas"),
     array("page"=>"how-to-write-a-novel-in-seven-years", "title"=>"HOW TO WRITE A NOVEL IN SEVEN YEARS", "link"=>"https://www.jmarceloborromeo.com/", "author"=>"j marcelo borromeo"),
     array("page"=>"ephemeral", "title"=>"EPHEMERAL", "link"=>"https://mwektaehtabr.com/", "author"=>"matthew baker"),
     array("page"=>"terminal", "title"=>"TERMINAL", "link"=>"https://www.keithrleonard.com/", "author"=>"keith leonard"),
     array("page"=>"eat-me", "title"=>"EAT ME (ALTERNATIVE SCENARIOS IN THE GARDEN OF EDEN)", "link"=>"https://www.allegrahyde.com/", "author"=>"allegra hyde"),
     array("page"=>"frame-of-reference", "title"=>"FRAME OF REFERENCE", "link"=>"https://www.simonhan.com/", "author"=>"simon han"),
     array("page"=>"who-you-are-who-am-i", "title"=>"WHO YOU ARE, WHO AM I", "link"=>"https://www.autumnhouse.org/our-authors/cundieff-melissa/", "author"=>"melissa cundieff"),
     array("page"=>"another-thrill", "title"=>"ANOTHER THRILL", "link"=>"https://www.anderscarlsonwee.com", "author"=>"anders carlson-wee"),
     array("page"=>"therapy-worksheet-cognitive-distortion-analysis", "title"=>"THERAPY WORKSHEET: COGNITIVE DISTORTION ANALYSIS", "link"=>"https://www.rachelmennies.com/", "author"=>"rachel mennies"),
     array("page"=>"a-permanent-but-shifting-valley", "title"=>"A PERMANENT BUT SHIFTING VALLEY", "link"=>"https://sam-ross-4cah.squarespace.com/", "author"=>"sam ross"),
      array("page"=>"reverberations", "title"=>"REVERBERATIONS", "link"=>"https://sam-ross-4cah.squarespace.com/", "author"=>"sam ross"),
     array("page"=>"the-extinction-of-homo-sapiens", "title"=>"THE EXTINCTION OF HOMO SAPIENS", "link"=>"https://mwektaehtabr.com/", "author"=>"matthew baker"),
     array("page"=>"inspector-4", "title"=>"INSPECTOR 4", "link"=>"https://www.fourforaquarter.com/", "author"=>"michael martone"),
     array("page"=>"exchange", "title"=>"EXCHANGE", "link"=>"https://www.rosaliemoffett.com/", "author"=>"rosalie moffett"),
     array("page"=>"mirror-walkers", "title"=>"MIRROR WALKERS", "link"=>"https://www.naheedphirozepatel.com/", "author"=>"naheed phiroze patel"),
     array("page"=>"once", "title"=>"ONCE", "link"=>"https://www.chadabushanab.com/", "author"=>"chad abushanab"),
    );
    while (sizeof($contents) > 0) {
     if (rand(0,7) == 0) {
      $n = 0;
     } else {
      $n = rand(0, sizeof($contents) - 1);
     }
     if (sizeof($contents) > 16 && $n >= sizeof($contents) - 3) {
      $n = rand(0,7);
     }
     if ($contents[$n]["link"] != "") {
      echo '<p class="contents"><a href="';
      echo $contents[$n]["page"];
      echo '" class="title">';
      echo $contents[$n]["title"];
      echo '</a><br>// <a href="';
      echo $contents[$n]["link"];
      echo '" class="author">';
      echo $contents[$n]["author"];
      echo '</a></p>';
     } else {
      echo '<p class="contents"><a href="';
      echo $contents[$n]["page"];
      echo '" class="title">';
      echo $contents[$n]["title"];
      echo '</a><br>// ';
      echo $contents[$n]["author"];
      echo '</p>';
     }
     array_splice($contents, $n, 1);
    }
   ?><p class="contents keyboard"><a href="writers-block" class="title">WRITER'S BLOCK</a><br>// <a href="https://mwektaehtabr.com" class="author">matthew baker</a></p><p class="contents"><?php
    $n = rand(0,99);
    if ($n < 64) {
     echo '<a href="about">ABOUT</a>';
    } elseif ($n < 80) {
     echo '<a onclick="erase();">DELETE WEBSITE</a>';
    } elseif ($n < 84) {
     echo '<a href="mailto:codelit@codelit.com">SUBMIT</a>';
    } elseif ($n < 86) {
     echo '<a onclick="read();">READ SOMETHING RANDOM</a>';
    } elseif ($n < 88) {
     echo '<a href="https://github.com/virtualpress/codelit">VIEW SOURCE CODE</a>';
    } elseif ($n < 90) {
     echo '<a href="https://defcon.org">GO TO DEF CON</a>';
    } elseif ($n == 90) {
     echo '<a href="https://supporters.eff.org/donate/join-eff-4">DONATE TO THE ELECTRONIC FRONTIER FOUNDATION</a>';
    } elseif ($n == 91) {
     echo '<a href="https://noyb.eu/en/donations-other-support-options">DONATE TO NOYB</a>';
    } elseif ($n == 92) {
     echo '<a href="https://www.ddosecrets.com/wiki/Contribute">DONATE TO DDOSECRETS</a>';
    } elseif ($n == 93) {
     echo '<a href="https://shop.wikileaks.org/donate">DONATE TO WIKILEAKS</a>';
    } elseif ($n == 94) {
     echo '<a href="https://www.ddosecrets.com/wiki/Contact">SEND A CLASSIFIED DOC TO DDOSECRETS</a>';
    } elseif ($n == 95) {
     echo '<a href="https://wikileaks.com/#submit">SEND A CLASSIFIED DOC TO WIKILEAKS</a>';
    } elseif ($n == 96) {
     echo '<a href="mailto:potus@whitehouse.gov">EMAIL THE PRESIDENT</a>';
    } elseif ($n == 97) {
     echo '<a href="http://en.letters.kremlin.ru/letters/send">FILE A LETTER OF COMPLAINT WITH THE KREMLIN</a>';
    } elseif ($n == 98) {
     echo '<a href="mailto:timbl@w3.org">SEND FAN MAIL TO THE CREATOR OF THE WORLD WIDE WEB</a>';
    } else {
     echo '<a href="https://en.wikipedia.org/wiki/Special:Random">READ SOMETHING RANDOM ON WIKIPEDIA INSTEAD</a>';
    }
   ?></p>
  <?php include "footer.php";?>
  <div id="egg"></div>
  <script src="sudo.js"></script>
 </body>
</html>