function Deck(tile){
  this.tile = tile;
}

Deck.prototype = {
  buildDeck: function(){
    this.deckArray = [];
    for(var i = 0; i < this.tile.length; i++){
      this.deckArray.push(this.tile[i])
      this.deckArray.push(this.tile[i])
    }
    // this.deckArray.sort(this.randomizeDeck);
    return this.shuffleDeck(this.deckArray)
  },
  randomizeDeck: function(a,b){
    return (Math.round(Math.random()) - 0.5);
  },
  shuffleDeck: function(deck){
    deck.sort(this.randomizeDeck)
  }
}