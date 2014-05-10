
var audioController = require( 'wombs-audio-controller' );

audioController._start();

update();

function update(){

  audioController._update();
  window.requestAnimationFrame( update );

}

