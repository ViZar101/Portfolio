$(function(){

	$('.toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.tabs a').click(function(){
			$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
			$(this).parent().siblings().removeClass('active');
			var id = $(this).attr('href');
			$(id).removeClass('hide');
			$(this).parent().addClass('active');
			return false
		});

	$('.portfolio-slider').slick({
		arrows:false,
		dots:true,
		responsive: [
		{
			breakpoint: 750,
			settings: {
				dots: false,
			}
		}]

	});

	$tabsSlider = $('.nav-tab-list');
	settings = {
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class= "fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class= "fa fa-chevron-right"></i></button>',
	}



	$tabsSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
			$(this).find('.slick-current').siblings().removeClass('active');
			var id = $(this).find('.slick-current a').attr('href');
			$(id).removeClass('hide');
			$(this).find('.slick-current').addClass('active');
			return false
	});

	$(window).on('resize load', function(){
		if($(window).width() > 750) {
			if($tabsSlider.hasClass('slick-initialized')) {
				$tabsSlider.slick('unslick')
			}
			return
		}
		if(!$tabsSlider.hasClass('slick-initialized')) {
			return $tabsSlider.slick(settings)
		}
	})



});


