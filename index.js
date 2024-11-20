// Array of numbers
const numbers = [5, 12, 8, 130, 44];

// Filter numbers greater than 10
const filteredNumbers = numbers.filter((num) => num > 10 );
    console.log("Filtered Numbers (Greater than 10):",  filteredNumbers); 

// Sort numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);  
console.log("Sorted Numbers (Ascending Order):", sortedNumbers);

// Every Method: Check If All Numbers Are Greater Than 3
const allGreaterThanThree = numbers.every((num => num > 3));
console.log("Are All Numbers Greater Than 3?", allGreaterThanThree);

// Filter Method: Find Words Longer Than 5 Characters
const words = ["banana", "strawberry", "kiwi", "grape", "apple"];
const longWords = words.filter((word) => word.length > 5);
console.log("Words Longer Than 5 Characters:", longWords);

//Sort Method: Sort Words Alphabetically
const sortedWords = words.sort();
console.log("Sorted Words (Alphabetically):", sortedWords);
console.log("Original Words Array:", words);

//Every Method: Check If All Words Contain the Letter 'e'
const allContainE = words.every((word) => word.includes("e"));
console.log("Do All Words Contain the Letter 'e'?", allContainE);

//Every Method: Check If All Words Are Shorter Than 10 Characters
const allShorterThan10 = words.every((word) => word.length < 10);
console.log("Are All Words Shorter Than 10 Characters?", allShorterThan10);
