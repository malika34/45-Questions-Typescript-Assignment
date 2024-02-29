//Question 40
/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
// Function to create an album object
function makeAlbum(artist, title, tracks) {
    // Create an object to hold album details
    var album = { artist: artist, title: title };
    // If numTracks is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
// Function calls without specifying the number of tracks
console.log(makeAlbum('Artist1', 'Album1'));
console.log(makeAlbum('Artist2', 'Album2'));
// Function call with specifying the number of tracks
console.log(makeAlbum('Artist3', 'Album3', 12));
