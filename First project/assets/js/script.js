// /* Задание на урок:

// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// // Код возьмите из предыдущего домашнего задания



// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: ['123','asdf'],
//     privat: false,
//     reremberMyFilms: function(){
//         for( let i = 0; i <2; i++){
//             const a = prompt("Один из недавно просмотренных фильмов?",'');
//             const b = prompt("Как вы его оцените?", '');
//             if(a != null && b != null && a != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log("Done!");
//             } else {
//                 console.log("eror!");
//                 i--;}}},
//     detectedPersonalLevel: function(){
//         if (10 > personalMovieDB.count) {
//             alert('Просмотрена довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             alert('Вы классический зритель');
//         }else if ( 30 <= personalMovieDB.count){
//             alert('Вы киноман');
//         }else {alert('Произошла ошибка');}},
//     showMyDB: function(){
//         if (personalMovieDB.privat !== false) {
//             console.log(personalMovieDB);}
//         else {console.log("Ваш База данных закрыта");}},
//     writeYourGenres: function(){
//         for (let i = 0; i <= 2; i++) {
//             let a = prompt(`Ваш любимый жанр под номером ${i+1}`);
//         if(a != null && a != ''){
//             personalMovieDB.genres[i]=a;
//         } else{
//             alert("Вы ввели не коректные данные или не все", "");
//             i--;}}
        
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });},
//     toggleVisibleMyDB: function(){
//          if(personalMovieDB.privat == false){personalMovieDB.privat = true;}
//          else if (personalMovieDB.privat == true)
//          {
//             personalMovieDB.privat = false;
//          }
//          return personalMovieDB.privat;
//     },
//     start: function(){
//         personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
//         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');}}        
    

// };

// personalMovieDB.writeYourGenres();




const p = document.querySelectorAll('p');
console.log(p);




function loadSrc(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    
    document.body.append(script);
}

loadSrc('assets/js/js.js');