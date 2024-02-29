//Question 18
/*
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["United States America", "London", "Paris", "Tokyo", "Turkey"];
console.log("\noriginal order:");
console.log(locations);
console.log("\nAlphabetic Order:");
console.log(__spreadArray([], locations, true).sort());
console.log("\nOriginal Order:");
console.log(locations);
console.log("\nReverse Alphabetic Order:");
console.log(__spreadArray([], locations, true).sort().reverse());
console.log("\n Original Order:");
console.log(locations);
console.log("\n Reverse Order:");
console.log(__spreadArray([], locations, true).reverse());
console.log("\n Original Order:", "(Reversed again)");
console.log(locations);
console.log("\n sorted Alphabetic Order:");
console.log(__spreadArray([], locations, true).sort());
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("\n Sorted Reverse Alphabetic Order:");
console.log(locations);
