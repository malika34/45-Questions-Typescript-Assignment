//Question 43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
// Define the function make_great to modify magician names
function make_great(magicians: string[]): string[] {
    // Create a copy of the original array
    let modifiedMagicians = [...magicians];
    // Modify each magician's name to include "the Great"
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }
    // Return the modified array
    return modifiedMagicians;
}

// Define the function show_magicians to print magician names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician names
let magicians: string[] = ["Merlin", "Gandalf", "Harry Houdini"];

// Call make_great with a copy of the original array
let greatMagicians = make_great(magicians.slice());

// Show the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
