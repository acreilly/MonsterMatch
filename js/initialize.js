$(document).ready(function(){

  var tiles = ["img/mm-01.png", "img/mm-02.png", "img/mm-03.png", "img/mm-04.png", "img/mm-05.png", "img/mm-06.png"]
  var colors = ["red", "blue", "green", "purple", "yellow", "orange"]
  var deck = new Deck(tiles);
  var view = new View;
  var board = new Board;
  var controller = new Controller(deck, view, board);
  controller.init()
});
