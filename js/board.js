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
