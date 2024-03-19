document.getElementById("placeOrder").addEventListener
("click", placeOrder);

function placeOrder() {

 let numPizzas =
document.getElementById("numPizzas").value;
 let typePizza =
document.getElementById("typePizza").value;
 let deliveryCity =
document.getElementById("deliveryCity").value;
 let birthday =
document.getElementById("birthday").value;

 let orderPrice = calculatePrice(numPizzas, typePizza);

 let deliveryPrice = calculateDelivery(orderPrice,
    deliveryCity, birthday);

     let theOutput = "<p>Thank you for your order.</p>";

     if (deliveryPrice === 0) {
     theOutput += "<p>You get free delivery!</p>";
     } else {
     theOutput += "<p>Your delivery cost is: $" +
    deliveryPrice;
     }
     theOutput += "<p>Your total is: $" + (orderPrice +
    deliveryPrice);

     document.getElementById("displayTotal").innerHTML =
    theOutput;
    }

    function calculatePrice(numPizzas, typePizza) {
     let orderPrice = Number(numPizzas) * 10;
     let extraCharge = 0;

     if (typePizza === "supreme") {
     extraCharge = Number(numPizzas) * 2;
     }
     orderPrice += extraCharge;
     return orderPrice;
    }

function calculateDelivery(orderPrice, deliveryCity, birthday) {
    let deliveryPrice = 0;

    switch (deliveryCity) {
        case "Margate":
            deliveryPrice += 2;
            break;
        case "Port-Shepstone":
            deliveryPrice += 4;
            break;
        case "Port-Edward":
            deliveryPrice += 6;
            break;
    }

    if (birthday === "yes") {
        deliveryPrice = 0;
    } else if (deliveryPrice === 0 && orderPrice <= 10) {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}
