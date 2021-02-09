$(document).ready(function(){

        var first = document.getElementById('first').innerText;
        var second = document.getElementById('second').innerText;
        var third = document.getElementById('third').innerText;
            if(scroll > 2670){
                $('.first').css('width', first + '%');
                $('.second').css('width', second + '%');
                $('.third').css('width', third + '%');

            } else{
                
            }
        });


        var a = 0;
        $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if(scroll > 5230 && a == 0){
                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                         Counter: $(this).text()
                        }, {
                            duration: 1800,
                            easing: 'swing',
                            step: function (now) {
                            $(this).text(Math.ceil(now));
                            }
                        });
                    });
                    a = 1;
                }
                else{
                    $('.count').text()
                }
        });

        new WOW().init();

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
	            $('.fixed-top').css('background', '#000');
	            $('.fixed-top').css('transition', '.7s', 'ease-in');
	        }
    	});

});