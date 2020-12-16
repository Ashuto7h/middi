const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../database/models');

router.post('/', async (req, res) => {
      await passport.authenticate('jwt', 
        { session: false },
        (err, user) => {
            db.Habit.create({
                ...req.body,
                UserId: user.id
            })
                .then(habit => {
                    res.status(200).send({ habit });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({ err });
                })
        })(req, res)
  });

router.get('/', async (req, res) => {
      await passport.authenticate('jwt', 
        { session: false },
        (err, user) => {
            console.log(user);
            if (err) {
                console.log(err);
                res.status(500).send({ err: { message: err }});
            }
            db.Habit.findAll({
                where: { UserId: user.id },
                include: [
                    db.CompletedTask,
                    db.CompletedGoal
                ]
            })
                .then(habits => {
                    res.status(200).send({ habits });
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
          db.Habit.destroy({
              where: {
                  id: req.body.id
              }
          })
              .then(async habit => {
                  res.status(200).send({ habit });
              })
              .catch(err => {
                  console.log(err);
                  res.status(500).send({ err });
              })
      })(req, res)
});

router.patch('/', async (req, res) => {
    await passport.authenticate('jwt', 
      { session: false },
      async (err, user) => {
        const habit = await db.Habit.findOne({
            where: {
                id: req.body.id
            }
        });
        if (habit) {
            const { name, description, color, weeklyGoal } = req.body;
            habit.name = name;
            habit.description = description;
            habit.color = color;
            habit.weeklyGoal = weeklyGoal;
            habit.save().then(habit => {
                res.status(200).send({ habit });
            })
            .catch(err => {
                console.log(err);
                res.status(500).send({ err });
            })
        }
        else {
            res.status(404).send({ err: { message: 'Habit does not exist' } });
        }
      })(req, res)
});

module.exports = router;