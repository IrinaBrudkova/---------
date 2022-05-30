"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };
    const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type = 'checkbox']");

    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    }; // удалить все рекламные блоки со страницы

    const makeChanges = () => {
        genre.textContent = "драма"; // Изменить жанр фильма, поменять "комедия" на "драма"
        poster.style.backgroundImage = 'url("img/bg.jpg ")'; //Изменить задний фон постера
    };

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("Добавляем любимый фильм.");
            }
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            сreateMovieList(movieDB.movies, movieList);
            event.target.reset();
        }
    });

    function сreateMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">
                    ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        }); // добавить фильмы из movieDB, добавить нумерацию
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove(); // при клике на мусорную корзину - элемент будет удаляться из списка
                movieDB.movies.splice(i, 1); // удалить элемент из базы данных
                сreateMovieList(films, parent);
            });
        });
    }

    сreateMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChanges();

    /* еще варианты */

    // inputIn = document.querySelector(".adding__input"),
    // btn = document.querySelector("button"),
    // newFilm = inputIn.value,
    // checkBox = document.querySelector('input[type = "checkbox"]');

    // function checkFavoriteFilm() {
    //     if (checkBox.checked) {
    //         console.log(checkBox.checked);
    //         console.log("Добавляем любимый фильм.");
    //     }
    // }

    // function numerateFilms() {
    //     movieDB.movies.forEach((film, i) => {
    //         movieList.innerHTML += `<li class="promo__interactive-item">
    //         ${i + 1}. ${film}
    //         <div class="delete"></div>
    //     </li>`;
    //     }); // добавить фильмы из movieDB, добавить нумерацию
    // }

    // function veryLongStringCheck() {
    //     let longString = inputIn.value;
    //     if (longString.length > 21) {
    //         longString = longString.substr(0, 21);
    //         movieDB.movies.push(`${longString} ...`);
    //     } else {
    //         movieDB.movies.push(inputIn.value.toUpperCase()); // добавить фильм в ммассив
    //     }
    // }

    // genre.textContent = "драма"; // Изменить жанр фильма, поменять "комедия" на "драма"

    // poster.style.backgroundImage = 'url("img/bg.jpg ")'; //Изменить задний фон постера

    // function myFilms(event) {
    //     event.preventDefault(); //остановить стандартное поведение браузера
    //     veryLongStringCheck(); //проверяем на длину и записываем в массив
    //     movieDB.movies.sort(); // отсортировать список фильмов по алфавиту
    //     movieList.innerHTML = ""; // очистить список с просмотренными фильмами
    //     numerateFilms(); // пронумеровать фильмы по порядку
    //     checkFavoriteFilm(); // поставили галочку?
    //     inputIn.value = "";
    // }

    // btn.addEventListener("click", myFilms);
});