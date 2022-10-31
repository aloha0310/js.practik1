"use strict";
 
const numberOfFilms = +prompt('Сколько фильмов уже?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};

const a = prompt('Сколько фильмов уже?', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Сколько фильмов уже?', ''),
      d = prompt('На сколько оцените его', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);