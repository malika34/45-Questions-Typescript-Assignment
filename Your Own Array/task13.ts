//Question 13
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let favoritetransportation:string[] = ["Honda Civic", "Toyota Fortuner", "Honda City", "Toyota Corolla"];
for(let item of favoritetransportation){
    console.log(`"I would like to own a ${item}."`);
}