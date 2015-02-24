
var ALLIMAGES = [
  'loeffel', 'reissverschluss', 'springer'
], images;

var ALLTILES = [
  '#tile1', '#tile2', '#tile3',
  '#tile4', '#tile5', '#tile6', '#tile7',
  '#tile8', '#tile10',
  '#tile11', '#tile12', '#tile13', '#tile14',
  '#tile15', '#tile16', '#tile17',
  '#tile9'
], tile;

Array.prototype.shuffle = function() {
  var remain = this.length-1, tmp, i;
  while( remain-- > 1 ) {
    i = Math.floor(Math.random() * remain);
    tmp = this[ remain ];
    this[ remain ] = this[ i ];
    this[ i ] = tmp;
  }
  return this;
}

function showValue() {
  $('#value').html(tile.length);
}

function handler() {
  if ( tile.length >  0 ) {
    var t = tile.splice( 0, 1 )[0];
    $(t).hide();
    showValue();
  }
}

function resizeBoard() {
  var innerWidth = window.innerWidth,
    innerHeight = window.innerHeight;
  var minSize = 32;
  var size = 0.06 * innerWidth < minSize ? minSize : 0.06 * innerWidth;
  var availableWidth = innerWidth-2*size,
    availableHeight = innerHeight-size,
    availableAspect = availableWidth / availableHeight,
    panelWidth = availableAspect < 4/3 ? availableWidth : availableHeight * 4/3,
    panelHeight = availableAspect < 4/3 ? availableWidth * 3/4 : availableHeight;
  $('#panel').css({
    'left': ((innerWidth-panelWidth) / 2)+'px',
    'top': (size*0.7)+'px',
    'width': panelWidth+'px',
    'height': panelHeight+'px',
  });
  
  var tileWidth = panelWidth * 2/7,
    tileHeight = panelHeight / 3,
    tileOffset = tileHeight / 50;
  $('#tile17').css({
    'left': (-0.5*tileOffset-tileWidth/4)+'px',
    'top': (-0.5*tileOffset)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile16').css({
    'left': (-0.5*tileOffset-tileWidth/4)+'px',
    'top': (-0.5*tileOffset+tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile15').css({
    'left': (-0.5*tileOffset-tileWidth/4)+'px',
    'top': (-0.5*tileOffset+2*tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile14').css({
    'left': (-0.5*tileOffset+tileWidth*2/4)+'px',
    'top': (-0.5*tileOffset-tileHeight/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile13').css({
    'left': (-0.5*tileOffset+tileWidth*2/4)+'px',
    'top': (-0.5*tileOffset+tileHeight/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile12').css({
    'left': (-0.5*tileOffset+tileWidth*2/4)+'px',
    'top': (-0.5*tileOffset+tileHeight*3/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile11').css({
    'left': (-0.5*tileOffset+tileWidth*2/4)+'px',
    'top': (-0.5*tileOffset+tileHeight*5/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });

  $('#tile10').css({
    'left': (-0.5*tileOffset+tileWidth*5/4)+'px',
    'top': (-0.5*tileOffset)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile9').css({
    'left': (-0.5*tileOffset+tileWidth*5/4)+'px',
    'top': (-0.5*tileOffset+tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile8').css({
    'left': (-0.5*tileOffset+tileWidth*5/4)+'px',
    'top': (-0.5*tileOffset+2*tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  
  $('#tile7').css({
    'left': (-0.5*tileOffset+tileWidth*8/4)+'px',
    'top': (-0.5*tileOffset-tileHeight/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile6').css({
    'left': (-0.5*tileOffset+tileWidth*8/4)+'px',
    'top': (-0.5*tileOffset+tileHeight/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile5').css({
    'left': (-0.5*tileOffset+tileWidth*8/4)+'px',
    'top': (-0.5*tileOffset+tileHeight*3/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile4').css({
    'left': (-0.5*tileOffset+tileWidth*8/4)+'px',
    'top': (-0.5*tileOffset+tileHeight*5/2)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });

  $('#tile3').css({
    'left': (-0.5*tileOffset+tileWidth*11/4)+'px',
    'top': (-0.5*tileOffset)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile2').css({
    'left': (-0.5*tileOffset+tileWidth*11/4)+'px',
    'top': (-0.5*tileOffset+tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });
  $('#tile1').css({
    'left': (-0.5*tileOffset+tileWidth*11/4)+'px',
    'top': (-0.5*tileOffset+2*tileHeight)+'px',
    'width': (tileWidth+1.25*tileOffset)+'px',
    'height': (tileHeight+1.25*tileOffset)+'px',
  });

  $('#customMenu').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  size = 0.05 * innerWidth < minSize ? minSize : 0.05 * innerWidth;
  $('#customBackRules').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackAbout').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
}

function solve() {
  while ( tile.length >  0 ) {
    var t = tile.splice( 0, 1 )[0];
    $(t).hide();
  }
}

function next() {
  if ( images.length > 0 ) {
    for(var a=0; a<ALLTILES.length; ++a) {
      $(ALLTILES[a]).show();
    }
    tile = ALLTILES.slice();
    tile.shuffle();
    showValue();
    var i = images.splice( 0, 1 )[0];
    $('#panel').css({
      'background': 'url(img/' + i + '.jpg)',
      'background-size': '100% auto',
    });
  }
}

function start() {
  images = ALLIMAGES.slice();
  next();
}

function init() {
  start();
  $('#panel').on('click', handler);
  $('#next').click( next );
  $('#solve').click( solve );
  $('#restart').click( start );
  $(window).on('resize', resizeBoard);
  $(window).resize();
}

$( document ).ready( init );
