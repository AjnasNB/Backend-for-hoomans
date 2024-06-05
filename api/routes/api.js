const express = require('express');
const router = express.Router();
const movies = require('../movies.json');

// Get all movies
router.get('/movies', (req, res) => {
    res.json(movies);
});

// Search movies by title
router.get('/movies/search', (req, res) => {
    const title = req.query.title.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(title)
    );
    res.json(filteredMovies);
});

module.exports = router;
