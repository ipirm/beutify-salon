$('.test-popup-link').magnificPopup({
	type:'image',
	cursor: 'mfp-zoom-out-cur'
});

$('.sertiiycats_item').magnificPopup({
	type:'image',
	cursor: 'mfp-zoom-out-cur'
});

$('.answer_row-text').readmore({
	speed: 100,
	maxHeight: 95,
	moreLink: '<a href="#">Подробнее</a>',
	lessLink: '<a href="#">Скрыть</a>',
	embedCSS: false
});

$('.tab-container').readmore({
	speed: 90,
	maxHeight: 94,
	moreLink: '<a href="#">Подробнее</a>',
	lessLink: '<a href="#">Скрыть</a>',
	embedCSS: false
});

$('.scrollbar-light').scrollbar();
$('.scrollbar-inner').scrollbar();

$('.reyting-star').click(function(){
	$(this).toggleClass('active');
});


