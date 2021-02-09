$(document).ready(function(){
    $('a[href*="#js-scroll"]').click(function (event) {
        event.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');


        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000);

    });


     $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 100){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', '#fff');
            $('.fixed-top').css('transition', '.7s', 'ease-in');
        }
    });
     
    new WOW().init();

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fadeDuration': 1000,
      'positionFromTop': 200,
      'minWidth': 1024,
    })

});