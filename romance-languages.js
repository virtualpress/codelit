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
 var lit = document.getElementsByClassName("citation");
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

var text = "";

var quotes = ['"I am suggesting that heterosexuality, like motherhood, needs to be recognized and studied as a political institution — even, or especially, by those individuals who feel they are, in their personal experience, the precursors of a new social relation between the sexes." (p.17)', '"Profound scepticism, caution, and righteous paranoia about men may indeed be part of any healthy woman\'s response to the misogyny of male-dominated culture, to the forms assumed by \'normal\' male sexuality, and to the failure even of \'sensitive\' or \'political\' men to perceive or find these troubling." (p.35)', '"The fact is that the workplace, among other social institutions, is a place where women have learned to accept male violation of their psychic and physical boundaries as the price of survival..." (p.22)', '"It seems more probable that men really fear not that they will have women\'s sexual appetites forced on them or that women will want to smother and devour them, but that women could be indifferent to them altogether, that men could be allowed sexual and emotional — therefore economic — access to women only on women\'s terms, otherwise being left on the periphery of the matrix." (p.22)', '"I do not wish to psychologize here, but rather to identify sources of male power. I believe large numbers of men could, in fact, undertake child care on a large scale without radically altering the balance of male power in a male-identified society." (p.18)', '"Heterosexuality has been both forcibly and subliminally imposed on women." (p.31)'];

function quote(n) {
 hidden(document.getElementById("lit"));
 text = document.getElementsByClassName("citation")[n].innerHTML;
 document.getElementsByClassName("citation")[n].innerHTML = quotes[n];
 visible(document.getElementsByClassName("citation")[n]);
}

function unquote(n) {
 hidden(document.getElementsByClassName("citation")[n]);
 document.getElementsByClassName("citation")[n].innerHTML = text;
 document.getElementsByClassName("citation")[n].style.visibility = "inherit";
 visible(document.getElementById("lit"));
}

function touches(n) {
 if (document.getElementsByClassName("citation")[n].innerHTML != quotes[n]) {
  quote(n);
 } else {
  unquote(n);
 }
}