const movieRouter = require('express').Router();
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validation');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

// Маршрут списка фильмов
movieRouter.get('/movies', getMovies);

// Маршрут создания фильма
movieRouter.post('/movies', createMovieValidator, createMovie);

// Маршрут удаления фильма
movieRouter.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
