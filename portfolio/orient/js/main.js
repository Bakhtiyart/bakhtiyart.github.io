$(document).ready(function($) {

 
	$('.header-top__sign-lang .sign').click(function(event) {
		$('.submenu-cabinet').toggleClass('active');
	});


	$(document).mouseup(function(e) {
		var sign = $('.sign');
			if (e.target!=sign[0]&&sign.has(e.target).length === 0){
		$('.submenu-cabinet').removeClass('active');
		
	}
	});


	$('.header-top__sign-lang .lang').click(function(event) {
		$('.submenu').toggleClass('active');
	});


	$(document).mouseup(function(e) {
		var lang = $('.lang');
			if (e.target!=lang[0]&&lang.has(e.target).length === 0){
		$('.submenu').removeClass('active');
		
	}
	});



	$(".header-slider").owlCarousel({
		loop: true,
		margin: 10,
		items: 1,

	});



// header-top-menu
	$('.header-top-hamburger').click(function(event) {

		$('.header-top__menu-mobile').toggleClass('active-menu');
		$('.header-top .header-top-hamburger').toggleClass('is-active');
	});

// 	$(document).mouseup(function(e){
// 		var menu = $('.header-top-hamburger');
// 		if (e.target!=menu[0]&&menu.has(e.target).length === 0){
// 		$('.header-top__menu-mobile').removeClass('active-menu');
// 	}

// });


//header-bottom-menu

	$('.header-bottom-hamburger').click(function(event) {

		$('.header-bottom__menu-mobile').toggleClass('is-active');
		$('.header-bottom .header-bottom-hamburger').toggleClass('is-active');
	});

	$('.close-btn').click(function(event) {
			$('.header-bottom__menu-mobile').removeClass('is-active');
	});

// 	$(document).mouseup(function(e){
// 		var menu = $('.header-bottom-hamburger');
// 		if (e.target!=menu[0]&&menu.has(e.target).length === 0){
// 		$('.header-bottom__menu-mobile').removeClass('is-active');
// 	}
// });



// ===search===

$('.header-bottom-search .search-link').click(function(){
	$('.header-block-search').toggleClass('active');
});


 
	$(document).mouseup(function(e){
		var search = $('.header-block-search');
		if (e.target!=search[0]&&search.has(e.target).length === 0){
		$('.header-block-search').removeClass('active');
	}
});

// tabs

	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function(event) {
		event.preventDefault();
		$('.active').removeClass('active');
		$(this).parent().toggleClass('active');
		var target = $(this).attr('href');
		$(target).toggleClass('active');
	});




	// footer carousel 
	$(".footer-slider").owlCarousel({
		loop: true,
		margin: 10,
		items: 5,
		dots: false,
		nav: true,
		navText: false,
		navText: ['<img src="img/arrow-left.png">', '<img src="img/arrow-right.png">'],
		responsive:{
			320:{
				items: 1
			},
			480:{
				items: 2
			},
			768:{
				items: 3
			},
			1000:{
				items: 5
			}
		}
	});

// svg4everybody.js

svg4everybody({});

AOS.init({
	duration: 1000,
});

$('.block-fixed-mobile__item').on('click', function() {
	$(this).toggleClass('active-block');

});

	$(document).mouseup(function(e){
		var blockFixed = $('.block-fixed-mobile__item.active-block');
		console.log(blockFixed)
		if (e.target!=blockFixed[0]&&blockFixed.has(e.target).length === 0){
		$('.block-fixed-mobile__item').removeClass('active-block');
	}
});

});