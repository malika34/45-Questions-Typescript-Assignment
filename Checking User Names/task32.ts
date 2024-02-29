//Question 32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// List of current users
let current_users: string[] = ["malik", "umer", "shaheer", "arbaz", "usman"];

// List of new users
let new_users: string[] = ["Malik", "Umer", "Ahmed", "Daniyal", "Hamza"];

for (let new_user of new_users) {
    // Convert both the current and new usernames to lowercase for case-insensitive comparison
    let username_taken: boolean = false;

    // Check if the new username is in the list of current users (case-insensitive comparison)
    for (let current_user of current_users) {
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            // If the username is already taken, set the flag to true
            username_taken = true;
            break; // No need to continue searching
        }
    }
    // Print appropriate message based on whether the username is taken or not
    if (username_taken) {
        console.log(`The username '${new_user}' is already taken. Please enter a new username`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}



