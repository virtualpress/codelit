clearInterval(rainbow);

function spectrum() {
 color = "hsl(" + hue + ", 100%, 90%)";
 var n = 0;
 var links = document.getElementsByTagName("a");
 while (n < links.length) {
  links[n].style.color = color;
  n++;
 }
 n = 0;
 var lit = document.getElementsByClassName("lit");
 while (n < lit.length) {
  lit[n].style.backgroundColor = color;
  n++;
 }
 document.body.style.color = color;
 if (hue != 359) {
  hue++;
 } else {
  hue = 0;
 }
}

spectrum = setInterval(spectrum, 32);

var excoriator = {

 "A LONG TIME AGO": "<p><span class=\"lit\" id=\"inside\">A LONG TIME AGO</span><p>You haven't seen Max since you were both eighteen. That was nine years ago. Prom night. Your date ditched you for his ex, who he'd never stopped seeing in the first place, so you wound up driving circles around town, thinking how it would be to accelerate, go flying off the bridge into dark water, until you figured you were hungry and went into a shitty little diner and there was Max. He wore a tux and sat by himself in a booth, eating oyster crackers and playing poker on his laptop. An untouched bowl of soup sat cooling in front of him surrounded by plastic cracker packets.</p><p>Turned out his dad thought he was at prom with everybody else. Max had to put in at least another hour or so out of the house to make the ruse believable. He didn't seem ashamed or embarrassed when he told you this. You thought he would've had an easier life if he felt embarrassed more often, or at least knew when to fake it. Embarrassment is the loser's way of letting everyone else know you're sorry that you're the way you are, and you wish you weren't just as much as they do &mdash; no, more. But the Scab either didn't feel <span class=\"lit\">shame</span>, or else he kept it to himself.</p><p>That night you went back to his house with him. The two of you talked for hours. His room was a dark den plastered with posters for industrial bands with names like Throbbing Gristle, which was what his face looked like. For as long as you'd known him his skin was pitted with sores. You didn't know if he just had Bukowski-level acne or some kind of disease or was on drugs or what, but he couldn't keep his hands off himself &mdash; always digging his fingernails into his skin, so nothing ever healed.</p>",

 "CAVE": "<p><span class=\"lit\" id=\"get going\">CAVE</span><p>Max says everything is ready for your initial <span class=\"lit\">descent</span>. He's ordered all the equipment, got it delivered in town. He tells you that if on some quantum level, perception is reality, then your eyes and your minds will create the cave as you travel through it, make it real in some invisible way you aren't yet able to understand.</p><p>\"Down there are places no light has ever touched,\" he says. \"You don't have to be anyone. You can't be &mdash; in that kind of dark, you can't pretend the way we do up here. Don't you want to know what it would feel like to fully apply yourself for once? To just go in and <span class=\"lit\">give it everything</span>?\"</p>",

 "COULD NOT HELP HIMSELF": "<p><span class=\"lit\" id=\"the scab\">COULD NOT HELP HIMSELF</span><p>You once saw a news story about a hoarder house on TV. A woman lived there with her pet parrot. She lived there for years and years, the space in the house where she could move growing smaller and smaller every day, until eventually all that was left was an eight-by-eight square of ground by the back door where she slept in a sleeping bag atop a twin mattress. She couldn't reach the windows anymore to open the curtains. Even if she could, no sunlight could have shone past the tremendous piles of stuff: heaps of magazines, clothes and sheets and blankets and tablecloths and towels, cardboard crates brimming with unrecycled glass jars and plastic bottles and milk jugs and juice cartons and soda cans and cereal boxes, file cabinets hemorrhaging paper, everywhere paper, and all of it pressing down, compressing the bottommost layer into a dense solid bedrock like the Earth's mantle, a kind of sludge forming in corners of the house where the roof leaked, a primordial ooze where the trash had turned liquid, had begun to sprout, to bear life. The house had come alive around her. It must have been warm and damp in there, like a mouth that had closed around her and would not open. She could not reach the parrot. All day it sat in its cage in the dark and plucked out its feathers until there were none left, only raw bare skin, gray-pink and dimpled like goosebumps.</p>",

 "DESCENT": "<p><span class=\"lit\" id=\"cave\">DESCENT</span><p>\"After you,\" Max says, handing you a flashlight. He follows you into the cave, where you duck your head and then bend at the waist and finally get on all fours and crawl forward until the passage widens again and you see by the beam of the flashlight that you have reached a cavernous drop. Max sidles up beside you. You shine the light at his face and he throws a hand over his eyes.</p><p>\"What the hell?\" he says.</p><p>\"Sorry,\" you say. \"Just checking.\"</p><p>He makes no comment on that, which is worse than the ribbing you'd expected, as if he considers it reasonable for you to have feared he might have been someone else, or not who he had appeared to be on the <span class=\"lit\">surface</span>.</p><p>He takes a coin from his pocket and tosses it into the air. You strain to hear it drop, but aren't sure if the noise is real or only your brain supplying stimulation where none exists, making noises out of silence as your eyes invent shapes in the dark. In the distance, maybe, you hear water.</p><p>\"You see?\" he says. \"It could go on for miles, or dead end right here. We won't know until we get down there.\"</p><p>He's wrong, of course. You know what's down there. Water and stone. The same thing all around you right now, in the damp and lightless cool. If he's imagining an alien territory, something truly other, he won't find it here. It will just be <span class=\"lit\">the two of you in the dark</span>.</p><p>It must have been the same for every surgeon who's opened your body to the light. Gone are the days when the inside of the body was yet an unmapped continent. They knew, more or less, within certain accepted standards of deviation, what they would find inside of you. They knew the names of every hot pulsing shape, and where to cut. Was there any mystery in it for them? Did they still wonder what they might find, if one day it might be something other than a mirror?</p><p>You woke and the body was already sealed shut gain, like a tomb. Whatever was inside you, it was not for you to see. For a while it was strange, having been opened and closed. You wondered and worried about that cavern inside you, about what might have slipped out or in, unseen, and now lie curled up within, in a place that was you but where you could never go.</p><p>But you know there is no such interloper. The truth is worse. The truth is that, just like the cave, you know exactly what you'd find if you could go spelunking down your own throat. Just you. Meat and blood and bone. Heat and electricity. Minerals and water.</p>",

 "DROP EVERYTHING AND GO": "<p><span class=\"lit\" id=\"excoriator\">DROP EVERYTHING AND GO</span><p>It's a three hour drive from where you live to his place in Kentucky. Dead deer blasted open by cars lie hot pink and pretzeled on the sides of the road. In your rattling hatchback you wind between hills and frozen fields bristling with bare trees. It's January. Frost crusts the fields. Barns and houses missing glass in the windows and rusted-out cars watch you from way off, scattered like objects left behind in a house where people left in a hurry. The impression of abandonment is so extreme that by virtue of its very excess it evokes its opposite. You feel a presence watching you from inside the car and outside in the cold, surrounding you yet invisible. You turn down a gravel road and don't pass another car or see another structure for miles. The truck bumps and shudders down a steep incline and then there's <span class=\"lit\">the cabin</span>, right where <span class=\"lit\">the Scab</span> said it would be.</p>",

 "EXCORIATOR": "<p class=\"excoriator\">EXCORIATOR</p><p>The Scab calls on a Thursday, says he has something to show <span class=\"lit\">you</span>. When he says that he has not seen or spoken to anyone in weeks, you believe him. He tells you not to ask questions &mdash; just <span class=\"lit\">drop everything and go</span>.</p>",

 "FORCEPS": "<p><span class=\"lit\" id=\"surface\">FORCEPS</span><p>You take the forceps. They're cool and slender and look just like the ones a real dentist would use and you guess this is just one more thing he's ordered online and prepared in advance. For you.</p><p>\"You're going to want to rock it back and forth,\" he says. He's matter of fact. Almost smug, now that he's got you where he wants you. \"If it doesn't come out in one piece, you'll have to go back in.\"</p><p>He sits on a wooden chair, takes another swig from the bottle, then tilts his head back and opens his mouth. Gestures you toward him, like: all right already, what are you waiting for?</p><p>\"This is sick,\" you say. \"Are you sure?\"</p><p>\"It's the second to last molar on my right,\" he says.</p><p>You reach the pliers into his mouth. Your hands shake. The metal clicks against his <span class=\"lit\">teeth</span>.</p>",

 "GET GOING": "<p><span class=\"lit\" id=\"stockpile\">GET GOING</span><p>The two of you hike out into the pine woods. You don't ask where you're going because it doesn't matter. Neither of you talk much. At one point Max rakes his eyes up and down your body and says, \"So are you a tranny now, or just a dyke?\"</p><p>You decline to answer and tell him to embrace <span class=\"lit\">the fucking mystery or whatever</span>, at which he gives you a high five and says he knew he called the right fag for the job.</p><p>Frozen leaves crunch beneath your shoes and the bare branches rattle over your heads like a bunch of kids waving sticks. Max stops and says this is it. The ground yawns open into a black cavern.</p><p>You've been in a <span class=\"lit\">cave</span> just once. A tourist trap with stairs and handrails. This is something else. Cool air sighs out of it. It's steep and craggy and vanishes into darkness.</p><p>\"This cave isn't on any maps,\" Max says. \"Yet. I found it a couple weeks ago, just by chance.  As soon as I saw it I knew this is why I'm out here, and I thought, who can I tell? And I remembered you, and I thought, hell, why not give you a chance. You might get it. And sure enough, here you are.\"</p><p>\"Get what?\"</p><p>His smile is slow and terrible. \"Don't act like you don't know. We're going to see how far it goes, until it stops or we do.\"</p><p>\"Look, man, I think you've been out here alone too long. It's making you weird.\"</p><p>\"Shut up, Jerko,\" he says. \"It's too late to play the random bystander. You're here, aren't you? You came all the way out here for this.\"</p>",

 "GIVE IT EVERYTHING": "<p><span class=\"lit\" id=\"cave\">GIVE IT EVERYTHING</span><p>You've never given your all to anything or anyone, not once. How does he know? What is that sly knowing gleam in his eye, that smarmy triumphant grin, like he's got you pinned and all figured out, like he knows you for the flake and the slacker and the zombie that you are, like he's seen your internal wasteland? Apply yourself? Who does he think he's talking to? Not you. It can't be you. <span class=\"lit\">Not you</span>, whose elementary report cards once read things like \"lethargic\" and \"could be average with a little effort\" before they read nothing at all once it became clear you were someone on whom attention was wasted.</p>",

 "IF YOU DON'T TRY, YOU CAN'T FAIL": "<p><span class=\"lit\" id=\"shame\">IF YOU DON'T TRY, YOU CAN'T FAIL</span><p>Fuck if she didn't pluck your guiding principle right out of your head. Before you gave in and transitioned &mdash; and it was giving in, succumbing to something larger than yourself, submitting to a desire you were unable to restrain (and you'd tried, you really had tried, and failed anyway) &mdash; before you gave in, things were easier. You hadn't tried. You hadn't failed.</p><p>These days you're failing in every direction all at once. You unsettle strangers, force them to wonder what you are, which undermines the entire premise of categories, into which people must fit neatly and immediately or not at all. If you \"pass\" as anything, it's as a mistake. Whether you're getting ma'am'ed or sir'ed, there's an edge to it, sometimes jest and sometimes threat, often both. You prefer the impartial, \"Hey, you there.\" \"You there\" is as good a name as any you've answered to.</p>",

 "INSIDE": "<p><span class=\"lit\" id=\"the cabin\">INSIDE</span><p>Here is the evidence that Max has been living by himself out here since the spring. Empty cans of soup and soda stand in rows beside the sink and a graveyard of liquor bottles crowds the top of the fridge. Three heavy-duty trash bags slump against one wall, lumpy and bulging. There's all this busted up electronic shit &mdash; old computers and monitors, gutted radios, a PlayStation propped on a mountain of cables and wires. A lot of it looks like climbing or camping gear: buckles and straps and rope. His <span class=\"lit\">stockpile</span> attests to large quantities of idle time and attention deficit. Windows along the back wall let in gray light. It's late afternoon but sunset is already coming on. You try to see the shape of whatever is wrong with him, but it won't come together, maybe because you're up too close now, right inside of it.</p><p>\"Yeah, I've been cleaning. You should've seen this place a couple weeks ago,\" Max says, kicking one of the trash bags. \"Usually I burn the trash out back, but I hadn't done that in you don't want to know how long. You couldn't hardly walk in here. But now it's nice and pretty for Swerko.\"</p><p>His fingers search along his jaw and pick at one of his remaining scabs while he talks as if the mind that controls his mouth is different than the one controlling his hands or is at least unaware that his hands mutinied <span class=\"lit\">a long time ago</span>.</p>",

 "IT MUST FEEL GOOD": "<p><span class=\"lit\" id=\"the fucking mystery or whatever\">IT MUST FEEL GOOD</span><p>And you remember that he was there in freshman English when you got so mad listening to the teacher's voice go on and on, mad enough all you could think about was how badly you wanted to thrash around in a tub of shattered glass. Anger came up from nowhere and threw itself into you from every direction, much more of it than could fit, so you punched yourself in the face. You couldn't tell if it hurt or if it felt good, so you did it again, and it was both. You'd never punched anybody else before and still haven't. Turning it all inward, like a girl. Sometimes you wonder how it would feel <span class=\"lit\">to hurt someone</span> else &mdash; if it would feel different, or the same.</p>",

 "MYTH OF THE UNBROKEN SELF": "<p><span class=\"lit\" id=\"you\">MYTH OF THE UNBROKEN SELF</span><p>It's nothing new. The old paradox about the knife or the broom: if the hilt and blade, the head and the handle are replaced, is it still the same object? Brighter thinkers than you have long pondered the ontological implications of Theseus' Ship, repeatedly damaged and repaired until not one original board or nail remained. You've got nothing new to add. Personally, you prefer the viscera of the Buddhist paradox in which a traveler encounters two demons, one who tears him limb from limb, the other who reassembles him from the parts of corpses. You don't know if he's the same person in the end or why it matters, but you think you know something about how he felt in the aftermath. Ravaged and indestructible. Sort of hungry, maybe.</p><p>If all the parts of yourself you've excised came together again and formed a new body, what would it say? The cells you've shed, the blood you've lost or donated or sold, your discarded uterus and breast tissue, your necrotic left nipple (gone but not forgotten), all the uterine lining flushed down the toilet back in the misbegotten time of your fertility, the memories you've forgotten, the nail clippings and hair, the phantom estrogen and progesterone haunting your bludgeoned endocrine system, the ruptured appendix, the baby and wisdom teeth &mdash; what kind of creature would that be?</p>",

 "NOT YOU": "<p><span class=\"lit\" id=\"give it everything\">NOT YOU</span><p>Before you rid yourself of photographic evidence of the past, sometimes you'd be ambushed by some fragment of the person you killed and whose place you took. Her name and image glowing on a screen. Her body whole and not yet dismembered, though already you were simmering away inside her, growing like a cancer, infiltrating and undermining like a wood-eating insect chewing up the walls of a house whose facade appears intact until one day it crumbles and reveals that it was picked to the bone years ago.</p><p>You live inside her corpse. Mutilate it, to better suit you. You doppelganger, murderer, cannibal. You wear her body, possess it like a demon, make it walk around and speak and tuck it into bed. You take pleasure in this &mdash; <span class=\"lit\">the red pleasure of killing</span>. Do not deny it.</p><p>If you met each other down there, you and not-you, would you recognize yourselves? It would be like seeing your own corpse coming to greet you, would be death, because you cannot both exist at once &mdash; if the not-you is here, then you are not.</p><p>You used to imagine that meeting. Imagine waking up to her standing at the foot of your bed, looking down at you, at the mess you've made of her, and she would say, what have you done. What have you done. You were supposed to be a dream. You weren't supposed to be real. You were supposed to be still and not make a sound, but it's too late for that now. What have you done?</p>",

 "SHAME": "<p><span class=\"lit\" id=\"a long time ago\">SHAME</span><p>Until about a month ago, you had this girlfriend with no eyebrows. Every morning she drew herself a pair with a brown pencil. She said she plucked them because she preferred the ones she drew herself, but that was a lie. She didn't have eyebrows for the same reason she wore her bangs swept over to hide the bald spot at her temple where her hairline eroded a little more every day. If she could've had eyebrows, she would've, but those tender new shoots of hair never stood a chance against her habit of pulling out her own hair.</p><p>Sometimes she'd forget herself and do it right next to you. You'd be watching TV and she'd reach up and start plucking hairs out of her head. You pretended not to notice until one day you caught her wrist while she was doing it. She started to cry. You let her go real quick. You thought you had been gentle, but now she was crying, as if you'd hurt her, when you both knew that you hadn't. This angered you. You were not the kind of person who hurt and frightened people, especially women. But here she was, hurt and frightened, because of you.</p><p>She told you that she had been pulling her hair out since she was fourteen. Grooming habit had mutated into compulsion. All her efforts to stop had all failed. She'd tried wearing hats and gloves, wrapped band-aids and tape around the ends of her fingers, dabbled in therapy and medication. Ten years later, she was still pulling out her hair. It was humiliating, she said, to know that she couldn't control herself. It made her feel like an animal. Like something that didn't know better, something that couldn't think or change. As if the perfect illusion of self-control was part of what makes someone human.</p><p>\"I wish I'd never tried to stop at all,\" she said. \"<span class=\"lit\">If you don't try, you can't fail</span>. It would be better if I hadn't tried. Then I wouldn't know what I know now.\"</p><p>Remembering her reminds you of helplessness. Hers, yours, the Scab's. This makes you a little sick to your stomach. Helpless things have that effect on you.</p><p>This is inconvenient, since they happen to be everywhere.</p>",

 "STOCKPILE": "<p><span class=\"lit\" id=\"inside\">STOCKPILE</span><p>Max leads you down to the basement. While he fumbles for the light, he tells you that his grandfather built this cabin as a place where his family could hunker down at the end of the world or the collapse of society or whatever. He had some fond, faded memories of spending New Year's Eve, 1999 here as a toddler. He'd returned this winter alone. Where the others have gone to, why he is the only one here, he doesn't say. He finds the light switch. Beneath the glow of bare bulbs, rows of plywood shelves stacked with flour and canned peaches and gallons of water extend into the dark.</p><p>\"There it is,\" he says. \"The family inheritance.\"</p><p>He pats a nearby shelf too forcefully to be fond. \"My dad used to take me fishing out here,\" he says. \"I hated it. Hated to hook a fish. And the fishing was already his compromise, because I cried before we even shot anything the first time he took me hunting. But he didn't tell me to toughen up or anything like that. He was always, I don't know, gentle with me, I guess. He looked like the kind of guy who'd get mad he had a sissy for a kid, maybe the type who'd smack you around a little for it, but he never did. He just let me be. Still, it must have embarrassed him, don't you think?\" He pauses, shrugs. \"This is a stockpile three generations in the making. Every time we came here, Dad made sure he brought the same amount of supplies we'd use, plus extra. To build up the reserves. And now here I am, eating it all up. End of the line. It all stops here.\"</p><p>He laughs, apparently pleased with himself and his bloodline-ending proclamation. Then he stops, winces, presses his jaw. You can see his tongue probing at his back teeth through his cheek. \"Hey, look, I know you just got here, but I have a favor to ask. I've got a bad tooth that's just killing me. Needs to get yanked. Would you?\"</p><p>\"Fuck no.\"</p><p>He grins. Then he claps you on the back and starts back up the stairs. \"Come on. We got to <span class=\"lit\">get going</span> if we want to see this thing and get back before dark.\"</p>",

 "SURFACE": "<p><span class=\"lit\" id=\"descent\">SURFACE</span><p>The sun goes down not long after the two of you climb out of the cave. It's dark the last half hour of your walk back to the cabin, where Max swigs whiskey and hands you a pair of <span class=\"lit\">forceps</span>. He touches the side of his jaw lightly with two fingers. \"I can feel my heart beating in my tooth,\" he says. \"It's got to go, but I can't do it myself. Come on, Swerko. Have mercy. Are you really just going to let me suffer?\"</p>",

 "TEETH": "<p><span class=\"lit\" id=\"forceps\">TEETH</span><p>The second you step back, he's up and fuming at you, calling you a pussy and saying you can't stop now.</p><p>\"Jesus Christ, would you shut up?\" you say. \"Sit down. I just need the flashlight. I need to see what I'm doing.\"</p><p>He's lured you out here into some kind of reverse Saw trap, where you're the one dishing out the hurt instead of taking it. Is it better? You aren't sure. You don't think so. But you're here, aren't you? What's stopping you from leaving? Sure, it's dark. It'd be a dangerous and miserable drive. Still, you could refuse. Let him shout himself hoarse until morning, then go.</p><p>You grab one of the flashlights he brought to the cave and shine it into his mouth. His pupils shrink to scary pinpricks in the light, constricting like tiny fists. The light fills his mouth but can't reach down his throat. His body is so full of darkness.</p><p>You bend closer, trying to see further. You hold the flashlight up with one hand. The other reaches into his mouth before you think to stop it. Two of your fingers press down on teeth and tongue, nudging his jaw open wider. Your fingers creep further until he gags. He doesn't really make a sound, but the spasm of his throat and the wetness of his eyes give him away. You stop but don't draw your fingers back.</p><p>\"Is this what you want?\" you say. He doesn't try to speak, doesn't nod or shake his head. His open mouth stretches at the sides in a gaping smile. His eyes leak and behind the veil of water his pupils have grown into two dark planets. You remember reading somewhere about how the force it takes to bite off a human finger is roughly equal to the effort of biting through a baby carrot. You watch your reflection in his brimming eyes as you press your fingers deeper with grim determination until the hot muscle of his throat contracts around them and his tears distort the mirrors in his face so you can't see yourself anymore, only his joy and concentration as he shudders with the effort of staying still and refusing to vomit. And only now, with that image of yourself finally annihilated, do you curl your fingers to beckon the dark in his throat and invite it out.</p>",

 "THE CABIN": "<p><span class=\"lit\" id=\"drop everything and go\">THE CABIN</span><p>The cabin is larger than you had expected, and not nearly so dilapidated. You'd braced yourself to be confronted with a one-room shack with blasted-out windows covered by flapping tarps, holes punched through floorboards down into a dank crawlspace. You realize only now, confronted instead by your own dashed expectations, that some part of you had relished this fantasy, had liked the idea of this reunion taking place in a hovel at the end of the world.</p><p>Max stands on the sagging porch beneath a severely pitched roof, grinning with his hands stuffed in the pockets of his cargo pants. He's let his hair grow out. It hangs in scruffy waves almost down to his shoulders. Now his face is more scars than sabs. Shallow craters, like the kind you saw on a program late one night in which broken people who claimed to be victims of alien abduction rolled up their sleeves or pant legs to reveal the smooth scoop-marks where their bodies had been entered, where devices of unknown purpose and origin were inserted, where samples were supposedly taken. The survivors revealed these scars with a gravity which rendered them explicit, like private parts &mdash; and indeed there has always been something obscene to you in seeing someone else's wounds, even ones long healed. Especially ones long healed. Evidence of the body's permeability, all the ways it can be penetrated. In this light, Max's whole face is obscene.</p><p>\"Hey Swerko,\" he says. Just like in high school, when everybody called you by your last name &mdash; teachers and classmates, friends and strangers. It should've been a sign of camaraderie, an in-joke, but it wasn't. It was just a thing somebody started that caught on. It had nothing to do with you. \"What do you think of the digs?\" Max says. \"Come on <span class=\"lit\">inside</span>, check out our base of operations.\"</p>",

 "THE FUCKING MYSTERY OR WHATEVER": "<p><span class=\"lit\" id=\"get going\">THE FUCKING MYSTERY OR WHATEVER</span><p>In his bedroom on the night of prom, Max hugged one of his pillows in his lap while you played Battleship and smoked a joint out his open window. Little bloodstains dotted his pillowcase. At one point he glanced down at his hand after it had picked open a scab on his forearm. His fingers had blood on them. It was the first time you'd ever caught him noticing himself. His face was careful and blank, like whatever reaction he might have had was one he'd folded up and put away a long time ago.</p><p>He caught your eye, and it felt like the jig was up or something, like he knew that you knew that he knew, so you said, \"What's the fucking deal with you, man, I mean really?\"</p><p>He scoffed, shook his head, and sank your destroyer. He said, \"Get a more interesting question, dipshit. Your move.\"</p><p>Up until then, though, you'd been talking all right. Getting along. So you said, \"But really. Why do you do that to yourself?\"</p><p>You thought maybe nobody had ever asked him that before. You thought he might crack, get upset, tell you to mind your own goddamn business or something. Instead, he just studied the game pieces and sounded bored, or maybe disappointed, like you'd just asked him something so stupid it had made him lose all hope for a better world than this one. He said, \"I guess <span class=\"lit\">it must feel good</span>, or else why would I keep doing it.\"</p>",

 "THE RED PLEASURE OF KILLING": "<p><span class=\"lit\" id=\"not you\">THE RED PLEASURE OF KILLING</span><p>Q: If you could go back in time, fold yourself back up into something small enough to fit inside her ribcage, would you do it all again?</p><p>A: As many times as it takes. With pleasure.</p><p>Q: How did it feel, when you killed her?</p><p>A: Like taking a breath after having your head held under water. Like getting away with something terrible.</p><p>Q: Why does it feel so good, getting away with terrible things?</p><p>A: You said it was \"like\" getting away with something terrible. You never said you actually got away with it.</p><p>Q: But didn't you? Here you are.</p><p>A: You hope so, but the truth is you aren't so sure.</p>",
 
 "THE SCAB": "<p><span class=\"lit\" id=\"drop everything and go\">THE SCAB</span><p>You can't now say for sure who came up with the name. It might not have been you &mdash; maybe it was someone else. You hope it was someone else. Either way, it caught on.</p><p>You used to sit behind him in sophomore chemistry. You had no choice but to watch as he picked himself bloody. The whole class, all fifty minutes, his hands never stilled. They moved like two independent creatures. They combed through his hair and dug fingernails into his scalp, into his face, the back of his neck, down his shirt collar, across his shoulders. He wore only black. You assumed he bought the t-shirts in bulk at a superstore, where they probably came rolled in tight cylinders inside a plastic bag. Plain black cotton, like a uniform. On the very few occasions you saw him in another color, the fabric was either already spotted with old stains or else dotted with bright red pinpricks.</p><p>His behavior was not accompanied by any obvious outward sign of distress. He kept his head down and scribbled unintelligible gibberish in heavy metal fonts in his notebook, a faint smirk on his face. He didn't seem to notice that he was publicly mutilating himself. Of course, that was a lie. You recognized it as such. How could you not? He knew what he was doing. He had to. You could only conclude that he just <span class=\"lit\">could not help himself</span>.</p><p>His name is Max. You remember that, for what it's worth.</p>",

 "THE TWO OF YOU IN THE DARK": "<p><span class=\"lit\" id=\"descent\">THE TWO OF YOU IN THE DARK</span><p>Both of you stoned in the small cave of his room, sitting on the dirty sheets of his bed taking sips of fresh air through the open window, his eyes glassy and his filthy smear of a grin as he leans into you and seals his mouth against yours and clamps his hands against the back of your skull so you can't jerk back and it isn't a kiss, his lips and tongue are still, and he exhales into your mouth so long you're forced to breathe in, to suck the smoke from his lungs into yours, and you pass that air back and forth until both of you are dizzy and gasping, your vision fuzzy, your skin prickling, flashing hot and then cold. You don't talk about it. You leave and you don't see him again. You try to blame him for all the ways your body has betrayed you, for every violation. You try and fail.</p>",

 "TO HURT SOMEONE": "<p><span class=\"lit\" id=\"it must feel good\">TO HURT SOMEONE</span><p>When you were a kid, your mother had this old spaniel dog named Lulu who limped around bumping into walls and pissing on the floor. Her eyes were cloudy and her black fur had thinned so that you could see the pale, translucent skin underneath, more a membrane than a skin, like the thin clear casing around a sausage. She was not a nice dog. Actually, she was kind of terrible. She hated people, especially children and men, and would growl and snap at anyone who tried to touch her. Once you tried to give her a cuddle and she almost tore your ear clean off your skull. You respected her for that. Lulu wasn't easy to love, but you loved her anyway, and so did Mom, even though you think she sometimes wished Lulu would just crawl into a corner and die quietly.</p><p>Mom also had a boyfriend who worked on cars. He was okay. By that you mean he mostly didn't get in your way or try and be too chummy with you, and he picked up after himself better than other boyfriends she'd had. One day when you were ten you stayed home from school to sleep off a fever. You woke with a painful, scratchy throat. When you went into the kitchen for some water, there was the boyfriend in wet socks, cursing and having just stepped in a puddle of Lulu's urine. She'd stepped in it too and was slipping around, confused, trapped between his legs and the oven. He tried to nudge her out of the way with his foot, but she nipped at him and growled. Then he kicked her twice in the ribs. First softly, almost shy. Then harder, as if the first kick had only been to try it out before he made a commitment.</p><p>When he saw you watching, his face seemed to shrink as if he were retreating behind it, the light of life sinking down beneath his skin, leaving a mask all pale and still on top while he hunkered down deeper inside where you couldn't see him.</p><p>He wasn't a dog kicker. He was a nice guy. Other people kicked dogs, but not him. What he did when he was alone didn't count. Everyone knows that doesn't count.</p><p>Except now this ugly stupid kid had seen him and ruined everything. Now he couldn't look at the kid without remembering that he was a dog kicker, and because the woman he was seeing had made the kid, now he couldn't look at her, either.</p><p>That boyfriend taught you some things about violence. About where it's safe to put. You are the animal you can get away with kicking. You are your own dog.</p>",

 "YOU": "<p><span class=\"lit\" id=\"excoriator\">YOU</span><p>Who's asking? As for you, there's not much to say. You work for a security company. Your job is to repair and install fire alarms. It is not difficult. When you turned eighteen you left home and moved to a city where no one knew your name. It has been nine years and you live there still. The people there know only the name you gave yourself. You prefer it that way. Still, the discontinuity occasionally disorients you. The way your life has come apart, like unhitched boxcars &mdash; how you snapped the <span class=\"lit\">myth of the unbroken self</span> in half like a stick when you cut ties with the only place you'd ever known, the only people who'd ever known you &mdash; and would not know you now.</p>",
 
}

function lit() {
 if (event.target.id.length > 0) {
  document.getElementById("page").lastElementChild.innerHTML = excoriator[event.target.id.toUpperCase()];
 } else {
  document.getElementById("page").lastElementChild.innerHTML = excoriator[event.target.innerHTML.toUpperCase()];
 }
 for (var n = 0; n < document.body.getElementsByClassName("lit").length; n++) {
  document.body.getElementsByClassName("lit")[n].addEventListener("click", lit);
 }
}

for (var n = 0; n < document.body.getElementsByClassName("lit").length; n++) {
 document.body.getElementsByClassName("lit")[n].addEventListener("click", lit);
}