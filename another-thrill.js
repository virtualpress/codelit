var right = ["all", "and", "asked", "bottle", "built-up", "buy", "can", "cash", "cold", "dandruff", "expensive", "falls", "finding", "first", "for", "golden", "grease", "hair", "half", "in", "into", "life", "little", "locks", "month", "most", "next", "night", "no", "of", "punishing", "questions", "return", "right", "shampoo", "shines", "shop", "the", "then", "think", "thrill", "time", "to", "trying", "until", "walking", "word", "you", "your"];

var wrong = ["a", "about", "adventure", "after", "afternoon", "also", "amusement", "an", "answers", "any", "apricot", "as", "ask", "at", "back", "be", "because", "before", "bergamot", "blond", "blonde", "blood", "bonanza", "borrow", "but", "by", "cardamom", "cedar", "champagne", "chance", "cheap", "choice", "choose", "cinnamon", "citrus", "clay", "coconut", "coin", "cologne", "come", "con", "conditioner", "contentment", "copper", "could", "cucumber", "day", "days", "decide", "delight", "desire", "destiny", "digging", "dirt", "dirty", "discovering", "discovery", "do", "dollars", "down", "drifting", "dripping", "dumpster", "dumpster-diving", "dust", "dusty", "entire", "even", "evening", "excitement", "experience", "fancy", "fate", "floral", "flowery", "foam", "foaming", "foamy", "fog", "fogging", "foggy", "fortune", "frankincense", "free", "freedom", "from", "garbage", "gem", "gems", "get", "getaway", "give", "glory", "glow", "glows", "go", "gold", "gold-mining", "good", "goods", "grapefruit", "grime", "hack", "happiness", "hard", "have", "heat", "hot", "how", "hunger", "idea", "if", "imagine", "instant", "it", "its", "jackpot", "jar", "jasmine", "jewel", "jewels", "joy", "jug", "just", "know", "large", "last", "later", "lavender", "left", "lemon", "liberty", "like", "lilac", "lime", "look", "looking", "loophole", "loot", "luck", "luxe", "luxury", "make", "mango", "market", "melon", "memory", "might", "mist", "misting", "misty", "moment", "money", "months", "morning", "much", "mud", "muddy", "nectarine", "new", "none", "not", "now", "off", "oil", "on", "one", "only", "onto", "or", "orange", "other", "out", "over", "paragraph", "passionfruit", "peach", "perfume", "pineapple", "pleasure", "plum", "plunder", "poem", "poetry", "posh", "premium", "prize", "puzzling", "rich", "riches", "rose", "rosemary", "rust", "sage", "said", "sandalwood", "satisfaction", "say", "scalp", "scavenge", "scavenged", "scent", "scouring", "scrubbing", "searching", "second", "see", "sell", "sensation", "sentence", "shimmer", "shimmers", "shine", "short", "silver", "skin", "smell", "so", "soap", "soft", "some", "soon", "sound", "spills", "splashing", "steal", "steam", "steaming", "steamy", "store", "story", "strands", "streaming", "strolling", "swank", "sweat", "sweaty", "take", "tangerine", "tell", "than", "that", "their", "them", "there", "these", "they", "thin", "this", "told", "towel", "trash", "treasure", "treasure-hunting", "trickling", "tumbles", "twilight", "under", "urge", "use", "vanilla", "wandering", "want", "warm", "water", "way", "wealth", "week", "weeks", "well", "what", "when", "where", "which", "who", "whole", "will", "with", "words", "work", "would", "wrong", "year", "years", "yellow", "yes", "yet", "yuzu"];

n = 0;

var t;

if (touch) {
 t = 24;
} else {
 t = 48;
}

while (n < t) {
 var i = random(right.length);
 while (right[i] == undefined) {
  i = random(right.length);
 }
 width = random(100);
 height = random(76) + 4;
 if (touch) {
  document.getElementById("words").innerHTML += "<span class=\"right\" style=\"left:" + width + "vw; top:" + height + "vh;\" onclick=\"thrill()\">" + right[i] + "</span>";
 } else {
  document.getElementById("words").innerHTML += "<span class=\"right\" style=\"left:" + width + "vw; top:" + height + "vh;\" onmouseover=\"thrill()\">" + right[i] + "</span>";
 }
 delete right[i];
 n++;
}

if (touch) {
 t = 96;
} else {
 t = 192;
}

while (n < t) {
 var i = random(wrong.length);
 while (wrong[i] == undefined) {
  i = random(wrong.length);
 }
 width = random(100);
 height = random(76) + 4;
 if (touch) {
  document.getElementById("words").innerHTML += "<span class=\"wrong\" style=\"left:" + width + "vw; top:" + height + "vh;\" onclick=\"thrill()\">" + wrong[i] + "</span>";
 } else {
  document.getElementById("words").innerHTML += "<span class=\"wrong\" style=\"left:" + width + "vw; top:" + height + "vh;\" onmouseover=\"thrill()\">" + wrong[i] + "</span>";
 }
 delete wrong[i];
 n++;
}

var v = 0;

if (touch) {
 t = 11;
} else {
 t = 23;
}

function thrill() {
 none(event.target);
 if (event.target.className == "right") {
  var s = 0;
  while (s < document.body.querySelectorAll(".lit").length) {
   if (event.target.innerText == document.body.querySelectorAll(".lit")[s].innerHTML.toLowerCase()) {
    visible(document.body.querySelectorAll(".lit")[s]);
   }
   s++;
  }
  v++;
  if (v > t) {
   document.body.querySelectorAll("#words").forEach(none);
   document.body.querySelectorAll(".lit").forEach(visible);
   document.body.querySelectorAll(".lit").forEach(opaque);
  }
 }
}