var back = 'back.gif'; // default image
var tile = ['img0.gif','img1.gif','img2.gif','img3.gif','img4.gif','img5.gif',
'img6.gif','img7.gif','img8.gif','img9.gif','img10.gif','img11.gif',
'img12.gif','img13.gif','img14.gif'];

// Randomizes cards
function randOrd(a, b) {
  return (Math.round(Math.random()) - 0.5);
}


var cardImages = [];  // empty image array


for (var imageIndex = 0; imageIndex < 15; imageIndex++) {
  cardImages[imageIndex] = new Image(); // creates new image at the i index
  cardImages[imageIndex].src = tile[imageIndex]; //sets that image's src to the image's file
  tile[imageIndex] = '<img src="' + tile[imageIndex] + '" width="60" height="60" alt="tile" \/>'; // sets the tile to an image tag
  tile[imageIndex + 15] = tile[imageIndex]; // creates a second card with index of the tiles index plus however many images there are
}


// DISPLAYS DEFAULT CARD
function displayBack(i) {
  document.getElementById('t' + i).innerHTML = '<div onclick="disp(' + i + ');return false;"><img src="' + back + '" width="60" height="60" alt="back" \/><\/div>';
}


var ch1, ch2, tmr, tno, tid, cid, count;
window.onload = start;

function start() { // start game
  for (var i = 0; i <= 29; i++) displayBack(i);
    clearInterval(tid);
  tmr = tno = count = 0;
  tile.sort(randOrd);

  // COUNTER
  counter();
  tid = setInterval('counter()', 1000);
}









function counter() {
  var min = Math.floor(tmr / 60);
  var sec = tmr % 60;
  document.getElementById('count').value = min + ':' + (sec < 10 ? '0' : '') + sec;
  tmr++;
}

function disp(sel) {
  if (tno > 1) {
    clearTimeout(cid);
    conceal();
  }
  document.getElementById('t' + sel).innerHTML = tile[sel];
  if (tno == 0) ch1 = sel;
  else {
    ch2 = sel;
    cid = setTimeout('conceal()', 900);
  }
  tno++;
}

function conceal() {
  tno = 0;
  if (tile[ch1] != tile[ch2]) {
    displayBack(ch1);
    displayBack(ch2);
  } else count++; if (count >= 15) clearInterval(tid);
}