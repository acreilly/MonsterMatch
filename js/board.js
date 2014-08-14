function Board(){
  this.boardSpaces = []
}

Board.prototype = {
  buildBoard: function(deck){
    // $("td").addClass("card");
    var classCounter = 0;
    for(var i = 0; i < deck.deckArray.length; i++){
      var identifier = deck.deckArray[i]
      $("td")[i].className += " " + "c" + classCounter++ + " " + identifier
    }
  },
  resetBoard: function(deck){
    for(var i = 0; i < deck.deckArray.length; i++){
      var identifier = deck.deckArray[i]
      var removeImgClass = $("td")[i].classList[1]
      $("td")[i].classList.remove(removeImgClass)
      $("td")[i].className += " " + identifier
    }
  }
}
