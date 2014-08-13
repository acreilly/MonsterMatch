// Controller
  // initialize
    // draw
    // set up backend
// Card obj
  // ID
  // main side
// Board obj
  // draw board with objects
// Deck obj
  // creates cards
  // creates deck
  // shuffles deck
// View




$(document).ready(function(){
  var board = new Board
  // score = new Score
  var deck = new Deck
  var controller = new Controller(board, deck)
  controller.init()
});

var tile = ["img/mm-01.png", "img/mm-02.png", "img/mm-03.png", "img/mm-04.png", "img/mm-05.png", "img/mm-06.png"]



function Card(cardID){
  this.cardID = cardID;
  this.sourceFile = "mm-0" + cardID;
  this.matched = false;
}

function CardView(){
  var cardStyle = {
    width:"100px",
    height:"100px",
    backgroundColor: "black",
    border: "2px solid white"
  };
}

function Deck(){
  this.deckArray = [];
}

Deck.prototype = {
  buildDeck: function(){
    for(var i = 1; i <= 6; i++){
      this.deckArray.push(new Card(i))
    }
    this.deckArray.sort(this.shuffleDeck)
  },
  shuffleDeck: function(a,b){
    return (Math.round(Math.random()) - 0.5);
  }
}

function Board(){
  this.xWidth = 3;
  this.yHeight = 3;
}

Board.prototype = {
  drawBoard: function(deck){
    document.write('<div align="center"><table cellpadding="0" cellspacing="0" border="0">');
    for(var x = 0; x <= this.xWidth; x++){
      document.write("<tr>")
      for(var y = 0; y <= this.yHeight; y++){
        // var source = deck.deckArray[y].sourceFile
        document.write('<td></td>')
        // $("td")[y].className += " " + source
        $("td").addClass("card")
      }
    }
      document.write("</tr>");
  },
  somefunc: function(){
    var cardImages = [];
    for (var imageIndex = 0; imageIndex < 6; imageIndex++) {
      cardImages[imageIndex] = new Image();
      cardImages[imageIndex].src = tile[imageIndex];
      tile[imageIndex] = '<img src="' + tile[imageIndex] + '" width="100" height="100" alt="tile" \/>';
      tile[imageIndex + 6] = tile[imageIndex];
    }
    document.write("</tr>");
    this.bindProperties()
  },

  bindProperties: function(){
    var tileStyle = {
      width:"100px",
      height:"100px",
      backgroundColor: "black",
      border: "2px solid white"
    };
    $("td").css(tileStyle);
  }
}



function Controller(board, deck){
  this.board = board;
  this.deck = deck;
}

Controller.prototype = {
  init: function(){
    this.deck.buildDeck()
    this.board.drawBoard(this.deck)
    // create card objects
    // create deck
    // shuffle deck
    // board.drawBoard()
  }
}

// function Score(){
//   this.total = 0;
//   this.calculate = function(){
//     // this.total +=
//   }
// }
//function ScoreView(){
  // updateScore = function(){

  // }
//}
