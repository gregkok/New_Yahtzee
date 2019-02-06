
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

    if(document.getElementById("ytz").value == 50){
        document.getElementById("z10").style.display = "block";
    }
    else{
        document.getElementById("z10").style.display = "none"; 
    }
}

for(let i = 0; i < values.length; i++){                             //adding eventlistener to all elements in class 'count'
    values[i].addEventListener("blur", newTotal);
}

document.getElementById("rollButton").addEventListener("click", rollDices);

var throws = 0;

function rollDices(){
    let dices = document.getElementsByClassName("dice");
    let checkboxes = document.getElementsByClassName("checkbox");

    throws++;

    for(let i=0; i < dices.length; i++){
        let random = Math.floor(((Math.random()*6)+1));

        if(!checkboxes[i].checked){
            dices[i].innerHTML = "<img src=images/" + random +".png>"
        }
    }

    if(throws == 4){
        for(let i = 0; i < dices.length; i++){
            dices[i].innerHTML = "<img src=images/" + 7 +".png>"
            throws = 0;
        }
    }
}

var values2 = document.getElementsByClassName("count2");

function newTotal2(){                                        //calculating upper sum, upper score and total score and putting that value in respective td
    let total2 = 0; 

    for(let i = 0; i < values2.length; i++){
        
        if(values2[i] != null){
            total2 += Number(values2[i].value);
        }
    }
    document.getElementById("total2").innerHTML = total2;

    let upperTotal2 = 0;

    for(let i = 0; i < 6; i++){
        upperTotal2 += Number(values2[i].value);
    }

    document.getElementById("upperSum2").innerHTML = upperTotal2;

    if(upperTotal2 > 63){
        document.getElementById("bonus2").value = 50;
    }
    else {
        document.getElementById("bonus2").value = 0;
    }

    document.getElementById("upperScore2").innerHTML = upperTotal + Number(values2[6].value);

}

for(let i = 0; i < values2.length; i++){                             //adding eventlistener to all elements in class 'count'
    values2[i].addEventListener("blur", newTotal2);
}




