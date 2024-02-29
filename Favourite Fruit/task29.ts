//Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits:string[]=["apple", "mango", "watermelon"];

// Check if 'apple' is in the array
if (favorite_fruits.some(fruit => fruit === 'apple')){
    console.log("Your really like apple!")
}
// Check if 'mango' is in the array
if (favorite_fruits.some(fruit => fruit === 'mango')){
    console.log("Your really like mango!")
}
// Check if 'watermelon' is in the array
if (favorite_fruits.some(fruit => fruit === 'watermelon')){
    console.log("Your really like watermelon!")
}
// Check if 'kiwi' is in the array
if (favorite_fruits.some(fruit => fruit === 'kiwi')){
    console.log("Your really like kiwi!")
}
// Check if 'grapes' is in the array
if (favorite_fruits.some(fruit => fruit === 'grapes')){
    console.log("Your really like grapes")
}
