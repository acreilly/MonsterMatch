$(document).ready(function(){
  var tiles = ["img/mm-01.png", "img/mm-02.png", "img/mm-03.png", "img/mm-04.png", "img/mm-05.png", "img/mm-06.png", "img/mm-07.png", "img/mm-08.png", "img/mm-09.png", "img/mm-10.png", "img/mm-11.png", "img/mm-12.png"]
  var deck = new Deck(tiles);
  var view = new View;
  var board = new Board;
  var scoreController = new Score;
  var controller = new Controller(deck, view, board, scoreController);
  controller.init()

  animateMe();

});

var animateMe = function(){
  $(".monster span:gt(0)").hide();
  $(".match span:gt(0)").hide();
  $(".monster span").each(function(index) {
    $(this).delay(200*index).fadeIn(200);
  });

  $(".match span").each(function(index) {
    $(this).delay(200*index).fadeIn(200);
  });
}