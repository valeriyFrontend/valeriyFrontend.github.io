$(document).ready(function(){
    $('.category__box--slider').slick(
        {
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                }
            ]
          }
    );
    $('.products__items, .manufacturers__items').slick({
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      });

    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');
        
        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
     });
});