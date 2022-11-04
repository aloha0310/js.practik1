"use strict";
 
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмах?', ''),
            b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

        personalMovieDB.movies[a] = b;
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat );

function writeYourGenerals() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenerals();
