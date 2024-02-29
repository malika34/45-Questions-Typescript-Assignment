//Question 16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/


let guestlist:string[] = ["Ali", "Feroz" , "Numan"];
let guestwhocantmakeit = guestlist.pop()
console.log(`${guestwhocantmakeit} can't make the dinner`);

let newguest:string = "Fahad";
guestlist.push(newguest)
console.log("We've found a bigger dinner table!");

let newguest1:string = "Rehan";
let newguest2:string = "Malik";
let newguest3:string = "Sohaib";

guestlist.unshift(newguest1);
let middleindex:number = Math.floor(guestlist.length/2);
guestlist.splice(middleindex, 0, newguest2, newguest3 );

for(let guest of guestlist){
console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`)
};

