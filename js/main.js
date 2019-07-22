$( document ).ready(function() {

/* Resize */
$(window).resize(function() {
	questions_list();
	adverts_list();
	sort();
});

/* Site functions */
questions_list();
adverts_list();
sort();


/* Carousels */
$('.services-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	rows: 0,
	centerMode: true,
	arrows: true,
	fade: false,	
	responsive: [
		{
		  breakpoint: 959,
		  settings: {
			slidesToShow: 3,
		  }
		}
	]
});

$('.services-mobile-slider.group1').slick({
	slidesToShow: 2,
	slidesToScroll: 2, 
	prevArrow: $('.mobile-slider-nav.group1 .prev-arrow'),
    nextArrow: $('.mobile-slider-nav.group1 .next-arrow'),
	rows: 0,
	arrows: true,
	fade: false
});
$('.services-mobile-slider.group2').slick({
	slidesToShow: 2,
	slidesToScroll: 2, 
	prevArrow: $('.mobile-slider-nav.group2 .prev-arrow'),
    nextArrow: $('.mobile-slider-nav.group2 .next-arrow'),
	rows: 0,
	arrows: true,
	fade: false
});


$('.advices-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	rows: 0,
	fade : true,
	dots:true,
	autoplay:true,
	arrows: false,	
	speed: 1000,
	responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: true,
			autoplay:false,
			prevArrow: $('.main-advices .prev-arrow'),
			nextArrow: $('.main-advices .next-arrow'),			
		  }
		}
	]
});

$('.gallery-mobile-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1, 
	prevArrow: $('.promo-block .prev-arrow'),
    nextArrow: $('.promo-block .next-arrow'),
	rows: 0,
	arrows: true,
	fade: false
});




/* Services Menu (hover) */
$('.services-menu li a').on('click', function(){
	$(this).closest('.services-menu').find('li').removeClass('active');
	$(this).parent('li').addClass('active');
});

 /* Services Slider (hover) */
$('.services-slider a.slick-slide').on('click', function(){
	$(this).closest('.services-slider').find('a.slick-slide').removeClass('active-slider');
	$(this).addClass('active-slider');
});

 /* Services Slider (charger) */
$('.services-menu.group1 li a').on('click', function(){
	$('.services-slider.group1').toggleClass('active');
	$('.services-slider.group1').slick('refresh')
});
$('.services-menu.group2 li a').on('click', function(){
	$('.services-slider.group2').toggleClass('active');
	$('.services-slider.group2').slick('refresh');
});
$('.services-mobile-menu li a').on('click', function(){
	$('.services-mobile-slider').toggleClass('active');
	$('.mobile-slider-nav').toggleClass('active');
	$('.services-mobile-slider').slick('refresh');
});


$('.advices-slider-nav .icon1').on('click', function(){
	$('.advices-slider-nav .sn-icon').addClass('active');
	$('.advices-slider-nav .icon2,.advices-slider-nav .icon3,.advices-slider-nav .icon4').removeClass('active');
	$(this).addClass('active');
	$('.advices-slider').slick('slickGoTo', 0);
	$('.slider-nav-progress .line').removeClass('active');
});
$('.advices-slider-nav .icon2').on('click', function(){
	$('.advices-slider-nav .sn-icon').addClass('active');
	$('.advices-slider-nav .icon3,.advices-slider-nav .icon4').removeClass('active');
	$(this).addClass('active');
	$('.advices-slider').slick('slickGoTo', 1);
	$('.slider-nav-progress .line').addClass('active');
	$('.slider-nav-progress .line2,.slider-nav-progress .line3').removeClass('active');
});
$('.advices-slider-nav .icon3').on('click', function(){	
	$('.advices-slider-nav .sn-icon').addClass('active');
	$('.advices-slider-nav .icon4').removeClass('active');
	$(this).addClass('active');
	$('.advices-slider').slick('slickGoTo', 2);
	$('.slider-nav-progress .line').addClass('active');
	$('.slider-nav-progress .line3').removeClass('active');
});
$('.advices-slider-nav .icon4').on('click', function(){
	$('.advices-slider-nav .sn-icon').addClass('active');
	$(this).addClass('active');
	$('.advices-slider').slick('slickGoTo', 3);
	$('.slider-nav-progress .line').addClass('active');
});

$('.reviews-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	rows: 0,
	arrows: true,	
	speed: 1000,
	responsive: [	
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			arrows: false,
			autoplay:true,
			speed: 2000
		  }
		}
	]
});
 
$('.advert-list.slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	rows: 0,
	arrows: true,	
	speed: 1000,
	responsive: [	
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
			arrows: false,
			autoplay: true
		  }
		}
	]
});
 
  
$('.banner-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	rows: 0,
	arrows: false,
	fade:true,
	autoplay: true,
	speed: 1000
});
$('.banner-slider2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	rows: 0,
	arrows: false,
	autoplay: true,
	speed: 1000
});


/* NiceSelect */
$('select').niceSelect();

