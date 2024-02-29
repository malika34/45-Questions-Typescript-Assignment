//Question 15
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/ 

let guestlist:string[]= ["Ali", "Feroz", "Numan"];

let guestlistwhocantmakeit = guestlist.pop();
console.log(`${guestlistwhocantmakeit}, can't make it to the dinner`);

let newguest:string = "Fahad";
guestlist.push(newguest);

for(let guest of guestlist){
    console.log(`${guest} you are cordially invited to dinner. We would be honored to have your presence.`)
}
