var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
// Define the function make_great to modify magician names
function make_great(magicians) {
    // Create a copy of the original array
    var modifiedMagicians = __spreadArray([], magicians, true);
    // Modify each magician's name to include "the Great"
    for (var i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }
    // Return the modified array
    return modifiedMagicians;
}
// Define the function show_magicians to print magician names
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Original array of magician names
var magicians = ["Merlin", "Gandalf", "Harry Houdini"];
// Call make_great with a copy of the original array
var greatMagicians = make_great(magicians.slice());
// Show the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
