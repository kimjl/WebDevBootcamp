//Create array of movie objects
//Each movie needs to have a title, rating and hasWatched properties
//Iterate through the array and print out:
//You have watched "In Burges" - 5 stars.

var movies = [
    {
        title: "In Burges", 
        rating: 5, 
        hasWatched: true
    },
    {
        title: "Frozen", 
        rating: 4.5, 
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road", 
        rating: 5, 
        hasWatched: true
    },
    {
        title: "Les Miserables", 
        rating: 3.5, 
        hasWatched: false
    },
];

function movieDb() {
    movies.forEach(function(movie) {
        if(movie.hasWatched) {
            console.log('You have watched ' + "\"" + movie.title + "\" - " + movie.rating + ' stars.')
        } else {
            console.log('You have not watched ' + "\""+ movie.title + "\" - " + movie.rating + ' stars.')
        }
    });
};
movieDb();

//Colt Solution
// function buildString(movie) {
//     var result = 'You have ';
//     if(movie.hasWatched) {
//         result += 'watched ';
//     } else {
//         result += 'not seen ';
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + "stars.";
//     return result;
// }

// movies.forEach(function(movie) {
//     console.log(buildString(movie));
// });
