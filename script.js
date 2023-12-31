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

// Colorful Rain

// function rain(){
//     let amount = 200;
//     let body = document.querySelector('body');
//     let i = 0;
//     while(i < amount){
//         let drop = document.createElement('i');

//         let size = Math.random() * 5;
//         let posX = Math.floor(Math.random() * window.innerWidth);
//         let delay = Math.random() * -20;
//         let duration = Math.random() * 5;

//         drop.style.width = 0.2 + size + 'px';
//         drop.style.left = posX + 'px';
//         drop.style.animationDelay = delay + 's';
//         drop.style.animationDuration = 1 + duration + 's';
//         body.appendChild(drop);
//         i++
//     }
// }