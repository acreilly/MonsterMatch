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
    console.log(this.deckArray)
    debugger
  },
  shuffleDeck: function(a,b){
    return (Math.round(Math.random()) - 0.5);
  }
}