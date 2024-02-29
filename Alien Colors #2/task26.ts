//Question 26
/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

//Assigning the alien's color as 'green
let alien_color:string = "green";

// Check if the alien's color is green
if(alien_color === 'green'){
    console.log("Player just earned 5 points ");
}
else{
    console.log("Players just earned 10 points")
}

// Assigning the alien's color as 'red
let alien_color1:string = "red";

// Check if the alien's color is green
if(alien_color1 === 'green'){
    console.log("Player just earned 5 points")
}
else{
    console.log("Players just earned 10 points")
}