//task1
"use strict"
function count()
{
    var text = document.getElementById("countText").value;
    var regex = /\d+\.\d+|[+*/-]|\d+/gim;

    var arrMatch = text.match(regex); // array filled matches
    var res = +arrMatch[0];
    console.table(arrMatch);


    arrMatch.forEach((element,i,arrMatch) => {
        switch(element)
        {
            case "+": res += +arrMatch[i+1];break;
            case "-": res -= +arrMatch[i+1];break;
            case "*": res *= +arrMatch[i+1];break;
            case "/": res /= +arrMatch[i+1];break;
            case "=": break;
        }
    });

    alert(res);
}

//task2
function deleteRepeats()
{
  var text = document.getElementById("delete").value;
  var regex = /[^\s.?,;:!]+/gi;
  var arrMatch = text.match(regex);
  var firstWord ="";
  var result = text;

  if(arrMatch == null) { alert(result); }
  firstWord = arrMatch[0];

  for(var j=0; j<firstWord.length; j++) {
    var searchChar = new RegExp(firstWord[j], "i");
    var count = 0;
    for(var i=0; i<arrMatch.length; i++) {
      if(searchChar.test(arrMatch[i])) {
        count++;
      }
    }

    if(count === arrMatch.length) {
      result = result.replace(new RegExp(firstWord[j], "gi"), "");
    }
  }
  alert(result)
}

//task3

function DateParse()
{
  var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  var hour = document.getElementById('hour').value;
  var minute = document.getElementById('min').value;
  var second = document.getElementById('sec').value;
  var mask = document.getElementById('mask').value;
  console.log(month);

  var masks =
  {
    yy : year = year.substring(year.length/2,year.length),
    yyyy : year,
    M : month = month[1],
    MM : month,
    MMM : month = ,
    MMMM :
    d : day = day[1],
    dd : day,
    H : if()

  }
  console.log(masks.M);


}
