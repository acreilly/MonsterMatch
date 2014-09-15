
function Score(view){
  this.view = view;
}

Score.prototype = {
  startScore: function(){
    $(".score span")[0].innerHTML = 0;
  },
  matchScore: function(){
    var score = parseInt($(".score span")[0].innerHTML)
    $(".score span")[0].innerHTML = score += 50;
  },
  mismatchScore: function(){
    var score = parseInt($(".score span")[0].innerHTML)
    $(".score span")[0].innerHTML = score -= 15;
  }
}