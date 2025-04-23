var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=4a6228566b5df9d31d0ff69f8242f9ed")
  .then((response) => response.json())
  .then((data) => res.json({ movies: data.results }))
   
})

module.exports = router;
