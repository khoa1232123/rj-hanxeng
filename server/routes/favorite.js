const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

const { auth } = require('../middleware/auth');

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', (req, res) => {
  // find favorite information inside Favorite collection by movie id
  console.log(req.body.movieId);
  Favorite.find({ movieId: req.body.movieId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  });
});

router.post('/favorited', (req, res) => {
  // find favorite information inside Favorite collection by movie id, userFrom
  Favorite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    let result = false;
    console.log('123');
    if (favorite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
  });
});

router.post('/addToFavorite', (req, res) => {
  // find favorite information inside Favorite collection by movie id
  const favorite = new Favorite(req.body);
  favorite.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true });
  });
});

router.post('/removeFromFavorite', (req, res) => {
  // find favorite information inside Favorite collection by movie id
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
  });
});

router.post('/getFavorite', (req, res) => {
  // find favorite information inside Favorite collection by movie id
  Favorite.find({ userFrom: req.body.userFrom }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favorites: favorites });
  });
});

module.exports = router;
