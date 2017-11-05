


$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel({
	loop: true,
	items: 1,
	// itemClass: '.slide-wrap',
	// nav: true,
});
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



// $('.popup-content').magnificPopup({
//         type: 'inline'
//     });

$('.popup-content').magnificPopup({
    type: 'inline'
 });




});





// Accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
	var itemClass = this.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem close';
	}
	if (itemClass == 'accordionItem close') {
		this.parentNode.className = 'accordionItem open';
	}
}