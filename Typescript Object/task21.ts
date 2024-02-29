//Question 21

/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

let movies: { title: string, director: string, year: number }[] = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 }
];

for (let movie of movies) {
    console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`);
};