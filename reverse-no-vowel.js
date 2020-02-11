// Instructions:
// Build a Node application that takes in a string input via the command line, then reverse it and eliminate the vowel.
// Then console.log the string information for display.

// ====================================


// Take in the command line arguments reverse it and eliminate the vowel using regExp
var inputString = process.argv.slice(2).join(" ").split('').reverse().join('').replace(/[aeiou]/gi, '');
//console log out the string
console.log(inputString)
console.log("-----------------------")



