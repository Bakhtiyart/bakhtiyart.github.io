$(function() {
	new WOW().init();
	
	$('.menu-icon').click(function(){
		$(this).toggleClass('active');
		if($('.menu').hasClass('show') || $('.menu').hasClass('active')){
			$('.menu').removeClass('active');			
			$('.overlay').removeClass('active');
		 setTimeout(function() {
			$('.menu').removeClass('show');
		 }, 800);
		}
		else{
			$('.menu').addClass('show');
			$('.overlay').addClass('active');
			setTimeout(function(){
				$('.menu').addClass('active');
			}, 100);
		}s
	});

	$('.overlay').click(function(){
		$(this).removeClass('active');
		$('.menu-icon').removeClass('active');
		$('.menu').removeClass('active');
		setTimeout(function() {
			$('.menu').removeClass('show');
		 }, 500);
	});


    // menu fixed on scroll
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if ( scrolled >= 150  ) {
            $(".header-top").addClass("fixed");

        } else {
            $(".header-top").removeClass("fixed");
        }
    });

     // anchors
    $('a[href^="#"]').on("click", function (e) {
        var anchor = $(this);
        if(!anchor.hasClass('btn')){
            $('a[href^="#"]').parent().removeClass('menu__item--active');
            anchor.parent().addClass('menu__item--active');
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        }

    });

});
