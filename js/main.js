

console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);

// console.log("User flipped " + cardThree);

//var cards = ["queen", "queen", "king", "king"];

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

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!"); 
	}
	else {
	console.log("Sorry, try again.");}
};

var flipCard = function(cardID){
	console.log("User flipped " + cards[cardID].rank);
	if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You got a Match!");
	}
	else {
	alert("No match found!");
	}
	cardsInPlay.push(cards[cardID].rank);
	
};
	checkForMatch();	
	flipCard(0);
	console.log("cardImage");
	console.log("suit");
	flipCard(2);
	console.log("cardImage");
	console.log("suit");
