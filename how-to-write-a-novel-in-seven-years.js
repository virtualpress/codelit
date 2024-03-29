var rate = 1;

var count = 0;

var paragraph = 0;

var section = 0;

var writing = [

 [
  [" you", " finally", " find", " yourself", " confronted", " with", " the", " wholly", " unconquerable", " labor", " of", " writing."],
  ["Coming", " to", " a", " blank", " page", " with", " something", " new,", " you", " wonder", " how", " anyone", " could", " have", " ever", " done", " it.", " Punched", " out", " the", " hundreds", " of", " pages", " that", " inspired", " in", " you", " the", " sense", " that", " the", " things", " of", " life", " could", " always", " be", " bigger", " than", " they", " appear.", " Collapsed", " years", " of", " work", " into", " the", " sheaves", " of", " paper", " that", " fit", " comfortably", " between", " your", " hands.", " Some", " of", " them", " made", " it", " seem", " like", " it", " wasn't", " their", " first", " time", " to", " write", " a", " novel.", " But", " writing", " is", " only", " hard", " the", " first", " time", " you", " write.", " And", " every", " time", " you", " come", " to", " the", " page", " with", " something", " new,", " it", " will", " always", " be", " your", " first", " time."],
  ["The", " easiest", " thing", " to", " grasp", " is", " the", " idea", " that", " fell", " into", " your", " head.", " You", " sketch", " a", " scene", " out", " with", " several", " descriptions,", " you", " try", " to", " find", " the", " tenor", " of", " your", " piece", " through", " dialogue.", " An", " exchange", " between", " two", " people", " you", " don't", " quite", " know", " yet.", " It", " doesn't", " matter.", " In", " five", " years,", " you'll", " have", " thrown", " all", " of", " this", " out.", " But", " the", " point", " of", " this", " is", " to", " start,", " and", " this", " is", " the", " only", " way", " through:", " the", " path", " you", " will", " learn", " to", " never", " trust", " again."],
  ["You", " will", " write", " for", " an", " hour", " that", " feels", " like", " three.", " You", " will", " spend", " twelve", " of", " those", " minutes", " rewriting", " one", " sentence", " that", " just", " didn't", " feel", " right.", " You", " are", " a", " dancer", " circling", " an", " invisible", " partner,", " finding", " your", " steps", " and", " failing", " miserably.", " Maybe", " you", " are", " aware", " of", " this", " failure,", " or", " maybe", " you", " will", " tell", " yourself", " that", " it's", " a", " start.", " If", " you're", " too", " tired", " to", " continue,", " it's", " okay", " to", " stop", " now,", " as", " long", " as", " you", " come", " back", " again", " tomorrow.", " The", " story", " will", " be", " waiting", " for", " you", " again,", " if", " you", " wish", " to", " reach", " the", " end.", " This", " is", " how", " it", " is", " in", " writing:", " the", " only", " true", " failure", " is", " failing", " to", " come", " back", " to", " the", " page", " the", " next", " day."],
  ["Now", " it", " is", " the", " next", " day.", " Your", " pages", " look", " terrible."]
 ],
 
 [
  [2, "There", " are", " 365", " days", " in", " a", " year.", " And", " in", " seven", " years,", " there", " are", " 2,555.", " Children", " learn", " to", " walk,", " speak,", " and", " sometimes", " ride", " a", " bike", " in", " the", " same", " span", " of", " time.", " Someone", " who", " becomes", " a", " teenager", " will", " no", " longer", " be", " one", " in", " seven", " years'", " time.", " Hearts", " can", " come", " together,", " marriages", " dissolve,", " and", " dogs", " will", " have", " lived", " most", " of", " their", " lives", " in", " seven", " years'", " time.", " This", " is", " the", " time", " you", " are", " using", " to", " write", " a", " book."],
  [3, "Sometimes,", " the", " words", " come", " fast.", " Sometimes,", " you", " are", " compelled", " by", " something", " that", " feels", " beyond", " you.", " You", " learn", " to", " defeat", " the", " impulse", " to", " self-edit,", " though", " sometimes", " you", " still", " fall.", " What", " matters", " right", " now", " is", " reaching", " the", " end.", " There", " is", " nothing", " to", " edit,", " you", " remind", " yourself,", " until", " you", " have", " something", " complete.", " Until", " you", " reach", " the", " end.", " Only", " then", " can", " you", " really", " begin", " to", " see", " what", " your", " novel", " is", " really", " about."],
  ["In", " the", " first", " year", " (approximately", " one", " or", " two", " drafts),", " you", " will", " try", " to", " fit", " everything", " you", " can", " into", " your", " book.", " This", " is", " a", " common", " mistake", " among", " first-time", " writers.", " A", " novel", " can", " be", " anything,", " even", " more", " than", " a", " world.", " You", " look", " for", " the", " biggest", " scope", " to", " look", " at", " your", " work,", " you", " give", " names", " and", " histories", " to", " every", " person", " who", " passes", " by", " your", " main", " characters,", " even", " if", " they", " never", " speak.", " For", " you,", " this", " is", " key", " to", " making", " the", " world", " of", " your", " novel", " feel", " real.", " In", " truth,", " this", " is", " key", " to", " discovering", " what", " your", " novel", " is", " really", " about."],
  ["There", " is", " no", " telling", " how", " much", " of", " these", " people", " will", " survive", " when", " you", " finish."],
  ["Sometimes,", " writers", " kill", " none", " of", " these", " histories."],
  ["Sometimes,", " writers", " kill", " all", " but", " twelve."],
  ["Most", " of", " the", " time,", " it", " does", " not", " depend", " on", " you."],
  ["The", " first", " time", " you", " invite", " someone", " to", " read", " your", " pages,", " they", " will", " convey", " a", " sense", " of", " the", " death", " toll", " you", " need", " to", " commit."],
  ["To", " the", " wrong", " reader,", " these", " pages", " will", " seem", " like", " mess.", " The", " ruin", " of", " a", " place", " that", " was", " teeming", " with", " life,", " until", " you", " showed", " up.", " The", " survivors", " line", " up", " at", " the", " queue", " for", " aid.", " They", " give", " their", " names", " and", " the", " accounts", " of", " their", " lives.", " The", " story", " that", " connects", " them", " all", " will", " likely", " be", " senseless.", " The", " officer", " taking", " these", " details", " down", " has", " too", " much", " on", " their", " hands", " to", " connect", " the", " pieces", " together."],
  ["To", " another", " wrong", " reader,", " these", " pages", " will", " seem", " exactly", " right.", " How", " else", " to", " capture", " and", " explain", " what", " is", " happening", " to", " us", " in", " this", " time", " and", " this", " world?", " Isn't", " this", " how", " it", " is", " in", " real", " life?", " You", " ask", " what", " to", " change,", " and", " they", " say", " nothing.", " They're", " at", " a", " loss", " for", " words,", " in", " fact.", " They're", " not", " sure", " how", " one", " could", " describe", " something", " so", " ineffable,", " and", " it", " is", " probably", " then", " that", " you", " will", " know", " with", " considerable", " clarity", " what", " the", " story", " is", " supposed", " to", " be", " about."],
  ["To", " the", " right", " reader,", " some", " change", " is", " necessary.", " It", " won't", " come", " from", " your", " pages,", " they'll", " say,", " but", " from", " you.", " Why", " are", " you", " trying", " so", " hard", " to", " respect", " me", " as", " the", " reader?", " Why", " are", " you", " working", " to", " write", " the", " thing", " that", " you", " know", " will", " impress", " me?", " Right", " now", " you", " are", " trying", " too", " hard", " to", " be", " a", " good", " writer,", " but", " you", " are", " trying", " at", " the", " cost", " of", " saying", " anything", " that", " only", " you", " can", " say.", " Your", " reader's", " words", " may", " come", " across", " as", " harsh,", " but", " if", " you", " trust", " them", " enough,", " they", " will", " feel", " like", " love.", " Not", " for", " you,", " but", " for", " what", " you", " are", " on", " the", " precipice", " of", " discovering.", " You'll", " know", " if", " you", " love", " it", " too,", " even", " if", " you", " haven't", " figured", " it", " all", " out", " yet.", " This", " is", " what", " it", " means", " for", " something", " to", " be", " novel."],
  [4, "In", " the", " second", " year,", " you", " will", " have", " punched", " out", " the", " first", " full", " draft.", " You", " will", " know", " where", " the", " story", " should", " start", " and", " where", " it", " should", " end.", " They", " connect", " to", " each", " other", " in", " ways", " that", " can", " be", " described", " or", " summarized", " only", " by", " the", " sequence", " of", " events", " that", " sit", " in", " between", " them."],
  ["Is", " this", " a", " good", " time", " to", " consider", " running", " your", " work", " through", " the", " publishing", " cycle?", " To", " query", " agents", " and", " find", " out", " that", " your", " voice", " has", " been", " the", " one", " missing", " from", " the", " global", " market", " all", " along?"],
  ["You", " figure:", " probably."],
  ["You", " find", " out", " the", " names", " of", " the", " top", " agents,", " the", " ones", " who", " have", " sold", " the", " books", " you", " have", " looked", " to", " as", " holy", " texts", " all", " your", " life.", " These", " were", " books", " that", " you", " saw", " as", " candidates", " for", " the", " canon,", " things", " that", " you", " would", " teach", " if", " you", " could", " (supposing", " you", " are,", " in", " fact,", " a", " teacher).", " These", " books", " felt", " wholly", " unique", " to", " their", " time", " and", " place,", " things", " so", " greatly", " removed", " from", " the", " context", " of", " what", " had", " been", " published", " at", " the", " time", " that", " surely", " if", " those", " agents", " could", " see", " their", " potential", " in", " what", " these", " authors", " had", " written,", " so", " would", " they", " see", " it", " in", " your", " own", " work."],
  ["You", " look", " for", " their", " submission", " guidelines.", " You", " follow", " them", " religiously", " and", " put", " together", " a", " spreadsheet", " to", " track", " your", " submissions.", " Again,", " the", " first", " one", " is", " the", " hardest", " to", " write,", " but", " it", " is", " practice", " for", " all", " the", " others.", " You", " send,", " and", " you", " send,", " and", " you", " send,", " and", " you", " send."],
  ["After", " you", " shoot", " your", " first", " pages", " out,", " you", " read", " them", " again.", " You", " see", " a", " phrase", " you", " used", " that", " doesn't", " land", " very", " well", " on", " your", " ears.", " You", " hope", " this", " doesn't", " greatly", " affect", " whatever", " impression", " they", " have", " of", " you.", " And", " anyway,", " agents", " help", " you", " edit", " the", " work,", " don't", " they?", " What", " you", " send", " them", " isn't", " what", " goes", " out", " in", " the", " end,", " right?"],
  ["Months", " pass.", " You", " have", " decided", " to", " edit", " the", " book", " from", " start", " to", " finish", " after", " hearing", " nothing", " from", " any", " of", " the", " five", " you", " submitted", " to.", " You", " could", " hold", " out", " hope", " that", " one", " of", " them", " still", " might", " answer."],
  ["But", " you", " don't."]  
 ],
 
 [
  [1, "In the third year, things get serious.", " This is make or break time.", " Three more drafts down, you have come to see your past errors with clarity &mdash; not just your hastiness in submitting your manuscript, but more crucially the failures of your earlier drafts.", " You realize this one morning as you are going through your latest draft once again.", " You notice that something your character says feels... thin.", " A convenient turn of phrase that kept things moving.", " You didn't feel this way the last time you read this draft, but now it sticks out.", " You go back to everything this character has said, and find that suddenly each of their lines is tinged with falseness.", " This is not who they are supposed to be, the manuscript seems to be saying to you.", " Not who they want to be."],
  ["You fall back in your chair.", " It wasn't a real voice you heard, but a tug in your heart.", " Something that you knew by intuition signaled the state of your writing.", " Once more you remember your one good reader, the one who told you what you really needed to do.", " If there were a voice you could hear at that moment, it would be theirs.", " They would be telling you what you needed to know.", " Your book will only be published once, but you have hundreds of chances to get it right, just like this one."],
  ["You throw out your schedule.", " You previously thought you would get to finish this draft in another month's time, but now you no longer feel that way.", " Not with the work you still have to do.", " Everything must be changed.", " You are willing to rip and tear, and listen to all the feedback you'd gotten in the past from agents who did answer, from friends who were uncertain of what you were trying to do, from yourself.", " You listen to the voice of your novel, and you get back to work."],
  ["This is the year you learn that writing is, above all, an act of listening.", " You do not get to choose the way people will read your writing.", " You can only listen and speak truthfully, and you can only present it as such when the time has come."],
  ["Of course, you do not realize this all at once.", " Sometimes the voice comes in trickles.", " Other times, the voice is loud, booming, and you know exactly what to do.", " Sometimes you find ways to fill the hours in between.", " If you are the type who plays video games, you'll find that all of them speak to what you are experiencing, one way or another.", " A hero's fantastical quest reminds you of the vast world you are exploring as one singular author.", " A game that forces you to die teaches you the value of failure, the value of every draft and every page you've thrown away.", " Even your favorite game, the one you've been playing much longer than you've been writing novels, becomes a new metaphor for your vocation.", " In the game, you must click on the screen many times to get its story moving forward.", " At face value, there seems to be no end to the game.", " You simply click, click, click.", " But this game plays like a thread unspooling.", " One day, perhaps soon, you will find the end of the story and you will know what it meant all along.", " Isn't that how writing is?"]
 ],
 
 [
  [2, "The next two years go by this way.", "  You will do away with scenes that no longer serve the manuscript.", "  You will excise characters or repurpose them to serve one function instead of another.", "  You will look at your novel as an intricate machine whose sole purpose is to tell meaning through story, which is to say that it cannot do one without the other.", "  You cannot say what you mean to say outright.", "  You cannot tell your reader what your story is about.", "  You can only tell the story, and tell it in the way that feels most right, in the way that means more to you.", "  You are, of course, the novel's true first reader, and you have always been as long as you have learned to listen.", "  You are not a writer so much as a steward, you are not a storyteller so much as an interpreter.", "  Every day, you read the words on your page aloud, trying to find the right sound.", "  It has never been more important to you than it is at this stage &mdash; the sound."],
  ["Perhaps during this time you will begin to stretch your legs in the waters of the literary world.", "  You will find at this point that people will want to know what your story is about, what you've been writing all these years.", "  And when you read the labors of the last five years at their invitation, you start to wonder if this is really it.", "  Some will tell you that it is not yet time.", "  Others will recognize through your words the path that you have walked."],
  ["You heard it too, they will say.", "  When I spent my time away from the world, my novel was all that I could hear."],
  ["And will you go again? you ask."],
  ["They say soon.", "  When a new novel calls again."],
  ["For some of them, you note that their books are still hidden away from the world, kept in some drawer.", "  Near-perfect little things, waiting for the time to come."],
  ["But for you, is it now?", "  Has that time finally come?"]
 ],
 
 [
  [1, "In the sixth year, you step out of the little cabin you've made of your home. Outside the place you live, wherever it may be, the air does not feel any different. Nor does the ground. As the days come and go, people in your life may ask you how things are going with your novel, and how long have you been working on it again?"],
  ["Six years, you say."],
  ["Six years, wow! And is it published already?"],
  ["You will hear this question a lot. Nobody outside of the writing world knows anything about publishing, it seems, but that is just as it should be."],
  ["Not yet, you say, but maybe this year."],
  ["It's finished already? they ask."],
  ["Yes, you say. I just finished it recently, you tell them."],
  ["That's great, they say, congratulations, et cetera. You take their compliments even though you know the work is done. Sometimes, the voice of your novel will speak to you again, and tell you something you didn't know until now. A few months into that year, you will look at the manuscript and completely replace the ending. The ending you'd had all along was just a placeholder, something that was sitting there before you found the real one. The right one all along."],
  ["Sometime in the future, when your novel is finally published, no one will ever know that you had the wrong ending for the longest time."],
  ["So time goes on. There is no telling how long the seventh year will last. Sometimes, it does last just a year, and sometimes it stretches on forever. Maybe when you finish, you will be working someplace new, a new job. Maybe you were a student who is now a teacher. Crucially, you note, you are the one who has changed. Your novel is not different, only now simply real. After all, novels do not exist in real time, as you do. Some novels take many years to be born, others are born before their time."],
  ["Now yours is now sitting in a file, somewhere in your desk or your computer."],
  ["Unless it is in the hands of an editor, or better yet, a day away from publication."],
  ["Maybe there are talks of adaptation. A picture deal, a graphic novel. Anything can happen at this point."],
  ["Whatever the case may be, the important thing is this: seven years ago, it did not exist."],
  ["Now it is here. No longer you, but fully grown apart."],
  ["A thing of its own."],
  ["A stalk to the stars, belonging to the world.", 0]
 ],

];

function clicker() {
 var i = 0;
 while (i < rate) {
  if (typeof(writing[section][paragraph][count]) == "number") {
   rate = writing[section][paragraph][count];
   count++;
  } else {
   document.querySelector("main").lastElementChild.lastElementChild.innerHTML += writing[section][paragraph][count];
   window.scrollTo(0, document.body.clientHeight);
   count++;
   if (count == writing[section][paragraph].length) {
    paragraph++;
    count = 0;
    if (paragraph == writing[section].length) {
     section++;
     paragraph = 0;
     document.querySelector("main").innerHTML += '<div class="content"></div>';
    }
    document.querySelector("main").lastElementChild.innerHTML += "<p></p>";
   }
  }
  i++;
 }
}

document.getElementsByClassName("content")[0].addEventListener("click", clicker);