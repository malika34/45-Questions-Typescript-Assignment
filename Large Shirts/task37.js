//Question 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Typescript'; }
    console.log("Creating a ".concat(size, "-sized shirt with the messages:\"").concat(message, "\"."));
}
;
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt('medium', 'I am noob in Programming');
// Create a shirt of any size with a different message
make_shirt('small', 'Hello world!');
