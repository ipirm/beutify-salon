$(function() {

	$('.mobail__menu').click(function(){
		$('ul.main__menu-list').toggleClass('active');
	});
	$('.main__menu-link').click(function(){
		$('ul.main__menu-list').removeClass('active');
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.header').css('background-color', 'rgba(155,221,216,.8)');
		}
		else {
			$('.header').css('background-color', 'rgba(155,221,216,.2)');
		}
	});
});
