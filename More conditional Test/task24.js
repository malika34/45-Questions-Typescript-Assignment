//Question 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 
• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var fruit = "apple";
var anotherfruit = "banana";
var number = 10;
var sentence = "Hello, World!";
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Equality test (true): Is 'apple' equal to 'apple'? I predict true.");
console.log(fruit == 'apple');
console.log("Equalty test (false): Is 'apple' equal to 'banana'? I predict false");
console.log(fruit == 'anotherFruit');
// Tests using the lower case function
console.log("Lowercase test (true): Is 'APPLE' equal to 'apple' after converting to lowercase? I predict True.");
console.log(fruit.toLowerCase() == 'apple');
console.log("Lowercase Test (false): Is 'BANANA' equal to 'apple' after converting to lowercase? I predict False.");
console.log(anotherfruit.toLowerCase() == 'apple');
//Numerical Tests
console.log("Greater than test (true): Is 10 greater than 5? I predict true.");
console.log(number > 5);
console.log("Greater than test (false): Is 5 greater than 10? I predict false.");
console.log(5 > number);
console.log("Less than test (true): Is 10 less than 15? I predict true");
console.log(number < 15);
console.log("Less Than Test (false): Is 15 less than 10? I predict false.");
console.log(15 < number);
console.log("Greater than or equals test (true): is 10 greater than or equals to 5? I predict true");
console.log(number >= 5);
console.log("Greater than or equal test (false): Is 5 greater than or equal to 10? I predict False.");
console.log(5 >= number);
console.log("Less than or equal test (true): Is 15 greater or equal to 10? I predict true");
console.log(number <= 15);
console.log("Less than or equal test (false): Is 10 greater or equal to 15? I predict false");
console.log(15 <= number);
// Tests using "and" and "or" operators
console.log("And Operators test (true): Is 10 greater than 5 and less than 15? I predict true");
console.log(number > 5 && number < 15);
console.log("And Operators test (false): Is 5 greater than 10 and less than 15? I predict false");
console.log(5 > number && number < 15);
console.log("Or Operators test (true): Is 10 greater than 5 or less than 15? I predict true");
console.log(number > 5 || number < 15);
console.log("Or Operators test (false): Is 5 is greater than 10 or greater than 15? I predict false");
console.log(5 < number || number > 15);
// Test whether an item is in an array
console.log("In Array test (true): Is 3 is in the array [1, 2, 3, 4, 5]? I predict true");
console.log(array.includes(3));
console.log("In Array test (false): Is 6 is in the array [1, 2, 3, 4, 5]? I predict false");
console.log(array.includes(6));
