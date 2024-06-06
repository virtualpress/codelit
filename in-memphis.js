var lines = [
 ['Impossible things always happen in Memphis', 'Impossible things tend to happen in Memphis', 'Impossible things seem to happen in Memphis', 'Impossible dreams are what linger in Memphis', 'Impossible dreams always happen in Memphis', 'Impossible things like a dreamer in Memphis', 'Impossible things like believers in Memphis', 'Impossible is but a dreamer in Memphis', 'Impossible is just a dreamer in Memphis', 'Midnight train whistling closer in Memphis', 'Cold history circling closer in Memphis', 'Cold history whistling closer in Memphis', 'Impossible train is a dreamer in Memphis', 'Midnight whistling closer in Memphis'],
 ['the tall tales grow taller &amp; stranger in Memphis', 'Slow midnight train\'s whistle grows louder in Memphis', 'That midnight train whistling nearer in Memphis', 'his death still unsolved, jealous lover in Memphis?', 'His death growing taller &amp; stranger in Memphis', 'Midnight train jealous as lovers in Memphis', 'Tall tales grow jealous as strangers in Memphis', 'Tall tales keep whistling nearer in Memphis', 'That tall tale keeps whistling louder in Memphis', 'A death that keeps whistling nearer in Memphis', 'A death that grows taller &amp; stranger in Memphis', 'A death that could be a believer in Memphis', 'The fable of losing a dreamer in Memphis', 'Slow midnight becomes a believer in Memphis'],
 ['Tape billfold to snare-head to deaden the drum &mdash;', 'On-hold the whole world taps its toes to Al Jackson &mdash;', 'Killing time redefined to murder a drummer,', 'On-hold the whole world taps its toes to Al Jackson,', 'Paul Simon &amp; daughter went driving to Graceland,', 'Once dreamt on Art\'s floor &amp; paid rent in tequila,', 'Paul Simon &amp; young boy went driving to Graceland,', 'Paul Simon &amp; poor son went driving to Graceland,', 'Tape billfold to snare-head to murder a drum,', 'On-hold the whole world deadens its drum,', 'Killing time redefined to deaden a drum,', 'Once slept on Art\'s floor &amp; paid rent in tequila,', 'On-hold redefined to murder a drummer,', 'Tape fatback to snare-head to deaden the drum &mdash;'],
 ['his death still unsolved, another lover in Memphis?', 'cement balcony stained by a dreamer in Memphis.', 'the tall tales grow taller &amp; stranger in Memphis.', 'his backbeat eternal as the river in Memphis.', 'Jeff Buckley in stage boots sunk under in Memphis.', 'Slow midnight train\'s whistle draws nearer in Memphis.', 'His death still unsolved, sunk under in Memphis?', 'Cement balcony stained by a stranger in Memphis.', 'Slow midnight train\'s whistle the river in Memphis.', 'His backbeat eternally stranger in Memphis.', 'The tall tales grow strange, a lover in Memphis?', 'Jeff Buckley\'s lone whistle cries closer in Memphis.', 'Cement balcony stained &amp; stranger in Memphis.', 'Jeff Buckley unsolved, slow dreamer in Memphis.'],
 ['Killing time redefined to murder a drummer,', 'Paul Simon &amp; poor boy went driving to Graceland,', 'Tape billfold on snare-head to deaden the drum,', 'I AM A MAN hangs in a dim-lit museum &mdash;', '&amp; the Lorraine Motel, where STAX hits were written?', 'Killing time redefined to backstab a beat &mdash;', 'Sweet tea &amp; pulled pork, diabetes &amp; pudding,', 'Now I AM A MAN hangs in a museum &mdash;', 'See I AM A MAN hanging in the museum &mdash;', 'Sweet tea &amp; pulled pork hanging in the museum &mdash;', 'I AM A MAN, where STAX hits were written', '&amp; the Lorraine Hotel, now in a museum &mdash;', 'I AM A MAN &mdash; &amp; where STAX hits were written', 'Tape billfold to snare-head now in a museum,'],
 ['his rhythm eternal as the river in Memphis.', 'Jeff Buckley in stage boots sunk under in Memphis.', 'you\'ll sweat through your sheets your first summer in Memphis.', 'slow midnight train whistle cries closer in Memphis.', 'Cement balcony blood of a dreamer in Memphis.', 'Cement balcony stained by a savior in Memphis.', 'A death still unsolved, another lover in Memphis?', 'The heartbeat of life ticking slower in Memphis.', 'His rhythm eternal, a dreamer in Memphis', 'slow midnight train sweaty, summer in Memphis.', 'A death still unsolved, a savior in Memphis.', 'Heartbeat of life ticking slower in Memphis.', 'You\'ll sweat through your sheets, a lover in Memphis.', 'Slow midnight train staining a dreamer in Memphis'],
 ['Paul Simon &amp; son went driving to Graceland &mdash;', 'Killing time redefined to murder a drummer,', 'Backbeat of Al Jackson still rings in the street &mdash;', 'Paul Simon &amp; young son went bouncing to Graceland &mdash;', 'I AM A MAN printed on faded signs &mdash;', 'Now I AM A MAN hangs in the museum,', 'On-hold the whole world taps its toes to Al Jackson,', 'At the Lorraine motel the STAX hits were written,', 'Killing time redefined hanging in a museum', 'On-hold the world hanging in a museum', 'Paul Simon &amp; young son tap toes to Al Jackson,', 'The history stretched like the skin of a snare,', 'Like cinderblock walls built to reverberate sound,', 'Glass pyramid mirroring the mud Mississippi,'],
 ['Jeff Buckley in stage boots sunk under in Memphis.', 'death still unsolved, another lover in Memphis?', 'his backbeat strong as the river in Memphis.', 'history habitually clearer in Memphis.', 'history habitually restless in Memphis.', 'His backbeat eternal, the river in Memphis.', 'Cement balcony stained by a savior in Memphis.', 'death still unsolved, sunk under in Memphis.', 'Death still unsolved as the river in Memphis', 'Death still unsolved &amp; eternal in Memphis', 'his backbeat habitually clearer in Memphis', 'his backbeat habitually restless in Memphis', 'Cement balcony stained by a backbeat in Memphis', 'Death as eternal as the river in Memphis.'],
 ['Hallelujah, Hallelujah, Hallelujah, Hallelujah &mdash;', 'Now I AM A MAN hanging in a museum &mdash;', 'At the Lorraine Motel all the STAX hits were written,', 'On-hold the whole world taps its toes to Al Jackson &mdash;', 'Would you pawn off a life &amp; a home for this song?', 'Sweet tea &amp; pulled pork, diabetes &amp; pudding,', 'But the stories are true about girls &amp; loose shoes,', 'When packing up boxes, best to check those receipts,', 'To abandon a girl &amp; a house for a song?', 'Hallelujah, hallelujah, hanging in a museum', 'Hallelujah, hallelujah, best to check those receipts', 'Hallelujah, hallelujah, &amp; a house for a song?', 'But the stories are true, best to check those receipts', 'Hallelujah, hallelujah, songs &amp; loose shoes'],
 ['cement balcony stained by a dreamer in Memphis.', 'time a flat circle drawn tighter in Memphis', 'his death still unsolved, another lover in Memphis?', 'you\'ll sweat through your sheets your first summer in Memphis.', 'world\'s biggest Bass Pro Shop to wander in Memphis.', 'slow midnight train\'s whistle cries closer in Memphis.', 'Now it\'s a Bass Pro Shop to wander in Memphis.', 'cement balcony stained now to wander in Memphis.', 'world\'s biggest Bass Pro Shop a dreamer in Memphis.', 'history habitually closer in Memphis.', 'world\'s biggest Bass Pro Shop a lover in Memphis.', 'Slow midnight train sweating a summer in Memphis.', 'His death still unsolved, Bass Pro shopper in Memphis.', 'you\'ll sweat through your sheets as you wander in Memphis.'],
 ['Now I AM A MAN hangs in a museum &mdash;', 'Tape billfold to snare drum to deaden the sound &mdash;', 'On-hold the whole world taps its toes to Al Jackson &mdash;', 'Like cinderblock walls built to reverberate sound,', 'Sweet tea &amp; pulled pork, diabetes &amp; pudding &mdash;', 'Glass pyramid mirroring the mud Mississippi,', 'Killing time redefined to murder a drummer,', 'On-hold the whole world taps its toes to Al Jackson,', 'I AM A MAN hanging in the museum,', 'The Lorraine Motel\'s where the soul songs were written,', 'This history taught as the skin of a snare,', 'To abandon a love &amp; a house for a song?', 'On-hold the whole world, where soul songs were written.', 'To abandon a love &amp; to deaden a drum?'],
 ['The stories grow taller &amp; stranger in Memphis.', 'you\'ll sweat through your sheets your first summer in Memphis.', 'slow midnight train whistling closer in Memphis.', 'Glass pyramid stands as a mirror in Memphis.', 'his backbeat eternal, the river in Memphis.', 'Glass pyramid the great muddy mirror in Memphis.', 'midnight train slow-whistling nearer in Memphis.', 'slow midnight train whistle cries closer in Memphis.', 'glass pyramid serves as a mirror in Memphis.', 'death still unsolved, another lover in Memphis?', 'a backbeat eternal, the river in Memphis.', 'world\'s biggest Bass Pro Shop to wander in Memphis.', 'slow midnight train\'s whistle cries closer in Memphis.', 'The rumor-mill burns like wildfire in Memphis.'],
 ['Would you pawn off a life &amp; a home for this song?', 'Once dreamt on Art\'s floor &amp; paid rent in tequila,', 'I once slept on Art\'s floor &amp; paid rent in tequila &mdash;', 'Sweet tea &amp; pulled pork, diabetes &amp; pudding &mdash;', 'Once slept on Art\'s floor &amp; paid rent in tequila,', 'Killing time redefined to murder a dreamer,', 'Like cinderblock walls built to reverberate sound,', 'Would you pawn off a life, pay rent in tequila?', 'Once pawned off a life, paid rent in tequila,', 'Would you pawn off a life to murder a dreamer?', 'Like cinderblock walls, to murder a drummer,', 'Once slept on Art\'s floor, a home for a song &mdash;', 'I pawned off my life to pay for this song &mdash;', 'Sweet tea &amp; pulled pork, three sides &amp; a song &mdash;'],
 ['The whispers of ghosts, "Reed don\'t linger in Memphis."', 'The rhythms of ghosts, "Reed don\'t linger in Memphis."', 'Read traces of ghosts, said "don\'t linger in Memphis."', 'Heard voices of ghosts, "Reed don\'t linger in Memphis."', 'Signs of the ghosts read "don\'t linger in Memphis."', 'The whispers of ghosts read "don\'t linger in Memphis."', 'Heard voices of signs, "Reed don\'t linger in Memphis."', 'The whispers of ghosts read "oh dreamer in Memphis."', 'The rhythms of ghosts read "a dreamer in Memphis."', 'Heard whispers of ghosts "Reed don\'t linger in Memphis."', 'The singing of ghosts, "Reed don\'t linger in Memphis."', 'The song of the ghosts, "Reed don\'t linger in Memphis."', 'To summon the ghosts, Reed don\'t linger in Memphis.', 'Oh rhythm, oh ghost, <em>R</em><em>e</em><em>e</em><em>d</em> <em>d</em><em>o</em><em>n</em><em>\'</em><em>t</em> <em>l</em><em>i</em><em>n</em><em>g</em><em>e</em><em>r</em> <em>i</em><em>n</em> <em>M</em><em>e</em><em>m</em><em>p</em><em>h</em><em>i</em><em>s</em>.']
 ];

