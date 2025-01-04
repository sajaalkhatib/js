//task 1
function tellFortune(num,partner,location,jopTitle){
    console.log("You well be a"+jopTitle+'in'+location+' and married to' +partner+' with '+num+' kids');

}

tellFortune(3,'Alic','jordan','software engineer');

//task2
function calculateDogAge(puppyAge){
    const dogAge=puppyAge*7;
    console.log('your doogie is '+dogAge+ 'years old in dog years!');
    

}
calculateDogAge(4);

//task 3
function supplyCalculator(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = (numPerDay * 365) * (maxAge - age);
    const message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
     console.log(message);
  }
  supplyCalculator(30, 3);

  //task4
  function called(name){
    console.log( 'hello '+name);
   

  }
  called('Adam');

  //task5
  function double(value) {
    return 2 * value;
}

//task6
function double1(x) {
    return 2 * x;
  }
 
  function double2(x) {
    return 2 * x;
  }

  function double3(x) {
    return 2 * x;
  }


  //task 7
  function cube(num){
   return Math.pow(num, 3);

  }
  console.log(cube(4));

  //task8
   function multiply (x,y){
    return x*y;
   }
   console.log(multiply(3,4));
   console.log(multiply(5,4));

   //task 9
   function canIGetADrivingLicense (age){
    if(age>=20){
         console.log('yes you can');
    }
    else{
        var yearsToWait=20-age;
        console.log('please come back after '+ yearsToWait+ 'years to get one');
        
    } 
   }
   
    canIGetADrivingLicense(21);
    canIGetADrivingLicense(17);
    canIGetADrivingLicense(20);
  
 //task10
 function sameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(sameLength("tree", "clue")); 
console.log(sameLength("tree", "car"));   

//task11
function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largerNumber(5, 6)); 
console.log(largerNumber(5, 3)); 

//task 12
function smallerNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
console.log(smallerNumber(8,6,7));
console.log(smallerNumber(5,99,34));
console.log(smallerNumber(5,99,3));
console.log(smallerNumber(5,3,3));

//task13
function shorterString(s1, s2, s3, s4, s5) {
    var stringArray=[s1,s2,s3,s4,s5];
    var shortest=stringArray[0];

    for(let i=0;i<stringArray.length;i++){
        if(stringArray[i].length<shortest.length){
            shortest=stringArray[i];
        }
    }
    return shortest

}
console.log(shorterString("air", "school", "car", "by", "github"));
console.log(shorterString("air","tr","car","by","github"));
console.log(shorterString("by","tr","car","air","github"));
console.log(shorterString("air","by","car","school","github"));
console.log(shorterString("air","tr","by","car","github"));
console.log(shorterString("air","tr","car","github","by"));


//task14
function longerString(s1,s2,s3,s4){
    var string=[s1,s2,s3,s4];
    var longest=string[0];
    for(let i=0;i<string.length;i++){
        if(string[i].length>longest.length)
            longest=string[i]
           

    }
    return longest;

}
console.log(longerString("air", "school", "car", "github"));
console.log(longerString("air", "schoo", "car", "github"));

//task 15
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));

//task 16
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(4));
console.log(isOdd(5)); 
console.log(isOdd(0)); 
console.log(isOdd(-3));

//task 17
function positive(num) {
    return Math.abs(num);
}
console.log(positive(4));  
console.log(positive(-5)); 
console.log(positive(0)); 
console.log(positive(-10)); 

//task18
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Adam", "McCallen")); 
console.log(fullName("Alex", "Mercer"));  
console.log(fullName("John", "Doe"));   

//task 19
function average(num1, num2, num3, num4, num5) {
    var sum = (num1 + num2 + num3 + num4 + num5)/5;
    return sum;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5)); 
console.log(average(10, 20, 30, 40, 50));

//task20

function randomNumber() {
    return Math.random();
}
console.log(randomNumber()); 
console.log(randomNumber()); 


//task 21
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(1, 8));   
console.log(randomBetweenNumbers(3, 100)); 

//task 22
function scoreInUniversity(score) {
    if (score >= 95 && score <= 100) {
        return "A";
    } else if (score >= 85 && score < 95) {
        return "B";
    } else if (score >= 70 && score < 85) {
        return "C";
    } else if (score >= 50 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 50) {
        return "F";
    } else {
        return "Invalid score"; 
    }
}
console.log(scoreInUniversity(96)); 
console.log(scoreInUniversity(3));  
console.log(scoreInUniversity(71)); 

//task 23
let count = 0; 

function counter() {
    count += 1; 
    return count; 
}
console.log(counter()); 
console.log(counter());
console.log(counter()); 

//task 24

let counter1 = 0;
function incrementCounter() {
    return ++counter1;
}

function resetCounter() {
    const previousCount = counter1;
    counter1 = 0;
    return {
        previousCount: previousCount,
        message: "The counter has been reset."
    };
}


incrementCounter(); 
incrementCounter(); 
incrementCounter(); 
const result = resetCounter(); 
console.log(result.previousCount); 
console.log(result.message); 
