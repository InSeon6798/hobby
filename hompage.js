
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Work!!";
} else if (hour == 12) {
    greeting = "YUMMY"
} else {
    greeting = "Home";
}


switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}





function clickHandler() {
    window.location.href = "test.html";

}

