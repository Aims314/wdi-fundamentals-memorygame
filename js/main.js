

console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);

// console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//var cardOne = cards[0];

//cardsInPlay.push(cardOne);

//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];

//cardsInPlay.push(cardTwo);

//console.log("User flipped " + cardTwo);

//if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	//alert("You got a Match!");
//}

//else {
	//alert("No match found!");
//}

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!"); 
	}
	else {
	console.log("Sorry, try again.");}
};

var flipCard = function(cardID){
	console.log("User flipped " + cards[cardID]);
	if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You got a Match!");
	}
	else {
	alert("No match found!");
	}
	cardsInPlay.push(cards[cardID])
	
};
checkForMatch();	
flipCard(0);
flipCard(2);

