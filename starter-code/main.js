var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour || cardTwo === cardThree || cardOne === cardThree || cardOne === cardFour) {
	alert("Sorry, try again.");
}
if (cardTwo === cardOne || cardThree === cardFour) {
	alert("You found a match!");
}