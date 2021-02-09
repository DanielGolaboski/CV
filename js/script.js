const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.hidden-txt', {y: '0%', duration: 2});
tl.to('.hidden-txt', {y: '100%', duration: 2}, "+=1");
tl.to('.intro', {y: '100%', duration: .34}, "-=0.5");


$(document).ready(function(){
    $('a[href*="#js-scroll"]').click(function (event) {
        event.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');


        $('html, body').animate({
            scrollTop: target.offset().top + 20
        }, 1000);

    });



    new WOW().init();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
	        if(scroll < 100){
	            $('.fixed-top').css('background', 'transparent');
	        } else{
	            $('.fixed-top').css('background', '#3dbad6');
	            $('.fixed-top').css('transition', '.7s', 'ease-in');
	        }
    });
    
   

     $('.hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('.nav-link').toggleClass('open');
    });

    $('.nav-link a').on('click', function(){
        $(".nav-link, .hamburger").removeClass('open');
    });

});