// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "When you play the game of thrones, you win or you die. There is no middle ground.",
      "Winter is coming.",
      "You know nothing, Jon Snow.",
      "I dont plan on knitting by the fire while men fight for me. I might be small, Lord Glover, and I might be a girl, but I am every bit as much a Northerner as you… and I dont need your permission to defend the North.",
      "Tell Cersei. I want her to know it was me.",
      "Chaos isn’t a pit. Chaos is a ladder.",
      "The man who passes the sentence should swing the sword.",
      "Yes. All men must die, but we are not men.",
      "Thats what I do: I drink and I know things.",
      "Youre going to die tomorrow, Lord Bolton. Sleep well.",
      "If you think this has a happy ending, you havent been paying attention.",
      "There is only one thing we say to death: Not today.",
      "The things I do for love.",
      "Any man who must say, ‘I am the king,’ is no true king. I’ll make sure you understand that when Ive won your war for you.",
      "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;