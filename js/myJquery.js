$(document).ready(function(){
	$('.menu__burger').click(function(event){
		$('.menu__burger,.menu__navbar').toggleClass('active2');
	});
});

$(document).ready(function () {
	$("#screenshots").owlCarousel({
		items: 4,
		itemsCustom: [
			[0, 1],
			[480, 2],
			[768, 3],
			[992, 4]
		],
	});
	$("#owl-testi").owlCarousel
		({
			navigation: false,
			slideSpeed: 300,
			autoHeight: true,
			singleItem: true
		});
});

$(function() {
	$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
					var aim = $(this.hash);
					aim = aim.length ? aim : $('[name=' + this.hash.slice(1) + ']');
					if (aim.length) {
							$('html,body').animate({
									scrollTop: aim.offset().top
							}, 1000);
							return false;
					}
			}
	});
});

$(window).scroll(function(){
	$('.section').each(function(){
		var $this = $(this),
				topEdge = $this.offset().top - 350,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

		if(topEdge < wScroll && bottomEdge > wScroll){
			var currentId = $this.data('section'),
				reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

			reqLink.closest('.nav__item').addClass('active').siblings()
			.removeClass('active');
		}
	});
});






