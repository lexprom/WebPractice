"use strict"
//task1
function count()
{
    var text = document.getElementById("countText").value;
    var regex = /\d+\.\d+|[+*/-]|\d+/gim;


    if(text.match(/=/g) != null && text.match(/=/g).length == 1)
    {
      var arrMatch = text.substring(0,text.indexOf('=')).match(regex); // array filled matches
    }
    else if(text.match(/=/g) == null)
    {
      var arrMatch = text.match(regex);
    }
    else
    {
      document.getElementById('resCount').value = 'Too much "="';
    }
    
    
    var res = +arrMatch[0];
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
    document.getElementById('resCount').value = res.toFixed(2).toString();
}

//task2
function deleteRepeats()
{
  var text = document.getElementById("delete").value;
  var arrMatch;
  var regex = /[^\s.?,;:!]+/gi;
  if(document.getElementById("delete").value == '')
  {
    document.getElementById("delete").value="Empty area"
  }
  else
  {
  arrMatch = text.match(regex);
  console.table(arrMatch);
  var firstWord;
  var result = text;

  for (let index = 0; index < arrMatch.length; index++) {
    if(arrMatch[index].match('$') || arrMatch[index].match('*'))
    {
      arrMatch[index] = arrMatch[index].replace('$','/$')
    }
  }

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
  document.getElementById('delete').value = result;
  }
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
  

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
  "Aug", "Sep", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var date = new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute);

  const MonthFix = newValue => {
    return (match, offset, string) => {
        const isAlone = (string.slice(offset - 1, offset) !== 'M' && string.slice(offset + match.length, offset + match.length + 1) !== 'M')
        return isAlone ? newValue : match
    }
  }

  var masks =
  {
    yyyy : year,
    yy : year.substring(year.length/2,year.length),
    MMMM : monthNames[date.getMonth()] ,
    MMM : monthNamesShort[date.getMonth()],
    MM : MonthFix(month),
    M : MonthFix(month%10),
    dd : day,
    d : day[1],
    HH : date.getHours()>=12 ? hour : new Date(date + "PM").getHours(),
    H : date.getHours()>=12 ? hour : new Date(date + "PM").getHours(),
    hh : date.getHours()<=12 ? hour : ((date.getHours() % 12) || 12),
    h : date.getHours()<=12 ? hour : ((date.getHours() % 12) || 12),
    mm : minute,
    m : minute[1],
    ss : second,
    s : second[1]
  }

  var res = mask;

  res = res.replace(/yyyy/g,masks.yyyy);
  res = res.replace(/yy/g,masks.yy);
  res = res.replace(/dd/g,masks.dd);
  res = res.replace(/d/g,masks.d);
  res = res.replace(/HH/g,masks.HH);
  res = res.replace(/H/g,masks.H);
  res = res.replace(/hh/g,masks.hh);
  res = res.replace(/h/g,masks.h);
  res = res.replace(/mm/g,masks.mm);
  res = res.replace(/m/g,masks.m);
  res = res.replace(/ss/g,masks.ss);
  res = res.replace(/s/g,masks.s);
  res = res.replace(/MMMM/g, masks.MMMM).replace(/MMM/g, masks.MMM).replace(/MM/g,masks.MM).replace(/M/g, masks.M);
  
  document.getElementById('resParse').value = '';
  document.getElementById('resParse').value = res;
}