// function calAmount(){
//     var RM = document.getElementById("Rupee").value;
//     var USD = "USD";
//     var SGD = "SGD";
//     var EUR = "EUR";
//     var currency={
//         "USD":83.2,
//         "SGD":62.38,
//         "EUR":90.89
        
//     }
//      for (var key in currency) {
//             if (currency.hasOwnProperty(key)) {
//               console.log(key + ': ' + currency[key]);
//               if(document.getElementById("selection").value == key){
//                 document.getElementById("Amount").value = RM * 83.2;
//             }
//             else if(document.getElementById("selection").value == key){
//                 document.getElementById("Amount").value = RM * 62.38;
//                 document.getElementById("Amount").value = document.getElementById("Amount").value.toFixed(2);
                
//             }
//             else if(document.getElementById("selection").value == key){
//                 document.getElementById("Amount").value = RM * 90.89;
//             }
//             else{
//                 document.getElementById("Amount").value = "please select your selection";
//             }
//             }
//           }
    
    
// }



function calAmount() {
    var RM = parseFloat(document.getElementById("Rupee").value);
    var selection = document.getElementById("selection").value;
    var currency = {
      "USD": 83.2,
      "SGD": 62.38,
      "EUR": 90.89
    };
  
    // Check if the selected currency is in the currency object
    if (currency.hasOwnProperty(selection)) {
      var exchangeRate = currency[selection];
      var amount = RM * exchangeRate;
  
      // Display the amount with two decimal places
      document.getElementById("Amount").value = amount.toFixed(2);
    } else {
      // If the selected currency is not in the currency object
      document.getElementById("Amount").value = "Please select a valid currency";
    }
  }
  

