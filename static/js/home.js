$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "Financial professional with skills in technology. My primary goal is to help businesses in the financial sector to build sustainable technology.<br/> ^100" +
      "><span class='caret'>$</span> Checkout my recent projects on <a href='/projects/video-stab'>github</a> and connect to my <a href='/projects/lifehacks'>linkedin</a><br/> ^300" +
      "><span class='caret'>$</span> I also teach music, study Mathematical Finance at Birbeck and <a href='https://medium.com/@lucasomigli'>write</a><br/> ^300" +
      "><span class='caret'>$</span> For all things music, visit <a href='https://lucasomiglimusic.herokuapp.com/'>here</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
