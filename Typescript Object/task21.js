//Question 21
/*
*/
var movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 }
];
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    console.log("Title: ".concat(movie.title, ", Director: ").concat(movie.director, ", Year: ").concat(movie.year));
}
