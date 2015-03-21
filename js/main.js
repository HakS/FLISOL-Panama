$(document).ready(function(){
    $(window).stellar();

    var fadeStart=100
        ,fadeUntil=400
        ,fading = $('.site-menu')
        ,opacity = 1
    ;

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop();
        opacity = 0 + offset / fadeUntil;
        if (opacity > 1) opacity = 1;
        fading.css('background-color', 'rgba(32, 32, 32, ' + opacity + ')');
    });
    $('#chrptyModal').foundation('reveal', 'open');
    $('#chrptyModal a.chr-btn').click(function () {
        $('#chrptyModal').foundation('reveal', 'close');
    });
});