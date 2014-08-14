function GameLogic(controller){
  this.controller = controller;
  this.matchCountArray = [];
  this.cardsLeft = 0;

  this.checkMatch = function(){
    var gamelogic = controller.logic
    var matchCount = controller.logic.matchCountArray
    matchCount.push(this);

    if ( matchCount.length === 2 ) {

      var card1 = matchCount[0]
      var card2 = matchCount[1]

      if ( card1.classList[1] === card2.classList[1] && card1.classList[2] != card2.classList[2]) {

        controller.view.matchedCards(card1,card2);
        gamelogic.cardCounter()

      } else {
        controller.view.flipBack(matchCount);
      }
      controller.logic.matchCountArray = []

    } else {

      matchCount = []
      controller.view.flipBack(matchCount)

    }
  }

  this.cardCounter = function(){
    this.cardsLeft += 2
    if ( this.cardsLeft === this.controller.deck.deckArray.length){
      alert("YOU WON")
      this.controller.gameOver()
    }
  }
}