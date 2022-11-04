'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Какое колличество фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Какое колличество фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms() {
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
}

rememberMyFilms();

// switch (true) {
//     case personalMovieDB.count < 10:
//         console.log("Вы посмотрели мало фильмов");
//         break;
//     case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
//         console.log("Вы классический зритель");
//         break;
//     case personalMovieDB.count >= 30:
//         console.log('Вы киноман');
//         break;
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Вы посмотрели мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

// function showMyDB(){
//     if(personalMovieDB.privat==false){
//         console.log(personalMovieDB);
//     } else{
//         console.log('error');
//     }
// }

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр ${i}`, "");
        // personalMovieDB.genres[i - 1] = genre;
        // или
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`, "");
    }
}

writeYourGenres();