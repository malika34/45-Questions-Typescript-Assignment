//Question 14
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guestlist:string[] = ["Ali", "Feroz", "Numan"];
for(let guest of guestlist){
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}