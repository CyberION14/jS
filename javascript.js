<!DOCTYPE>
<h1>Hello World!</h1>
<script type="text/javascript">
//javascript
var people = ["Alice", "Bob", "Carol"];
var verbs = ["yelps", "chatters", "blurts"];
var nouns = ["turtle", "book", "tomato"];
var phrases = ["loves rock and roll", "was eaten by a lion", "walked across the street"];
var person = people[Math.floor(Math.random() * people.length)];
var verb = verbs[Math.floor(Math.random() * verbs.length)];
var noun = nouns[Math.floor(Math.random() * nouns.length)];
var phrase = phrases[Math.floor(Math.random() * phrases.length)];
// Declare your madlibs function below this line:
function madlibs(person, verb, noun, phrase) {
var person = people[Math.floor(Math.random() * people.length)];
var verb = verbs[Math.floor(Math.random() * verbs.length)];
var noun = nouns[Math.floor(Math.random() * nouns.length)];
var phrase = phrases[Math.floor(Math.random() * phrases.length)];
  return person + " " + verb + " about the " + noun + " who " + phrase + ".";
	console.log(madlibs);
};
</script>
<p></p>
