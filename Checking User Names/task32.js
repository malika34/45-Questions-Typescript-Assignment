//Question 32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// List of current users
var current_users = ["malik", "umer", "shaheer", "arbaz", "usman"];
// List of new users
var new_users = ["Malik", "Umer", "Ahmed", "Daniyal", "Hamza"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert both the current and new usernames to lowercase for case-insensitive comparison
    var username_taken = false;
    // Check if the new username is in the list of current users (case-insensitive comparison)
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            // If the username is already taken, set the flag to true
            username_taken = true;
            break; // No need to continue searching
        }
    }
    // Print appropriate message based on whether the username is taken or not
    if (username_taken) {
        console.log("The username '".concat(new_user, "' is already taken. Please enter a new username"));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
