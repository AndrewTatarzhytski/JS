"use strict";

let numberOfFilms = +prompt("Какое колличество фильмов вы посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);