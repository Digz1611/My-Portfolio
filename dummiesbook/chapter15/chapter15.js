let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

todoButton.addEventListener("click", displayActivity);

let d = new Date();

displayDate();
function displayDate() {
 todayDate.innerHTML = d.toDateString();
}
function displayActivity() {

 let dayOfWeek = d.getDay();

let youShould;
switch (dayOfWeek) {
case 0:
youShould = "Go about the day with a smile on your face";
break;
case 1:
youShould = "Take time off to relax! It's something you deserve!";
break;
case 2:
youShould = "Spend time with you family and/or pets.";
break;
case 3:
youShould = "You should go for a nice relaxing walk.";
break;
case 4:
youShould = "Read about something new";
break;
case 5:
youShould = "Make a list of things you like to do.";
break;
case 6:
youShould = "Do one thing from your list of things you like to do.";
break;
default:
youShould = "Hmm. Something has gone wrong.";
break;
}

document.getElementById("thingToDo").innerHTML =
youShould;
}