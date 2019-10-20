$(function() {
	new WOW().init();
	
	$('.menu-icon').click(function(){
		$(this).toggleClass('active');
		if($('.menu').hasClass('show') || $('.menu').hasClass('active')){
			$('.menu').removeClass('active');			
			$('.overlay').removeClass('active');
		 setTimeout(function() {
			$('.menu').removeClass('show');
		 }, 500);
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

});
