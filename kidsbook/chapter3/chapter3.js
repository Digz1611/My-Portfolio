// var dinosaurs = [
//     "T-Rex", 
//     "Velociraptor", 
//     "Stegosaurus", 
//     "Triceratops", 
//     "Brachiosaurus", 
//     "Pteranodon", 
//     "Apatosaurus", 
//     "Diplodocus", 
//     "Compsognathus"
//     ];

//     alert("the last dino is " + dinosaurs[dinosaurs.length-1]);
//     alert("the 4th dino is " + dinosaurs[3]);
//     console.log("the 6th dino can fly, it is the " + dinosaurs[5])
//     console.log("the 7th dino is a big boy, it is the " + dinosaurs[6])

// dinosaurs[0] = "Tyrannosaurus Rex";
// alert("the first dino is "+ dinosaurs[0] + " after the change")
// console.log(dinosaurs);


// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2][0]);
// console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][1]);
// console.log(dinosaursAndNumbers[0]);


// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[maniacs.length-1]);

// console.log(maniacs.length);

// let animals = [];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length);

// animals.unshift("Monkey");
// animals.unshift("Polar Bear");

// console.log(animals);

// let lastAnimal = animals.pop();

// console.log(lastAnimal)
// console.log(animals);

// let firstAnimal = animals.shift();
// console.log(animals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];

// let furryAndScalyAndFeatheredAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);

// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(featheredAnimals);
// console.log(furryAndScalyAndFeatheredAnimals);  


// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("red"));
// console.log(colors.indexOf("purple"));

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join(" eats "));


// let myNames =["Nicholas", "Andrew", "Maxwell", "Morgan"]
// console.log(myNames.join (" is friends with "));


// let randomNumber = Math.random();
// console.log(randomNumber*11);

// console.log(Math.random()*11);

// console.log(Math.floor(Math.random()*10) + 1)

// let randomWords = ["Explosion", "Cave", "Princess", "Pen", "Car", "Dog", "Tree"];

// alert(randomWords[Math.floor(Math.random() * randomWords.length)]);

// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today?",
//     "Computer says no."
//    ];
// console.log(phrases[Math.floor(Math.random()*phrases.length)]);
// phrases

//Random Insult Generator: Old
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// let random1 = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let random2 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let random3 = randomWords[Math.floor(Math.random() * randomWords.length)];

// let randomInsult = "Your " + random1 + " is like a " + random2 +" " + random3 + "!";
// console.log(randomInsult);

//Programming Challenges: MyNewOne
let randomBodyParts = ["Face", "Nose", "Hair", "Body", "Appearance"];
let randomAdjectives = ["Smelly", "Ugly", "Stupid", "Detestable", "Horrid"];
let randomAnimal = ["Pig", "Blobfish", "Hippo", "Alligator", "Mole", "Aye-aye"];
let randomAnimalBP = ["Nose", "Head", "Foot", "Arm", "Belly", "Face"];

let random1 = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let random2 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let random3 = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
let random4 = randomAnimalBP[Math.floor(Math.random() * randomAnimalBP.length)];

let randomInsult1 = "Your " + random1 + " is more " + random2 + " than a " + random3 + "'s " + random4 + ".";
console.log(randomInsult1);

let randomInsult2 = ["Your",random1,"is more",random2,"than a",random3,"'s",random4,"."].join(" ");
console.log(randomInsult2)

let challenge4 = [3,2,1].join(" is bigger than ");
console.log(challenge4);









