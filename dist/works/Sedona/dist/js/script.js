$('[data-toggle="datepicker"]').datepicker({
    language: 'ru-RU',
    format: 'dd/mm/yyyy',
    weekStart: 1,
    startView: 0,
    yearFirst: true,
});

//COUNTER

let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 50){
    count.innerHTML++;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
  }
}


let count2 = document.getElementById("buttonCountNumber2");

document.getElementById("buttonCountPlus2").onclick = function() {
  let countPlus2 = count2.innerHTML;
  if(+countPlus2 <= 50){
    count2.innerHTML++;
    let countPlus2 = count2.innerHTML;
  }
}

document.getElementById("buttonCountMinus2").onclick = function() {
  let countMinus2 = count2.innerHTML;
  if(+countMinus2 >= 2){
    count2.innerHTML--;
  }
}

//MASK 

$('[data-toggle="datepicker"]').mask("99/99/9999");