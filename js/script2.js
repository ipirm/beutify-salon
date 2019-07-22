$('.show-btn').click(function(){
	$(this).hide();
	$(this).next('span').show(100);
	return false;
});

$(function(){
	$('.dws').delay(10000).show(700);
});

$('.dws').click(function(){
	$('.dws').fadeOut(600);
});

jQuery(document).ready(function(){
	$('.tab-content').hide();
	$('.tab-content:first').show();
	$('.tabs li:first').addClass('active');

	$('.tabs li').click(function(){
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
		return false;
	});
});

$(document).ready(function(){
	$(".topmenu, .sidebar_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$( function() {
	$("#slider").slider({
		range: true,
		min: 8,
		max: 22,
		values: [9, 18],
		slide: function( event, ui ) {
			$("#amount").val(ui.values[ 0 ] + ".00\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" + ui.values[ 1 ] + ".00");
		}
	});
	$("#amount").val( $("#slider").slider("values", 0) + ".00\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" + 
		$("#slider").slider("values", 1) + ".00");
});

$('.switcher__input').click(function() {
	if ($(this).is(':checked')){
		$('span.salon').removeClass('active');
		$('.bgn-salons').hide(10);
		$('.bgn-masters').show(20);
	} else {
		$('span.salon').addClass('active');
		$('.bgn-salons').show(20);
		$('.bgn-masters').hide(10);
	}
});

$('span.salon').click(function(){
	if ($('.switcher__input').is(':checked')){
		$('.switcher__input').prop('checked', false);
	} else {
		$('.switcher__input').prop('checked', true);
	};
	if ($(this).hasClass('active')){
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	}
});


$('.sidebar_menu li').click(function(){
	$('.sidebar_menu li').removeClass('active');
	$(this).addClass('active');
});

$('.art-slider').owlCarousel({
	loop:true,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	margin: 0
});



$('.vacancy-slider').owlCarousel({
	loop: true,
	items: 2,
	smartSpeed: 300,
	dots: false,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">']
});


$('.plases-slider').owlCarousel({
	loop: true,
	items: 1,
	smartSpeed: 300,
	dots: false,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">']

});

$('.tovary_page .products .catalog_page .catalog .row').owlCarousel({
	items: 4,
	smartSpeed: 100,
	dots: false,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">']

});

$('#brands .brand_slider_two').owlCarousel({
	items: 4,
	loop: true,
	dots: false,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">']
});

$('a.print').click(function() {return false});

/*$('.test-popup-link').magnificPopup({
	type:'image',
	cursor: 'mfp-zoom-out-cur'
});

$('.sertiiycats_item').magnificPopup({
	type:'image',
	cursor: 'mfp-zoom-out-cur'
});*/

$('.sertiiycats_wrap').owlCarousel({
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	items: 3,
	dots:false,
	smartSpeed: 500
});

/*$('.answer_row-text').readmore({
	speed: 100,
	maxHeight: 84,
	moreLink: '<a href="#">Подробнее</a>',
	lessLink: '<a href="#">Скрыть</a>',
	embedCSS: false
});*/

$('.galery_slider').owlCarousel({
	items: 1,
	loop: true,
	nav:true,
	navText:['<img src="img/occasions/left.png">', '<img src="img/occasions/right.png">'],
	dots:false,
	smartSpeed: 400
});

$('.spec_block-link p').hover(function(){
  var yes = $(this).attr('about'); 
  $('.spec_block-link p.active, .spec_block-right .active').removeClass('active'); 
  $('p[about='+yes+'], .spec_block-right div.'+yes+'').addClass('active');
});

/*$('.scrollbar-light').scrollbar();
$('.scrollbar-inner').scrollbar();
*/

$('.recommend_slider').owlCarousel({
	items: 3,
	loop: true,
	dots:false,
	nav:true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	smartSpeed: 400
});

$('.product-recommend_slider').owlCarousel({
	items: 3,
	loop: true,
	dots:false,
	nav:true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	smartSpeed: 400,
});

$('.company-recommend_slider').owlCarousel({
	items: 2,
	loop: true,
	dots:false,
	nav:true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	smartSpeed: 400
});


$('.ads .mainSl').owlCarousel({
	items: 4,
	autoplay:true,
	autoplayHoverPause:true,
	autoplaySpeed: 1000,
	loop: true,
	nav: true,
	navText:['<img src="img/feedback/left.png">', '<img src="img/feedback/right.png">'],
	dots:false,
	smartSpeed: 400
});

$('.compar-slider').owlCarousel({
	loop:true,
	dots:false,
	nav:true,
	navText:['<img src="img/arrow-gray.png">', '<img src="img/arrow-gray.png">'],
	smartSpeed: 400
});


$('.slider').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	navText:false,
	dots:false,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		850:{
			items:2,
			nav:true
		},
		1200:{
			items:3,
			nav:true
		}
	}
});

