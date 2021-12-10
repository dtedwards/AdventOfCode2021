var tools=require("../input.js");

var input = tools.input("Day2/input.txt");

let hp = 0;
let depth = 0;
let aim = 0;

input.forEach(e => {
    let command = e.split(" ");
    let direction = command[0];
    let speed = Number(command[1]);

    console.log(direction + ", " + speed);

    if (direction == "down") {
        aim += speed;
    }

    if (direction == "up") {
        aim -= speed;
    }

    if (direction == "forward") {
        hp += speed;
        depth = (aim * speed) + depth;
    }
    
    console.log(depth + " " + speed);
});

let output = hp * depth;

console.log("HP: " + hp + " Depth: " + depth + " Total: " + output);