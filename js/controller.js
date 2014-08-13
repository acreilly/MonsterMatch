
function Controller(deck, view, board, logic){
  this.deck = deck;
  this.view = view;
  this.board = board;
  // this.logic = logic;
  this.logic = new GameLogic(this)
  var self = this;


  // this.checkMatch = function(){
  //   self.matchCount.push(this);
  //   var card1 = self.matchCount[0]
  //   var card2 = self.matchCount[1]
  //   if(card1.classList[1] === card2.classList[1]){
  //     self.view.matchedCards(card1,card2)
  //   } else {
  //     self.view.flipBack(card1, card2)
  //     matchCount = []
  //   }
  // }
}

Controller.prototype = {
  init: function(){
    this.gameStart()
    this.bindListeners()
    // this.matchCount = [];
  },
  bindListeners: function(){
    $("td").on("click", this.view.flipCard);
    $("td").on("click", this.logic.checkMatch);
  },
  gameStart: function(){
    this.deck.buildDeck()
    this.board.buildBoard(this.deck)
  }
}