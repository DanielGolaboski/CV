$(document).ready(function(){
    $('a[href*="#js-scroll"]').click(function (event) {
        event.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');


        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000);

    });

    new WOW().init();

    $(".hamburger").on("click", function(){
        $(this).toggleClass("open");
        $(".links").toggleClass("open");
    });
});