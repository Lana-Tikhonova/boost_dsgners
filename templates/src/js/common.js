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
    scheduleItem.filter(':first').find('.schedule_block_item').slideToggle();
    scheduleItem.filter(':first').next().toggleClass('active_prev');


    $('.schedule_item_open').on('click', function () {
        let scheduleItemParent = $('.schedule_item_open').not(this).parent();
        scheduleItemParent.removeClass('active');
        scheduleItemParent.find('.schedule_block_item').slideUp();
        scheduleItemParent.next().removeClass('active_prev');

        $(this).parent().toggleClass('active');
        $(this).parent().find('.schedule_block_item').slideToggle();
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

    // modals
    const body = document.querySelector('body');
    let getScrollWidth = () => window.innerWidth - document.documentElement.offsetWidth;
    let browserScrollWidth = getScrollWidth();

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('[data-open-modal]')) {
            e.preventDefault();
            const targetId = target.closest('[data-open-modal]').dataset.openModal;
            const selectedModal = document.querySelector(`[data-modal="${targetId}"]`);
            selectedModal.classList.add('show');
            body.classList.add('locked_modal');
            if (getScrollWidth() == 0) {
                body.style.paddingRight = `${browserScrollWidth}px`;
            }
        }
        if (target.closest('[data-modal-close]')) {
            e.preventDefault();
            let modalOpen = document.querySelector('.modal.show');
            document.querySelector('.modal.show').classList.remove('show');
            body.classList.remove('locked_modal');
            body.style.paddingRight = ``;
        }
        if (target.closest('.modal') && !target.closest('.modal-content')) {
            e.preventDefault();
            let modalOpen = document.querySelector('.modal.show');
            document.querySelector('.modal.show').classList.remove('show');
            body.classList.remove('locked_modal');
            body.style.paddingRight = ``;
        }
    });

    $('.price_time_countdown').countdown({
        until: new Date(2023, 9, 8),
        format: 'DHMS'
    });

    $('.price_time_close').on('click', function () {
        $('.price_time_wrapper').hide();
    });

});