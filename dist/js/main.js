$(document).ready(function() {
    $(".scroll-about, .header__button").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
    });
});

var offset = 600;
$(window).scroll(function(){
  var scrolltop = $(this).scrollTop();
  $('.skills').each(function(){
    if(scrolltop >= $(this).offset().top - offset) {
        var html = document.getElementById("html");
        var css = document.getElementById("css");
        var jquery = document.getElementById("jquery");
        var photoshop = document.getElementById("photoshop");
        html.style.width = "90%";
        css.style.width = "80%";
        jquery.style.width = "30%";
        photoshop.style.width = "70%";
    }
  });
});

// function myFunction() {
//     myVar = setTimeout(showPage, 1600);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }