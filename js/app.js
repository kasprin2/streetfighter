$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        hideImages();
        $('.ryu-ready').show();
    })

    .mouseleave(function() {
        hideImages();
        $('.ryu-still').show();
    })

    .mousedown(function() {
        hideImages();
        playHadouken();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            }
        );
    })

    .mouseup(function(){
        hideImages();
        $('.ryu-ready').show();
    });

   $(document).keydown(function(e) {
        if (e.keyCode == 88) {
            hideImages();
            $('.ryu-cool').show();
    }
    })

    .keyup(function(e) {
        if (e.keyCode == 88) {
            hideImages();
            $('.ryu-still').show(); 
        } 
    });

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };

    function hideImages() {
        $('.ryu-still , .ryu-cool, .ryu-throwing, .ryu-ready').hide();
    };

});


