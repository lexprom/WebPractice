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

    //console.log(arr[0].replace(arr[0].match(arr[1])[0],""));

    var regex = /[^\s.?,;:!]+/gi;
    var arrMatch = text.match(regex);
    console.table(arrMatch);

    /*var match = arrMatch[0].match(arrMatch[1]);
    console.log(match);
    alert(text.replace(new RegExp(match,"g"),""));*/
    var indexes =[];
    for (var i = 0 ; i < arrMatch.lenght;i++)
    {
        for(var j = 1; arrMatch[i].lenght;j++)
        {
            if(arrMatch[i] == arrMatch[j])
            {
                indexes.push(i);
            }
            else
            {
                 console.log("dicj");
            }
        }
    }
}