// let name = prompt("What is your name?");
// console.log("Hello " + name);
// if (name.length > 7) {
//     console.log("Wow, you have a REALLY long name!")
// }else {
//     alert("Your name isn't very long!");
// }

// let lemonChicken = confirm("Chef, do you have Lemon Chicken?");
// let beefWithBlackBean = confirm("Chef, do you have Beef with Black Bean?");
// let sweetAndSourPork = confirm("Chef, do you have Sweet and Sour Pork?");

// if (lemonChicken) {
//     alert("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//     alert("I'm having the beef.");
// } else if (sweetAndSourPork) {
//     alert("Ok, I'll have the pork.");
// } else {
//     alert("Well, I guess I'll have rice then.");
// }

// let name = prompt("What is your name?").toLowerCase();
// let myName = 'diego';
// let momName = 'maryke';
// let dadName = 'jonothan';

// if (name === myName) {
//     alert("Hello Me!!");
// } else if (name === momName) {
//     alert("Hello Mom!!");
// } else if (name === dadName) {
//     alert("Hello Dad!!");
// } else {
//     alert("Hello stranger.");
// }

//Loops
// let sheepCounted = 0;

// while (sheepCounted < 10){
//     console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
// console.log("zzzzzzzzz")

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//    }
//    console.log("zzzzzzzzzzz");

// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++) {
//     console.log("Hello!");
// }

// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

// for (let i = 0; i < animals.length; i++){
//     console.log("This zoo contains a " + animals[i] + ".");
// }

// let name = prompt("What is your name?");
// for (let i = 0; i < name.length; i++) {
//  console.log("My name contains the letter " + name[i] + ".");
// }

// console.log("POWERS OF 2")
// for (let x = 2; x < 10000; x = x * 2) {
//     console.log(x);
// }

// console.log("POWERS OF 3")
// for (let y = 3; y < 10000; y = y * 3) {
//     console.log(y);
// }


//CHALLENGE_1
// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// for (let i = 0; i < animals.length; i++){
//     console.log("Awesome " + animals[i]);
//  }

//  //CHALLENGE_2
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// let i = 0;
// while (i < 6;) {
// randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// i++
// }
// console.log(randomString);

//CHALLENGE_3
let input = prompt("Enter a word or phrase");
let output = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if(input[i] === "e") {
        output += "3";
    } else if(input[i] === "i") {
        output += "1";
    } else if(input[i] === "o") {
        output += "0";
    } else  {
        output += input[i];
    }
}

console.log(output);












