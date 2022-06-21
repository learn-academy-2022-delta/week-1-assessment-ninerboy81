// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: I believe that this will show the completely array with "indigo" added inside at the end. ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: After verifying the result was 5 which meant that it added "indigo" to the array but it COUNTED the strings in the array and not actually RETURNED the array. 


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: Using the .length should output how many characters are total in the string so that would be 10 due to the space being a character.
// b) Verify and explain: The answer is 10 like i was thinking. .length just check the amount of characters in a string. 


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The brackets are telling me that it might have something to do with the index of 4. So im thinking this will return a letter and 0 being the first number a computer reads it means that the output will be "o"
// b) Verify and explain: Yup the returned value was a letter since greeting is hello world and index starting at zero and zero being the "H" that means that the "o" was correct.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Since its an array and its wanting the output of index 1 i think that means that it wants the first value of the array and that would be the first word being javascript. 
// b) Verify and explain: Ugh ok so because this is an array and it wants the INDEX of 1 then I should have rememberd that zero still counts and javascripts gets the zero and ruby gets the 1 and python gets 2 >:/


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: So using the .toUppoerCase function I think this will make every character capital and not just the first letter of the words. 
// b) Verify and explain: So i noticed that i am receiving an error with .toUpperCase. You cannot use .toUpperCase to capitalize within an array and found out through some research that you would need to .map()


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Honestly this one is a little different because i havent seen typeof before. So i think that using typeof along with dataTypes.length will return something along the lines of what type of data is in the string. Maybe like "number" or "string" or "true"
// b) So i was right but i still dont really understand why. Im assuming typeof means the type of data within the string within the array. 