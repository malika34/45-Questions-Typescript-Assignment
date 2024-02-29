//Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favorite_fruits = ["apple", "mango", "watermelon"];
if (favorite_fruits.some(function (fruit) { return fruit === 'apple'; })) {
    console.log("Your really like apple!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'mango'; })) {
    console.log("Your really like mango!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'watermelon'; })) {
    console.log("Your really like watermelon!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'kiwi'; })) {
    console.log("Your really like kiwi!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'grapes'; })) {
    console.log("Your really like grapes");
}
