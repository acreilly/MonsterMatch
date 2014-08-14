function Controller(deck, view, board){
  this.deck = deck;
  this.view = view;
  this.board = board;
  this.logic = new GameLogic(this)
}

Controller.prototype = {
  init: function(){
    this.gameStart()
    this.bindListeners()
  },
  bindListeners: function(){
    $("td").on("click", this.view.flipCard);
    $("td").on("click", this.logic.checkMatch);
  },
  gameStart: function(){
    this.deck.buildDeck()
    this.board.buildBoard(this.deck)
  },
  gameOver: function(){
    this.logic.cardsLeft = 0;
    this.deck.buildDeck()
    this.view.gameReset()
    this.board.resetBoard(this.deck)
  },
  scoreBoard: function(){

  }
}