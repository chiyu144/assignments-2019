// Assignment 1

function max(...numbers) {
    let maxNumber = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    console.log(maxNumber);
}
max(1, 2, 4, 5); // result to 5
max(5, 2, 7, 1, 6); // result to 7
max(-9, -4, 0, -1); // result to 0
max(-6, -3, -1, -0.1); // result to -0.1
max(-6, -3, -5, -2); // result to -2

// Assignment 2

function calculate(args) {
    let result;
    if (args.op === "+") {
    result = args.n1 + args.n2;
    } else if ( args.op === "-"){
    result = args.n1 - args.n2;
    } else {
    result ="Not supported";
    }
    return result;
}

// Object Literal
let obj1 = {
    op: "+",
    n1: 1000,
    n2: 100
};
console.log(calculate(obj1));

// Function Constructor
function objMaker(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
}
let obj2 = new objMaker("-", 5, 4);
console.log(calculate(obj2));

// Assignment 3

function avg(data){
    let sum = 0;
    for (let i = 0; i < data["products"]["length"]; i++) {
        sum += data["products"][i]["price"];
    }
    let avg = sum / data["products"]["length"];
    console.log(avg);
}
avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
});

// Assignment 4-1

function changeText() {
    let text = document.getElementById("bigHeader");
    text.innerHTML = "<h1>Have a Good Time!</h1><p>ლ(╹◡╹ლ)</p>";
}

// Assignment 4-2

function onOff() {
    let side = document.getElementById("sidenavs");
    if (side.style.opacity === "0.6") {
        side.style.width = "0";
        side.style.opacity = "0"
    } else { 
        side.style.width = "35%";
        side.style.opacity = "0.6"
    }
}

// Assignment 4-3

function trigger() {
    let show = document.getElementById("show");
    let btnText = document.getElementById("showBtn");
    if (show.style.display === "none") {
        btnText.innerHTML = "Show less"; 
        show.style.display = "flex";
    } else {
        btnText.innerHTML = "Show more"; 
        show.style.display = "none";
    }
}

// Assignment 5

function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // returns:[0, 1]
console.log(twoSum([8, -2, 10, 9], 7)); // returns:[1, 3]
console.log(twoSum([0.55, -9.6, -0.1, 0.54], -9.7)); // returns:[1, 2]
