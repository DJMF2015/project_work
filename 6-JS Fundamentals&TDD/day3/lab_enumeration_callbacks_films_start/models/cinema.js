const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter((film) =>{
    return film.genre === genre;
  });
};

Cinema.prototype.findFilmByYear = function (year){
  return this.films.some((film) => {
    return film.year === year;
  });
}

Cinema.prototype.findFilmNoYear = function (none){
  return this.films.some((film) => {
    return film.year === none;
  });
}
Cinema.prototype.filmHasLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((film, current) => {
    return film = film + current.length;
  },0);
}
module.exports = Cinema;
