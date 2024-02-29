//Question 16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
var guestlist = ["Ali", "Feroz", "Numan"];
var guestwhocantmakeit = guestlist.pop();
console.log("".concat(guestwhocantmakeit, " can't make the dinner"));
var newguest = "Fahad";
guestlist.push(newguest);
console.log("We've found a bigger dinner table!");
var newguest1 = "Rehan";
var newguest2 = "Malik";
var newguest3 = "Sohaib";
guestlist.unshift(newguest1);
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, newguest2, newguest3);
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
;
