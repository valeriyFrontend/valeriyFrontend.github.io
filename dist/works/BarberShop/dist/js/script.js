function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

// Slick Slider

$(document).ready(function(){
    $('.info__img').slick({
        prevArrow:'<button class="button slick-prev">НАЗАД</button>',
        nextArrow:'<button class="button slick-next">ВПЕРЕД</button>'
    });
});

// Modal

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
   document.body.style.overflow = 'hidden';
}

span.onclick = function () {
   modal.style.display = "none";
   document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
       document.body.style.overflow = 'auto';
   }
}