var line = 0;

types = (l, t) => {
 setTimeout(() => {
  if (t.slice(0, 4) == "<em>") {
   document.querySelectorAll(".lit")[l].innerHTML += t.slice(0, 10);
   t = t.slice(10);
  } else if (t.slice(0, 5) == "&amp;") {
   document.querySelectorAll(".lit")[l].innerHTML += t.slice(0, 5);
   t = t.slice(5);
  } else if (t.slice(0, 7) == "&mdash;") {
   document.querySelectorAll(".lit")[l].innerHTML += t.slice(0, 7);
   t = t.slice(7);
  } else {
   document.querySelectorAll(".lit")[l].innerHTML += t.slice(0, 1);
   t = t.slice(1);
  }
  if (t.length > 0) {
   types(l, t);
  } else {
   setTimeout(untypes, 512 + random(4096), l);
  }
 }, 32 + random(128));
}

untypes = l => {
 setTimeout(() => {
  if (document.querySelectorAll(".lit")[l].innerHTML.slice(-5) == "</em>") {
   document.querySelectorAll(".lit")[l].innerHTML = document.querySelectorAll(".lit")[l].innerHTML.slice(0, -10);
  } else if (document.querySelectorAll(".lit")[l].innerHTML.slice(-5) == "&amp;") {
   document.querySelectorAll(".lit")[l].innerHTML = document.querySelectorAll(".lit")[l].innerHTML.slice(0, -5);
  } else if (document.querySelectorAll(".lit")[l].innerHTML.slice(-7) == "&mdash;") {
   document.querySelectorAll(".lit")[l].innerHTML = document.querySelectorAll(".lit")[l].innerHTML.slice(0, -7);
  } else {
   document.querySelectorAll(".lit")[l].innerHTML = document.querySelectorAll(".lit")[l].innerHTML.slice(0, -1);
  }
  if (document.querySelectorAll(".lit")[l].innerHTML.length > 0) {
   untypes(l);
  } else {
   types(l, lines[l][random(lines[l].length)]);
   if (l == line && line < lines.length - 1) {
    line++;
    types(line, lines[line][random(lines[line].length)]);
   }
  }
 }, 32 + random(128));
}
 
types(line, lines[line][random(lines[line].length)]);