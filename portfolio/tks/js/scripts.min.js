$(function() {

	$('.slider').slick({
		dots: true,
	  infinite: true,
	  speed: 300,
	  // autoplay: true,
	  autoplaySpeed: 3000,
	});

$(".right-menu__btn").click(function(evt){
	evt.preventDefault();
	$('.right-menu .search-wrap').addClass('active');
	$('.search-close').addClass('active');
	$(".header-top__form").addClass('active');
});

$('.search-close').on('click', function(){
	$('.right-menu .search-wrap').removeClass('active');
	$('.search-close').removeClass('active');
	$('.header-top__form').removeClass('active');
});
});
