function View(){}

View.prototype = {
  flipCard: function(){
    $(this).css("background-image", "url(" + this.classList[1] + ")")
  },

  flipBack: function(cardArray){
    $.each(cardArray, function(val, i){
      setTimeout(function(){
        i.style.backgroundImage = "none"
      }, 1000)

    })
  },

  matchedCards: function(card1, card2){
    card1.style.visibility = "hidden"
    card2.style.visibility = "hidden"
  },

  gameReset: function(deck){
    $.each($("td"), function(val, i){
      i.style.backgroundImage = "none"
      i.style.visibility = "visible"
    })
  }
}
