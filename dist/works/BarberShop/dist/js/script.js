function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

$(document).ready(function(){
    $('.info__img').slick({
        prevArrow:'<button class="button slick-prev">НАЗАД</button>',
        nextArrow:'<button class="button slick-next">ВПЕРЕД</button>'
    });
        // {
        //     responsive: [
        //         {
        //             breakpoint: 480,
        //             settings: {
        //                 arrows: false,
        //             }
        //         }
        //     ]
        //   }
    // $('.products__items, .manufacturers__items').slick({
    //     responsive: [
    //         {
    //             breakpoint: 2048,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    //   });
});