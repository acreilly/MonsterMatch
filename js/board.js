function Board(){
  this.boardSpaces = []
}

Board.prototype = {
  buildBoard: function(deck){
    $("td").addClass("card");
    var classCounter = 0;
    for(var i = 0; i < deck.deckArray.length; i++){
      var color = deck.deckArray[i]
      $("td")[i].className += " " + color + " " + "c" + classCounter++
    }
  }
}
