
var values = document.getElementsByClassName("count");

function newTotal(){                                        //calculating upper sum, upper score and total score and putting that value in respective td
    let total = 0; 

    for(let i = 0; i < values.length; i++){
        
        if(values[i] != null){
            total += Number(values[i].value);
        }
    }
    document.getElementById("total").innerHTML = total;

    let upperTotal = 0;

    for(let i = 0; i < 6; i++){
        upperTotal += Number(values[i].value);
    }

    document.getElementById("upperSum").innerHTML = upperTotal;

    if(upperTotal > 63){
        document.getElementById("bonus").value = 50;
    }
    else {
        document.getElementById("bonus").value = 0;
    }

    document.getElementById("upperScore").innerHTML = upperTotal + Number(values[6].value);
}

for(let i = 0; i < values.length; i++){                             //adding eventlistener to all elements in class 'count'
    values[i].addEventListener("blur", newTotal);
}

document.getElementById("rollButton").addEventListener("click", rollDices);

function rollDices(){
    let dices = document.getElementsByClassName("dice");
    let checkboxes = document.getElementsByClassName("checkbox");

    for(let i=0; i < dices.length; i++){
        let random = Math.floor(((Math.random()*6)+1));

        if(!checkboxes[i].checked){
            dices[i].innerHTML = "<img src=images/" + random +".png>"
        }
    }
}




