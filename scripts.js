// Basics
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is still young.");
}
document.getElementById("greeting").innerText = "Welcome, " + name + "!";

// Functions
function calculateTotal(price, quantity) {
    return price * quantity;
}

function formatName(userName) {
    return "👋 Hello, " + userName.toUpperCase() + "!";
}

// Example
console.log("Total price:", calculateTotal(50, 3));
console.log(formatName(name));

// Loops
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// While loop example
let counter = 5;
while (counter > 0) {
    console.log("Countdown:", counter);
    counter--;
}

// DOM
// 1. Toggle greeting text
document.getElementById("toggleBtn").addEventListener("click", function () {
    let greet = document.getElementById("greeting");
    if (greet.innerText.includes("Welcome")) {
        greet.innerText = "Hello again, " + name + "!";
    } else {
        greet.innerText = "Welcome, " + name + "!";
    }
});

// 2. Countdown on button click
document.getElementById("countBtn").addEventListener("click", function () {
    let count = 5;
    let countdownDiv = document.getElementById("countdown");

    let timer = setInterval(function () {
        countdownDiv.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(timer);
            countdownDiv.innerText = "Time's up!";
        }
    }, 1000);
});

// 3. Dynamically create list items
let list = document.getElementById("list");
fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
});
