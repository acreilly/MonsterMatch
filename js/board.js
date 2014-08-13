function Board(){}

Board.prototype = {
  buildBoard: function(deck){
    $("td").addClass("card");
    for(var i = 0; i < deck.deckArray.length; i++){
      var color = deck.deckArray[i]
      $("td")[i].className += " " + color
    }
  }
}
