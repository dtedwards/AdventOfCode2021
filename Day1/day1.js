var tools=require("../input.js");

var input = tools.input("Day1/input.txt");

let totalIncreases=0;
let lastDepth = null;

input.forEach(e => {
    let depth = Number(e);
    if(lastDepth !== null && lastDepth < depth) {
        totalIncreases += 1;
    }
    lastDepth = depth;
});

console.log("Part 1: " + totalIncreases);

let batchIncreases = 0;
let prevBatch = null;

for(i = 0; i < input.length; i++) {
    let depthBatch = Number(input[i]) + Number(input[i+1]) + Number(input[i+2]);
    if(prevBatch && input[i+1] && input[i+2]) {
        if (depthBatch > prevBatch) {
            batchIncreases++;
        }
    }
    prevBatch = depthBatch;
};

console.log("Part 2: " + batchIncreases);