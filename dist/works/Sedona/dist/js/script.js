$( function() {
    $( "#datepicker, #datepicker2" ).datepicker({
        dateFormat: "dd MM yy"
    });
  } );

  let buttonCountPlus = document.getElementById("buttonCountPlus");
  let buttonCountMinus = document.getElementById("buttonCountMinus");
  let count = document.getElementById("buttonCountNumber");

  let buttonCountPlus2 = document.getElementById("buttonCountPlus2");
  let buttonCountMinus2 = document.getElementById("buttonCountMinus2");
  let count2 = document.getElementById("buttonCountNumber2");
  let number = 1;
  let number2 = 0;
  
  buttonCountPlus.onclick = function() {
      if (number < 10) {
          number++;
          count.innerHTML = number;
      }
  };
  
  buttonCountMinus.onclick = function() {
     if (number > 0) {
         number--;
         count.innerHTML = number;
      }
  }

  buttonCountPlus2.onclick = function() {
    if (number2 < 10) {
        number2++;
        count2.innerHTML = number2;
    }
};

buttonCountMinus2.onclick = function() {
   if (number2 > 0) {
       number2--;
       count2.innerHTML = number2;
    }
}