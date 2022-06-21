// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// using the variales already noted and given below
// declare a function that i want to call wordCombo
// use as many conditional statements as necessary to compare the words in strings
// if wordCombo1 has more letters than wordCombo2 -- we will return wordCombo1
// use else or else if to see which one is greater and return the one that has more

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const wordCombo = (word1, word2) => {
    if(word1.length > word2.length){
        return word1
    }   else if(word1.length < word2.length){
        return word2
    }   else {
        return "Oh no! None of these words are greater than the other :("
    }
}
console.log(wordCombo(fruit1, fruit2))
console.log(wordCombo(fruit1, fruit3))
console.log(wordCombo(fruit2, fruit3))


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
// variables are already given below
// create a function again called boilingPoint
// use conditional statements for the three temps given. Probably if, else if, else
// use greater or less than statement to see if the const given is higher or lower than 212
// console.log three times 

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (degree) => {
    if (degree < 212){
        return "42 is below boiling point"
    }
    else if (degree > 212){
         return "350 is above boiling point"
    }
    else (degree === 212);
    return "212 is equal to boiling point"
}

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// i dont think a function is required
// need to figure out a way to merge two arrays together i think using .concat or string concatelation
// after the merge i need to display the amount of numbers in the two arrays with .length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const mergedArrays = myNumbers1.concat(myNumbers2)
console.log(mergedArrays.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
// The variable is already set
// I think ill just use .reverse() and input current cohort into the parenthesis
// console log should include the .reverse
// 

const currentCohort = "Delta 2022"
function reverse(currentCohort){
    return currentCohort.split(" ").reverse().join(" ");
}
console.log(reverse(currentCohort))
    


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Because this is an array i need to use conditionals
// Using an "if" would help with doing the math with the numbers in the array
// Using logic in a loop will help with finding out if a number has a remainder
// Last console log twice once with even and once with odd

const myArray = [13, 34, 5, 10, 27, 42]

for(i=0; i < myArray.length; i++) {
    if(myArray[i] % 2 === 0) {
        console.log("even")
    } else
        console.log("odd")
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// With this one i think i am going to subtract each number from the other using conditionals 
// After then return with the equation in it to subtract
// I am going to need to do this four times to figure out which number is bigger than subtract is from the other using if and else if
// the console.log should only have the const number and subtract

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtract = (number1, number2, number3, number4) => {
    if (number1 > number2)
        return number1 - number2 
    else if (number1 < number2) 
        return number2 - number1
    if (number3 > number4)
        return number3 - number4
    else if (number3 < number4) 
        return number3 - number4
    }

console.log(subtract(number1, number2))
console.log(subtract(number3, number4))