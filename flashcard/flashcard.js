
var cardNum = 0;

var definitionsAndDefs = []
function generateFlashcards() {
   const inputedTerms = document.getElementById("inputedTerms").value
   const cards = inputedTerms.split(";")
   for (var j = 0; j < cards.length; j++) {
       var cardData  = cards[j].split(":")
       definitionsAndDefs.push(cardData)
}
console.log(definitionsAndDefs)
document.getElementById("flashcard").style.display = "block";
document.getElementById("buttonRow").style.display = "block";
document.getElementById("flashcard").scrollIntoView();
document.getElementById("term").innerHTML = definitionsAndDefs[cardNum][0];
document.getElementById("definition").innerHTML = definitionsAndDefs[cardNum][1];
}
function setCard() {
    document.getElementById("term").innerHTML = definitionsAndDefs[cardNum][0];
    document.getElementById("definition").innerHTML = definitionsAndDefs[cardNum][1];
}

function cardNumber() {
    document.getElementById("cardNumber").innerHTML = `${cardNum+1} out of ${definitionsAndDefs.length-1}`;
}


function next() {
    cardNumber()
    if (cardNum >= definitionsAndDefs.length-2) {
        cardNum = 0;
    } else {
        cardNum++;
    }
    setCard()
    document.getElementById("definition").style.display = "none";
}
function back() {
    if (cardNum <= 0) {
        cardNum = definitionsAndDefs.length-2;
    } else {
        cardNum--;
    }
    setCard()
    document.getElementById("definition").style.display = "none";
}
function showDef() {
    document.getElementById("definition").style.display = "block";
} 
