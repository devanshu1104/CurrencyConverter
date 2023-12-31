function calAmount(){
    var RM = document.getElementById("RM").value;
    var USD = "USD";
    var SGD = "SGD";
    var EUR = "EUR";
    if(document.getElementById("selection").value == "USD"){
        document.getElementById("Amount").value = RM * 4.20;
    }
    else if(document.getElementById("selection").value == "SGD"){
        document.getElementById("Amount").value = RM * 3.05;
        document.getElementById("Amount").value = document.getElementById("Amount").value.toFixed(2);
        
    }
    else if(document.getElementById("selection").value == "EUR"){
        document.getElementById("Amount").value = RM * 4.55;
    }
    else{
        document.getElementById("Amount").value = "please select your selection";
    }
}