/* MediaElements */
$('video, audio').mediaelementplayer({
	features: ['playpause','current','progress','duration','volume','fullscreen','backlight'],
});

/* 3D Gallery */
$(function() {
	$('#dg-container').gallery();
});

/* UI Slider*/
$( function() {
	$( "#time-slider" ).slider({
	  range: true,
	  min: 6,
	  max: 18,
	  values: [ 6, 18 ],
	  slide: function( event, ui ) {
		$( "#input-time1" ).val(  ui.values[ 0 ] + ":00" );
		$( "#input-time2" ).val(  ui.values[ 1 ] + ":00" );
	  }
	});
});
$( function() {
	$( "#advert-price" ).slider({
	  range: true,
	  min: 900,
	  max: 1900,
	  values: [ 900, 1900 ],
	  slide: function( event, ui ) {
		$( "#range-min" ).val(  ui.values[ 0 ] );
		$( "#range-max" ).val(  ui.values[ 1 ] );
	  }
	});
});

/* Mobile Menu */
$(".mobile-menu-charger").on("click", function() {
	$("body").toggleClass("mobile-menu-open");
})
$(".menu-close").on("click", function() {
	$("body").removeClass("mobile-menu-open")
})
$("body").click(function(e) {
	0 == $(e.target).closest(".mobile-menu-charger").length && 0 == $(e.target).closest("#headerMenu").length && $("body").removeClass("mobile-menu-open")
})


/* Mobile Swicher */
$('.objects-filters .mobile-switcher span').on('click', function(e){
	$('.mobile-switcher span').removeClass('active');
	$(this).addClass('active');
});

/* Advert */
$('.advert-filters .advert-filter-title').on('click', function(e){
	e.preventDefault();
	$('.advert-filters').addClass('active');
});
$('.advert-filters .advert-filter-close').on('click', function(e){
	e.preventDefault();
	$('.advert-filters').removeClass('active');
});

$('.advert-catalog .advert-readmore span.show-text').on('click', function(){
	$(this).hide();
	$(this).siblings('.hide-text').show();
	$('.advert-catalog .advert-content').slideDown();
});
$('.advert-catalog .advert-readmore span.hide-text').on('click', function(){
	$(this).hide();
	$(this).siblings('.show-text').show();
	$('.advert-catalog .advert-content').slideUp();
});


/* Link Scrool */
$('a[href^="#"]').click(function(event) {
  event.preventDefault();
  var id = $(this).attr('href'),
	  top = $(id).offset().top - 20;
  $('body,html').animate({
	  scrollTop: top 
  }, 1000);
});


/* ShowMore JS */
function questions_list(){
if ($(window).width() < 767 ) {
	$('.faq-list .row').hide();
	$('.faq-list .row:lt(2)').show();
		var items =  $('.faq-list .row').length;
		var shown =  1;
		$('.faq-block .more-questions').click(function () {
			shown = $('.faq-list .row:visible').size()+1;
			if(shown < items) {$('.faq-list .row:lt('+shown+')').show();}
			else {
				$('.faq-list .row:lt('+items+')').show();
				$('.faq-block .more-questions').hide();
			}
		});
} else{
	$('.faq-list .row').show();
};
};

function adverts_list(){
if ($(window).width() < 767 ) {
	$('.advert-list.default > div').hide();
	$('.advert-list.default > div:lt(2)').show();
		var items =  $('.advert-list.default > div').length;
		var shown =  2;
		$('.advert-catalog .show-more-advert').click(function () {
			shown = $('.advert-list.default > div:visible').size()+2;
			if(shown < items) {$('.advert-list.default > div:lt('+shown+')').show();}
			else {
				$('.advert-list.default > div:lt('+items+')').show();
				$('.advert-catalog .show-more-advert').hide();
			}
		});
} else{
	$('.advert-list.default > div').show();
};
};


/* Fake ShowMore */
$('.objects-block .show-more').click(function () {
	$(".objects-list .object-item").clone().appendTo(".objects-list");
	$(this).hide();
});	

/* Change Placeholder on mobile */
if ($(window).width() < 767 ) {
	$('.objects-block .object-searchform input[type="search"]').attr('placeholder','Введите название салона');
};


/* Promo Readmore */
$('.promo-content-readmore').click(function () {
	$(this).hide();
	$('.promo-content').addClass('active');
});	


/* Sort/Grid charger */
function sort(){
if ($(window).width() > 767 ) {
	$('.sort-grid .grid-1').on('click', function(e){
		$('.sort-grid > div').removeClass('active');
		$(this).addClass('active');
		$('.advert-list.default').css('display','flex');
		$('.advert-list.note').css('display','none');
	});
	$('.sort-grid .grid-2').on('click', function(e){
		$('.sort-grid > div').removeClass('active');
		$(this).addClass('active');
		$('.advert-list.default').css('display','none');
		$('.advert-list.note').css('display','flex');
	});
} else {
	$('.advert-list.note').css('display','none');
	$('.advert-list.default').css('display','flex');
	$('.sort-grid > div').removeClass('active');
	$('.sort-grid .grid-1').addClass('active');
};
};

});