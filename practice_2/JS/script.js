"use strict";

 let numberOfFilms = +prompt("Какое колличество фильмов вы посмотрели?", "");


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
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);