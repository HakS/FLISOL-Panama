$(document).ready(function(){
    $('.site-menu a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-58
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});