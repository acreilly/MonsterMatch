function Board(){
  this.boardSpaces = []
}

Board.prototype = {
  buildBoard: function(deck){
    $("td").addClass("card");
    var classCounter = 0;
    // each jquery?
    for(var i = 0; i < deck.deckArray.length; i++){
      var color = deck.deckArray[i]
      $("td")[i].className += " " + color + " " + "c" + classCounter++
    }
  },
  resetBoard: function(){
    // see if I can just shuffle and build board again, if not
    // remove all classes
    // reset all classes
    // OR overwrite classes classList[1]
  }
}
