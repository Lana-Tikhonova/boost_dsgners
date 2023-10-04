$(document).ready(function () {

    $('.menu_btn').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile_menu').toggleClass('open');
        $('body').toggleClass('locked');
    });

    $('.menu a').on('click', function (e) {
        e.preventDefault();
		let href = $(this).attr("href");
		$('.mobile_menu').removeClass('open')
		$('body').removeClass('locked')
		$('.menu_btn').removeClass('active')

        $("html, body").animate({
            scrollTop: $(href).offset().top - 45
        }, 1000);
		
	});


    const whatSlider = new Swiper('.what_is_slider .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 600,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    const scheduleItem = $('.schedule_item');
    scheduleItem.filter(':first').toggleClass('active');
    scheduleItem.filter(':first').find('.schedule_block').slideToggle();
    scheduleItem.filter(':first').next().toggleClass('active_prev');


    $('.schedule_item_open').on('click', function () {
        let scheduleItemParent = $('.schedule_item_open').not(this).parent();
        scheduleItemParent.removeClass('active');
        scheduleItemParent.find('.schedule_block').slideUp();
        scheduleItemParent.next().removeClass('active_prev');

        $(this).parent().toggleClass('active');
        $(this).parent().find('.schedule_block').slideToggle();
        $(this).parent().next().toggleClass('active_prev');
    });

    $('.faq_item_btn').on('click', function () {
        $('.faq_item_btn').not(this).parent().removeClass('active');
        $('.faq_item_btn').not(this).next().slideUp();

        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
    });

    if ($('.video_reviews_item').length) {
        $('.video_reviews_item').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
    }

    const reviewsSlider = new Swiper('.video_reviews .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 6,
        speed: 600,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper_block .swiper-button-next",
            prevEl: ".swiper_block .swiper-button-prev",
        },
        breakpoints: {
            577: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            750: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            890: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            993: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1351: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
        }
    });


    //маска на инпут с Суммой вывода
    $('#currency-mask').on('focus', function () {
        var currencyMask = IMask(
            document.getElementById('currency-mask'), {
                mask: 'DD USDT',
                lazy: false,
                scale: 2,
                blocks: {
                    DD: {
                        mask: Number,

                    }
                }

            });
    });

});