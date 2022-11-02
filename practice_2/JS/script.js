'use strict';

let numberOfFilms = +prompt('Какое колличество фильмов вы посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}



switch (personalMovieDB) {
    case personalMovieDB.count < 10:
        console.log("Вы посмотрели мало фильмов");
        break;
    case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
        console.log("Вы классический зритель");
        break;
    case personalMovieDB.count >= 30:
        console.log('Вы киноман');
        break;
}

// if (personalMovieDB.count < 10) {
//     console.log("Вы посмотрели мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('error');
// }

console.log(personalMovieDB);