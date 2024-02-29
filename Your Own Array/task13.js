//Question 13
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var favoritetransportation = ["Honda Civic", "Toyota Fortuner", "Honda City", "Toyota Corolla"];
for (var _i = 0, favoritetransportation_1 = favoritetransportation; _i < favoritetransportation_1.length; _i++) {
    var item = favoritetransportation_1[_i];
    console.log("\"I would like to own a ".concat(item, ".\""));
}
