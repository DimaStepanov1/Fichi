jQuery(function($) {
    if ($(window).width() > 1024.98) {
        $(window).scroll(function() {
            var sticky = $('header'),
                scroll = $(window).scrollTop();
            if (scroll >= 30) {
                sticky.addClass('sticky');

            } else {
                sticky.removeClass('sticky');

            }
        });
    }
    $('.mission-slider').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.quote-text:not(.quote.first .quote-text)').hide();
    $('.quote-author').click(function() {
        $('.quote-text').fadeOut()
        $(this).siblings('.quote-text').fadeIn()
    })
})