/*Occasion*/
$('.occasion_slider').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	navText:["Предыдущая страница","Следующая страница"],
	dots:false,
	responsive:{
		0:{
			items:1,
			navText:["",""]
		},
		550:{
			items:1,
			nav:true
		},
		1450:{
			items:2,
			nav:true
		}
	}
});

/*All feedback*/
$(document).ready(function() {
	$('select.nice').selectBox();      
});
$(document).ready(function() {
	$('#mySelect').selectBox();      
});
$(document).ready(function() {
	$('#Select2').selectBox();      
});

$( function() {
 $( ".menu" ).accordion({
 collapsible: true
 });
 } );

/*special offer*/
 $('.mail').click(function(){
	$('#mail').arcticmodal()
});
	 
/*experts*/
$('.my_tabs ul a').click(function() {
	$('.my_tabs ul a.active').removeClass('active');
	$(this).addClass('active');
	$('.my_tabs div.item').removeClass('active')
					  .eq($(this).parent().index()).addClass('active');
	return false;
});

/*Modals*/
 $('.ent').click(function(){
	$('#autorization').arcticmodal()
});
	 
 $('.feedback_but').click(function(){
	$('#feedback').arcticmodal()
});

 $('.organization').click(function(){
	$('#org').arcticmodal();
	return false;
});

 $('.switcher-gray').click(function(){
	$('#spam').arcticmodal();
 }); 

$('.buy').click(function(){
	$('#cart').arcticmodal();
	return false;
});

$('.in_compare').click(function(){
	$('#comparison').arcticmodal();
	return false;
});

$('.add').click(function(){
	$('#review').arcticmodal();
	return false;
});

$('.voice').click(function(){
	$('#voice').arcticmodal();
	return false;
});

 $('.modal_reg .main_spam .inner3 .spam-item .delete').click(function(){
	$(this).parent('.spam-item').hide(300);
	return false;
 });


 /*services*/
$(document).ready(function(){ 
	$(".scroll").click(function (event) { 
		event.preventDefault(); 
		var id = $(this).attr('href'), 
		top = $(id).offset().top; 
		$('body,html').animate({scrollTop: top}, 1500); 
	}); 
});


 $('.slide').owlCarousel({
	loop:false,
	margin:0,
	nav:false,
	navText:false,
	dots:false,
	responsive:{
		0:{
			items:1,
		},
		700:{
			items:2,
		},
		1000:{
			items:3,
		}
	}
});


$('.photo_slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	nav:true,
	navText:false,
	dots:false,
	autoplay:true,
	autoplayTimeout:300,
	autoplayHoverPause : true,
});



$(document).ready(function() {

	$(".sert_pic").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});


/*немного доделать*/
$(document).ready(function() {
	$(".vip_page .specialOffer .offer .more").click(function (event) {
		$(".vip_page .specialOffer .offer p").addClass("ha");
		return false;
	})
})




 $('.brand_slider').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	navText:false,
	dots:false,
	responsive:{
		0:{
			items:1,
		},
		400:{
			items:2,
		},
		600:{
			items:3,
		},
		700:{
			items:4,
		},
		800:{
			items:5,
		},
		1000:{
			items:6,
		}
	}
});





$('.near_slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	nav:true,
	navText:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:300,
	autoplayHoverPause : true,
});


$('.my_tabs.beauty ul li').click(function() {
	$('.my_tabs ul li.active').removeClass('active');
	$(this).addClass('active');
	$('.my_tabs div.block').removeClass('active')
					  .eq($(this).parent().index()).addClass('active');
	return false;
});

$('.articles_slider').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	navText:false,
	dots:false,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		850:{
			items:2,
			nav:true
		},
		1200:{
			items:3,
			nav:true
		}
	}
});


/*jQuery(function()
	{
		jQuery('.scroll_block').jScrollPane({
			autoReinitialise: false,
			showArrows:true
		});
		
	});*/


$('.serv div').click(function() {
	$('.serv div.active').removeClass('active');
	$(this).addClass('active');
	return false;
});

$('.switch .option').click(function() {
	$('.switch .option.active').removeClass('active');
	$(this).addClass('active');
	return false;
});
$("#cat").change(function() {
	$('.allServices_page .filter_block .filter .scrolling_block .item').removeClass('active')
					  .eq($(this).index()).addClass('active');
	return false;
});


$(".anoncesTheme_page .hidden_filter").click(function(){
	$(".anoncesTheme_page .hidden_filter").addClass('active');
})

$(".anoncesTheme_page .hidden_filter .close").click(function(){
	$(".anoncesTheme_page .hidden_filter").toggleClass('active');
})

/*
$(".hidden_filter .wrap .first .option").change(function() {
	$('.hidden_filter .wrap .first .option.tapped').removeClass('tapped')
					  .eq($(this).index()).addClass('tapped');
	return false;
});

$(".anoncesTheme_page .hidden_filter .wrap .second .option").change(function() {
	$('.anoncesTheme_page .hidden_filter .wrap .second .option').removeClass('tapped')
					  .eq($(this).index()).addClass('tapped');
	return false;
});*/


