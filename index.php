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
     array("page"=>"criminality", "title"=>"CRIMINALITY", "link"=>"https://umkalra.carrd.co/", "author"=>"umang kalra"),
     array("page"=>"excoriator", "title"=>"EXCORIATOR", "author"=>"nick marshall"),
     array("page"=>"in-memphis", "title"=>"IN MEMPHIS", "link"=>"https://www.reedturchi.com/", "author"=>"reed turchi"),
     array("page"=>"brain-map", "title"=>"BRAIN MAP", "link"=>"https://www.annevalente.com/", "author"=>"anne valente"),
     array("page"=>"poem-in-which-foreboding-again-figures-prominently", "title"=>"POEM IN WHICH FOREBODING AGAIN FIGURES PROMINENTLY", "link"=>"https://katemlucas.com/", "author"=>"kate lucas"),
     array("page"=>"how-to-write-a-novel-in-seven-years", "title"=>"HOW TO WRITE A NOVEL IN SEVEN YEARS", "link"=>"https://www.jmarceloborromeo.com/", "author"=>"j marcelo borromeo"),
     array("page"=>"ephemeral", "title"=>"EPHEMERAL", "link"=>"https://mwektaehtabr.com/", "author"=>"matthew baker"),
     array("page"=>"terminal", "title"=>"TERMINAL", "link"=>"https://www.keithrleonard.com/", "author"=>"keith leonard"),
     array("page"=>"eat-me", "title"=>"EAT ME (ALTERNATIVE SCENARIOS IN THE GARDEN OF EDEN)", "link"=>"https://www.allegrahyde.com/", "author"=>"allegra hyde"),
     array("page"=>"frame-of-reference", "title"=>"FRAME OF REFERENCE", "link"=>"https://www.simonhan.com/", "author"=>"simon han"),
     array("page"=>"who-you-are-who-am-i", "title"=>"WHO YOU ARE, WHO AM I", "link"=>"https://www.autumnhouse.org/our-authors/cundieff-melissa/", "author"=>"melissa cundieff"),
     array("class"=>"keyboard", "page"=>"neon-raven", "title"=>"𓄿", "cowriters"=>
      array(
       array("link"=>"https://melissamesku.com/", "author"=>"melissa mesku"),
       array("link"=>"https://kevinmaloney.net/", "author"=>"kevin maloney"),
      )
     ),
     array("page"=>"therapy-worksheet-cognitive-distortion-analysis", "title"=>"THERAPY WORKSHEET: COGNITIVE DISTORTION ANALYSIS", "link"=>"https://www.rachelmennies.com/", "author"=>"rachel mennies"),
     array("page"=>"a-permanent-but-shifting-valley", "title"=>"A PERMANENT BUT SHIFTING VALLEY", "link"=>"https://sam-ross-4cah.squarespace.com/", "author"=>"sam ross"),
      array("page"=>"reverberations", "title"=>"REVERBERATIONS", "link"=>"https://sam-ross-4cah.squarespace.com/", "author"=>"sam ross"),
     array("page"=>"the-extinction-of-homo-sapiens", "title"=>"THE EXTINCTION OF HOMO SAPIENS", "link"=>"https://mwektaehtabr.com/", "author"=>"matthew baker"),
     array("page"=>"another-thrill", "title"=>"ANOTHER THRILL", "link"=>"https://www.anderscarlsonwee.com", "author"=>"anders carlson-wee"),
     array("page"=>"inspector-4", "title"=>"INSPECTOR 4", "link"=>"https://www.fourforaquarter.com/", "author"=>"michael martone"),
     array("page"=>"exchange", "title"=>"EXCHANGE", "link"=>"https://www.rosaliemoffett.com/", "author"=>"rosalie moffett"),
     array("page"=>"you-are-on-the-fastest-route", "title"=>"YOU ARE ON THE FASTEST ROUTE", "link"=>"https://mayakanwal.com/", "author"=>"maya kanwal"),
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
     if ($contents[$n]["class"] != null) {
      echo '<div class="';
      echo $contents[$n]["class"];
      echo '">';
     }
     echo '<h2><a href="';
     echo $contents[$n]["page"];
     echo '" class="title">';
     echo $contents[$n]["title"];
     echo '</a></h2><p class="byline">// ';
     if ($contents[$n]["link"] != null) {
      echo '<a href="';
      echo $contents[$n]["link"];
      echo '" class="author">';
      echo $contents[$n]["author"];
      echo '</a>';
     } elseif ($contents[$n]["author"] != null) { 
      echo $contents[$n]["author"];
     } elseif ($contents[$n]["cowriters"] != null) {
      for ($x = 0; $x < sizeof($contents[$n]["cowriters"]); $x++) {
       if ($x != 0) {
        echo ' and ';
       }
       echo '<a href="';
       echo $contents[$n]["cowriters"][$x]["link"];
       echo '" class="author">';
       echo $contents[$n]["cowriters"][$x]["author"];
       echo '</a>';
      }
     }
     echo '</p>';
     if ($contents[$n]["class"] != null) {
      echo '</div>';
     }
     array_splice($contents, $n, 1);
    }
   ?><div class="keyboard"><h2><a href="writers-block" class="title">WRITER'S BLOCK</a></h2><p class="byline">// <a href="https://mwektaehtabr.com" class="author">matthew baker</a></p></div>
  </main>
  <footer> 
   <p><a <?php
    $n = rand(0,99);
    if ($n < 64) {
     echo 'href="about">ABOUT';
    } elseif ($n < 80) {
     echo 'onclick="erase();">DELETE WEBSITE';
    } elseif ($n < 84) {
     echo 'href="mailto:codelit@codelit.com">SUBMIT';
    } elseif ($n < 86) {
     echo 'href="https://www.patreon.com/c0d31i7">SUPPORT';
    } elseif ($n < 88) {
     echo 'onclick="read();">READ SOMETHING RANDOM';
    } elseif ($n < 90) {
     echo 'href="https://defcon.org">GO TO DEF CON';
    } elseif ($n == 90) {
     echo 'href="https://supporters.eff.org/donate/join-eff-4">DONATE TO THE ELECTRONIC FRONTIER FOUNDATION';
    } elseif ($n == 91) {
     echo 'href="https://noyb.eu/en/donations-other-support-options">DONATE TO NOYB';
    } elseif ($n == 92) {
     echo 'href="https://www.ddosecrets.com/wiki/Contribute">DONATE TO DDOSECRETS';
    } elseif ($n == 93) {
     echo 'href="https://shop.wikileaks.org/donate">DONATE TO WIKILEAKS';
    } elseif ($n == 94) {
     echo 'href="https://www.ddosecrets.com/wiki/Contact">SEND A CLASSIFIED DOC TO DDOSECRETS';
    } elseif ($n == 95) {
     echo 'href="https://wikileaks.com/#submit">SEND A CLASSIFIED DOC TO WIKILEAKS';
    } elseif ($n == 96) {
     echo 'href="mailto:potus@whitehouse.gov">EMAIL THE PRESIDENT';
    } elseif ($n == 97) {
     echo 'href="http://en.letters.kremlin.ru/letters/send">FILE A LETTER OF COMPLAINT WITH THE KREMLIN';
    } elseif ($n == 98) {
     echo 'href="mailto:timbl@w3.org">SEND FAN MAIL TO THE CREATOR OF THE WORLD WIDE WEB';
    } else {
     echo 'href="https://en.wikipedia.org/wiki/Special:Random">READ SOMETHING RANDOM ON WIKIPEDIA INSTEAD';
    }
   ?></a></p>
  </footer>
  <script src="code.js"></script>
  <div id="egg"></div>
  <script src="localhost.js"></script>
 </body>
</html>