'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Какое колличество фильмов вы посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Какое колличество фильмов вы посмотрели?', '');
//     }
// }



const personalMovieDB = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
    start:
        function () {
            personalMovieDB.count = +prompt('Какое колличество фильмов вы посмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Какое колличество фильмов вы посмотрели?', '');
            }
        },
    rememberMyFilms:
        function () {
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
        },
    detectPersonalLevel:
        function () {
            if (personalMovieDB.count < 10) {
                console.log("Вы посмотрели мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('error');
            }
        },
    showMyDB:
        function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
    toggleVisibleMyDB:
        function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
    writeYourGenres:
        function () {
            for (let i = 1; i < 2; i++) {
                // let genre = prompt(`Ваш любимый жанр ${i}`, "");


                // if (genre == '' || genre == null) {
                //     console.log('Вы ввели некоректные данные');
                //     i--;
                // } else {
                //     personalMovieDB.genres[i - 1] = genre;
                // }
                let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();

                if (genres == '' || genres == null) {
                        console.log('Вы ввели некоректные данные');
                        i--;
                    } else {
                        personalMovieDB.genres = genres.split(', ');
                        personalMovieDB.genres.sort();
                }
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();