/*

   Welcome to the incubator.

   TODO:


    - Something screwy is going on you add the fft 
      to the analyser. an off by x/2 because of 
      frequencyBinCount vs this.analyser.array.


*/

var womb = require( 'wombs-womb' );

var audioController = require( 'wombs-audio-controller' );
var UserAudio       = require( 'wombs-audio-user-audio' );

var THREE = require('three');

var renderer , camera , scene;

var userAudio;



//init();

console.log( womb );
womb.addToStartArray( function(){


  var self = this;
  var update = function(){

    self._update();
    window.requestAnimationFrame( update );


  }
  
  update();


});

function init(){

  userAudio = new UserAudio( audioController );

  womb.addComponent( userAudio );

  audioController.texture.createDebugMesh( womb._three );



  audioController.mute();

  womb._start();

  womb.audioController.mute();
  

}

init();
/*function update(){

  audioController._update();

  renderer.render( scene , camera );
  window.requestAnimationFrame( update );

}*/

