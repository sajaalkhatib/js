
//task1
let x = 250; 
let zakatPercentage = 2.5 / 100; 

let zakatValue = x * zakatPercentage; 
console.log("The zakat value for x is: " + zakatValue);

//task2
let array1 = [1, 7, 9, 45];
let array2 = ["Str", "alex", "moh"];
let array3 = ['the', 'fox', 'over', 'lazy', 'dog'];

//task3
var fruits = ["Tomato", "Banana", "Watermelon"];

let indexBanana = fruits.indexOf("Banana");
let indexTomato = fruits.indexOf("Tomato");

console.log("Index of Banana: " + indexBanana);
console.log("Index of Tomato: " + indexTomato);

//task4
let favoriteThings = [
    ["Pizza", "Sushi"],
    ["Football", "Basketball", "Swimming"], 
    ["Inception", "The Matrix"] 
];

console.log("Favorite Food: ", favoriteThings[0]);
console.log("Favorite Sport: ", favoriteThings[1]);
console.log("Favorite Movie: ", favoriteThings[2]);


//task5
function firstOfArray(arr) {
    return arr[0];
}

console.log(firstOfArray([1, 2, 3])); 
console.log(firstOfArray(["s", "a", "j", "a"])); 

//task6
function firstOfArray(arr) {
    return arr[arr.length - 1];
}

console.log(firstOfArray([1, 2, 3])); 
console.log(firstOfArray(["s", "a", "j", "a"])); 

//task7

var array = [0, 5, 7, 9];
array.shift(); 
array.unshift(1, 3, 4);
array.splice(array.indexOf(7), 1); 
array.push(6, 8, 10); 

console.log(array);

//task8
var array4 = [5, 9, -7, 3.5];
let pushResult = array4.push(10); 
console.log("Result of push:", pushResult); 
console.log("Array after push:", array4);
let unshiftResult = array4.unshift(20); 
console.log("Result of unshift:", unshiftResult); 
console.log("Array after unshift:", array2); 

let shiftResult = array2.shift();
console.log("Result of shift:", shiftResult); 
console.log("Array after shift:", array2); 

let popResult = array2.pop(); 
console.log("Result of pop:", popResult); 
console.log("Array after pop:", array2); 

//task9
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
    return a - b; 
});

console.log("Sorted Array:", arr1);

//task10
function rateToText(rate) {
    if (rate < 50) {
        return "Fail";
    } else if (rate >= 50 && rate <= 59) {
        return "E";
    } else if (rate >= 60 && rate <= 69) {
        return "D";
    } else if (rate >= 70 && rate <= 79) {
        return "C";
    } else if (rate >= 80 && rate <= 89) {
        return "B";
    } else if (rate >= 90 && rate <= 100) {
        return "A";
    } else {
        return "Invalid rate"; 
    }
}


console.log(rateToText(45)); 
console.log(rateToText(55)); 
console.log(rateToText(65)); 
console.log(rateToText(75)); 
console.log(rateToText(85)); 
console.log(rateToText(95)); 

//task10
for (let i = 1; i <= 8; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    console.log(pattern.trim()); 
}


// let x =0;
// for(let i = 1; i < 9; i++){
//     x = x + i +" " 
//     console.log(x); 
// }




