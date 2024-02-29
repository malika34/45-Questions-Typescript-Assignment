//Quesion 3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

//Lowercase
let myName:string = "Malik Musadiq Ahmed";
console.log("Lowercase:", myName.toLowerCase());

//Uppercase
console.log("Uppercase:", myName.toUpperCase());

//Titlecase
console.log("Titlecase:", myName.replace(/\bw/g,c => c.toUpperCase()));

