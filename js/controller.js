
function Controller(deck, view, logic){
  this.deck = deck;
  this.view = view;
  var self = this
  this.init = function(){
    this.deck.buildDeck()
    var board = new Board(this.deck)
    board.buildBoard()
    this.view.bindListeners()
    var matchCount = []
    $("td").on("click", logic.checkMatch(matchCount));
  }
}

