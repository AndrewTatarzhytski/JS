"use strict";

let numberOfFilms = +prompt("Какое колличество фильмов вы посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actor:{},
    genres:[],
    privat:false
};