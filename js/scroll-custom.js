jQuery(document).ready(function ($) {
    $("#scroll-1").click(function() {
        $('html,body').animate({
                scrollTop: $("#home-2").offset().top},
            'slow');
    });
});