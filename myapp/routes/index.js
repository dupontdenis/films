var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { movieList : [{title: "Ocean's Eleven", cast: ["Julia Roberts", "George Clooney", "Brad Pitt", "Andy Garcia"], genres: ["Comedy", "Thriller"], posterImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/oceans11.jpg", imdbURL: "http://www.imdb.com/title/tt0240772/", rating: 4}, {title: "Pirates of the Caribbean", cast: ["Johnny Depp", "Keira Knightley", "Orlando Bloom"], genres: ["Adventure", "Comedy"], posterImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/piratesmovie.jpg", imdbURL: "http://www.imdb.com/title/tt0325980/", rating: 9.7}]
});
});

module.exports = router;
