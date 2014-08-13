
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
