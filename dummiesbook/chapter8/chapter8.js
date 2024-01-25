let dreamCar = {
    make: "Porsche",
    model: "911 GT3",
    color: "#0074ff",
    year: 2022,
    bodyStyle: "Luxury Car",
    price: 161100
   }
alert ("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;


