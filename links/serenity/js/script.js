$(document).ready(function(){

        new WOW().init();

         $('a[href*="#js-scroll"]').click(function (event) {
        event.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');


        $('html, body').animate({
	            scrollTop: target.offset().top - 50
	        }, 1000);

    	});

});