$(document).ready(function(){

  var tiles = ["img/mm-01.png", "img/mm-02.png", "img/mm-03.png", "img/mm-04.png", "img/mm-05.png", "img/mm-06.png"]
  var colors = ["red", "blue", "green", "purple", "yellow", "orange"]
  var deck = new Deck(tiles);
  var view = new View;
  var controller = new Controller(deck, view);
  controller.init()
});


function Deck(tile){
  this.tile = tile;
  this.deckArray = [];
}

Deck.prototype = {
  buildDeck: function(){
    for(var i = 0; i < this.tile.length; i++){
      this.deckArray.push(this.tile[i])
      this.deckArray.push(this.tile[i])
    }
    this.deckArray.sort(this.shuffleDeck);
  },
  shuffleDeck: function(a,b){
    return (Math.round(Math.random()) - 0.5);
  }
}

function Board(deck){
  this.deck = deck;
}

Board.prototype = {
  buildBoard: function(){
    $("td").addClass("card");
    for(var i = 0; i < this.deck.deckArray.length; i++){
      var color = this.deck.deckArray[i]
      $("td")[i].className += " " + color
    }
  }
}

function View(){

}

View.prototype = {
  bindListeners: function(){
    $("td").on("click", this.flipCard)
    // $("td").on("click", this.checkMatch);
  },
  flipCard: function(){
// $(this).css("background-color", this.classList[1])
    $(this).css("background-image", "url(" + this.classList[1] + ")")
  },
  flipBack: function(card1, card2){
    setTimeout(function(){
        card1.style.backgroundImage = "none"
        card2.style.backgroundImage = "none"
        // card1.style.backgroundColor = "black"
        // card2.style.backgroundColor = "black"
        console.log(matchCount)
      }, 1000)
  },
  matchedCards: function(card1, card2){
    card1.style.visibility = "hidden"
    card2.style.visibility = "hidden"
  }
}

function Controller(deck, view){
  this.deck = deck;
  this.view = view;
  var self = this
  this.init = function(){
    this.deck.buildDeck()
    var board = new Board(this.deck)
    board.buildBoard()
    this.view.bindListeners()
    this.matchCount = [];
    $("td").on("click", this.checkMatch);
  }
  this.checkMatch= function(){
    self.matchCount.push(this);
    var card1 = self.matchCount[0]
    var card2 = self.matchCount[1]
    if(card1.classList[1] === card2.classList[1]){
      self.view.matchedCards(card1,card2)
    } else {
      self.view.flipBack(card1, card2)
      matchCount = []
    }
  }
}

