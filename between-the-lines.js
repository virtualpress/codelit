var email = [{text: "Dear Ad", delete: true}, {text: "Hey A", delete: true}, {text: "Hi, ", delete: false, break: true}, {text: "How are you? ", delete: true}, {text: "Tracy told me about your mom. I know you said you didn't want to hear from me, but I wanted to ", delete: false}, {text: "express my condolences", delete: true}, {text: "say I'm sorry.", delete: false}, {text: " She was a special person", delete: true}, {text: " It must be complicated", delete: true}, {text: " It's probably a relief after everything ", delete: true, break: true}, {text: "I'm doing OK. My daughter is five now and just started school", delete: false}, {text: ", thank god", delete: true}, {text: ". ", delete: false}, {text: "Motherhood wasn't what I expected — time passes so slowly and the boredom is brutal.", delete: true}, {text: "They grow up so fast. She's super into dinosaurs, knows all the new names for them. When did they change the names, anyway?", delete: false}, {text: " I bet you know.", delete: true, break: true}, {text: "Did you ever have children? You always wanted ", delete: true}, {text: "So many thoughts", delete: false}, {text: "...", delete: true}, {text: "! ", delete: false, break: true}, {text: "I have been doing a lot of work on myself (yay therapy) and ", delete: true}, {text: "I'm sorry for", delete: true}, {text: "My therapist said I should stop apologizing for things that aren't my fault ", delete: true}, {text: "I was wondering if you ever think about", delete: true}, {text: "I don't blame you", delete: true}, {text: "Sometimes our old photos come up on my phone... I know I can", delete: true, number: 2}, {text: "should turn them off but", delete: true, number: 82}, {text: "Remember when ", delete: false}, {text: "we first met at Camila's party and sort of hated each other", delete: true}, {text: "we played Uno until sunrise while everyone else slept ", delete: true}, {text: "on our first date we hiked up Pico Sobarcal and at the top you told a guy we were married", delete: true}, {text: "we snuck into that cathedral in Seville and rang the bell", delete: true}, {text: "we slept on a pool raft in our first apartment because we couldn't afford a bed", delete: true}, {text: "the florist didn't show but you picked me a bouquet of dandelions so I had something to hold as I walked down the aisle", delete: true}, {text: "I sold my first screenplay and you secretly flew my parents in to celebrate", delete: true}, {text: "you picked me up at the airport in a powder blue tuxedo ", delete: true}, {text: "you picked me up at the airport with a sign that said WELCOME HOME FROM PRISON", delete: true}, {text: "you picked me up at the airport with a sign that said MEET HERE FOR SCIENTOLOGY CAMP ", delete: true}, {text: "you stopped parking and meeting me inside", delete: true}, {text: "you picked me up three hours late", delete: true}, {text: "we saw the therapist who said a pet might bring us closer", delete: true}, {text: "you picked me up at the airport with a kitten", delete: true}, {text: "you told me about your annoying new co-worker and let it slip that she was pretty", delete: true}, {text: "I went through your phone while you were showering", delete: true}, {text: "I threw your phone into a snowbank", delete: true}, {text: "your mom told us she'd dated Jerry Garcia when she was 17, and we rolled our eyes — she'd started using again — and after she was finally committed we found that shoebox of old photos in your grandparents' attic and there she was, sitting on Jerry's lap, and he's gazing at her like she's pure magic, and she's looking at the camera like she believes it.", delete: false, break: true}, {text: "Do you remember her line about him? She said, \"He could've been the love of my life. Who knows, maybe he was.\"", delete: false, break: true}, {text: "Anyway. ", delete: false}, {text: "I'll keep this brief.", delete: true}, {text: "I hope you and your family can find some joy in the happier memories, and peace in togetherness.", delete: false, break: true}, {text: "Love, ", delete: true}, {text: "Yours,", delete: true}, {text: "Take care,", delete: false, break: true}, {text: "K", delete: false}];

var paragraph = 0;

var line = 0;

var character = 0;

function types() {
 document.getElementsByClassName("lit")[paragraph].innerHTML += email[line].text[character];
 if (character != email[line].text.length - 1) {
  character++;
  setTimeout(types, 32 + random(64));
 } else {
  if (email[line].delete != true) {
   if (line != email.length - 1) {
    if (email[line].break == true) {
     document.getElementById("lit").innerHTML += '<p class="lit"></p>';
     window.scrollTo(0, document.body.clientHeight);
     paragraph++;
    }
    line++;
    character = 0;
    setTimeout(types, 32 + random(512));
   }
  } else {
   if (email[line].number) {
    character = email[line].number;
    setTimeout(deletes, 32 + random(512));
   } else {
    setTimeout(deletes, 512 + random(4096));
   }
  }
 }
}

function deletes() {
 if (document.getElementsByClassName("lit")[paragraph].innerHTML.slice(-6) == "&nbsp;") {
  document.getElementsByClassName("lit")[paragraph].innerHTML = document.getElementsByClassName("lit")[paragraph].innerHTML.slice(0,-6);
 } else {
  document.getElementsByClassName("lit")[paragraph].innerHTML = document.getElementsByClassName("lit")[paragraph].innerHTML.slice(0,-1);
 }
 if (character != 0) {
  character--;
  setTimeout(deletes, 16 + random(64));
 } else {
  if (email[line].break == true) {
   document.getElementById("lit").innerHTML += '<p class="lit"></p>';
   window.scrollTo(0, document.body.clientHeight);
   paragraph++;
  }
  line++;
  setTimeout(types, 512 + random(4096));
 }
}

setTimeout(types, 4096);