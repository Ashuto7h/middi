const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../database/models');

router.post('/', async (req, res) => {
    await passport.authenticate('jwt', 
      { session: false },
      (err, user) => {
          db.CompletedTask.create({
              ...req.body,
              dateCompleted: new Date(parseInt(req.body.dateCompleted))
            })
              .then(completedTask => {
                  res.status(200).send({ completedTask });
              })
              .catch(err => {
                  console.log(err);
                  res.status(500).send({ err });
              })
      })(req, res)
});

router.delete('/', async (req, res) => {
    await passport.authenticate('jwt', 
      { session: false },
      (err, user) => {
          db.CompletedTask.destroy({
              where: {
                  id: req.body.id
              }
          })
              .then(completedTask => {
                  res.status(200).send({ completedTask });
              })
              .catch(err => {
                  console.log(err);
                  res.status(500).send({ err });
              })
      })(req, res)
});

module.exports = router;