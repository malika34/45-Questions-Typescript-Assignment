//Question 15
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
var guestlist = ["Ali", "Feroz", "Numan"];
var guestlistwhocantmakeit = guestlist.pop();
console.log("".concat(guestlistwhocantmakeit, ", can't make it to the dinner"));
var newguest = "Fahad";
guestlist.push(newguest);
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("".concat(guest, " you are cordially invited to dinner. We would be honored to have your presence."));
}
