// Question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// this is taking the last number(93) and then subtracting the first number(element 0) from it
let difference = ages[ages.length - 1] - ages[0]; 

console.log("The difference of the last age to the first age:", difference);
// .push allows you to add an element to the array
ages.push(48);

difference = ages[ages.length - 1] - ages[0]

console.log("The new difference of the last age to the first age:", difference)

for (let i = 0; i < 9; i++)
    console.log(ages[i])
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
 let average = sum / ages.length; //this will find the average of the array
 console.log("Average age", average);
// Question 2
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
 console.log(names)

 let letters = 0;
 for (let i = 0; i < names.length; i++) {
    letters += names[i].length
 }
 let letterAverage = letters / names.length;
 console.log("average letters", letterAverage);

//  this is a loop to concatenate the names

 let concatenatedNames = "";

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}

console.log("Concatenated names:", concatenatedNames);
 
//  Question 3
// accessing the last element of an array
names.length 
// this shows the number of elements in the array
lastName = names[names.length - 1] 
// this will access the last element in the array

console.log(lastName)

// Question 4
// accessing the first element in the array, you would use its index
let firstName = names[0]
console.log("First name in the list:", firstName)

// Question 5

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    // this accesses the index in each name array and then grabs the length of each
    nameLengths.push(names[i].length)
}
console.log("The length of each name:", nameLengths)

// Question 6
// to loop to iterate nameLengths array
for (let i = 0; i < nameLengths.length; i++) { 
    console.log(nameLengths[i]);
}
let lengthSum = 0
for (let i = 0; i < names.length; i++) {
    lengthSum += names[i].length;
}
console.log("Sum of name lengths:", lengthSum)

// Question 7

function repeatWord(word, n) {
    let result = ''; 
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
// we left the string empty and then applied the values here
let result = repeatWord("Hello", 3)
console.log(result)
 
// Question 8

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;  
}
let getFullName = fullName("Blake" , "Miller")
console.log(getFullName)

// Question 9
function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum > 100
}

let numbers = [3, 9, 23, 64, 2, 8, 28, 93];
let results = sumOfNumbers(numbers);
console.log(results);

// Question 10
function averageOfNumbers(numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length
    // calculates the average
    
    return average;
}

let averages = averageOfNumbers(numbers);
console.log(averages)

// Question 11

function isAverageGreater(array1, array2) {
    function calculateAverage(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
      
    return sum / numbers.length
}
let average1 = calculateAverage(array1);
let average2 = calculateAverage(array2)

    return average1 > average2;
    // this will return true is the average of the first array is great than the average of the second

}

let numberSetA = [1, 2, 3]
let numberSetB = [4, 5, 6]
let theresult = isAverageGreater(numberSetA, numberSetB);
console.log(theresult)
// I keep getting back "result has already been idetified" so do I have to tweak it a bit on everyone since I have already used "result" above?

// Question 12

function willBuyDrinks(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

let isHotOutside = true;
let moneyInPocket = 18
let endresult = willBuyDrinks(isHotOutside, moneyInPocket);
console.log(endresult)

// Question 13

function canAmandaEatLunch(hasPeanutButter, hasFruit, momPackedLunch) {
    // these are the conditions if she can eat her lunch
    return (!hasPeanutButter && hasFruit) || momPackedLunch;
}

let hasPeanutButter = false; // Does the lunch have peanut butter?
let hasFruit = true;         // Is there a fruit option?
let momPackedLunch = false;  // Did Amanda's mom pack her lunch?

let lunchresult = canAmandaEatLunch(hasPeanutButter, hasFruit, momPackedLunch);
console.log(lunchresult);

// Amanda can eat her lunch because it doesn't have peanut butter and there is a fruit option