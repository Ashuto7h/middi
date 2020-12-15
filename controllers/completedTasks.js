const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../database/models');
const startOfWeek = require('date-fns/startOfWeek');
const endOfWeek = require('date-fns/endOfWeek');
const isBefore = require('date-fns/isBefore');
const isAfter = require('date-fns/isAfter');

const syncTasksWithGoals = async (habitId) => {
    const habit = await db.Habit.findOne({ 
        where: { id: habitId },
        include: db.CompletedTask
    });
    const weekStart = startOfWeek(new Date());
    const weekEnd = endOfWeek(new Date());
    const tasksThisWeek = habit.CompletedTasks.filter(task => {
        const taskDate = new Date(task.dateCompleted);
        return isBefore(taskDate, weekEnd) && isAfter(taskDate, weekStart);
    })
    if (habit.weeklyGoal === tasksThisWeek.length) {
        const goal = await db.CompletedGoal.create({
            HabitId: habitId,
            weekStartDate: weekStart
        })
        return goal;
    }
    else {
        const existingGoal = await db.CompletedGoal.findOne({
            where: {
                HabitId: habitId,
                weekStartDate: weekStart
            }
        });
        if (existingGoal) {
            await db.CompletedGoal.destroy({
                where: {
                    id: existingGoal.id
                }
            });
        }
    }
    return null;
}

router.post('/', async (req, res) => {
    await passport.authenticate('jwt', 
      { session: false },
      (err, user) => {
          db.CompletedTask.create({
              ...req.body,
              dateCompleted: new Date(parseInt(req.body.dateCompleted))
            }).then(async completedTask => {
                    const goal = await syncTasksWithGoals(req.body.HabitId);
                    res.status(200).send({ 
                        completedTask,
                        goalCompleted: !!goal
                    });
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
              .then(async completedTask => {
                  await syncTasksWithGoals(req.body.HabitId);
                  res.status(200).send({ completedTask });
              })
              .catch(err => {
                  console.log(err);
                  res.status(500).send({ err });
              })
      })(req, res)
});

module.exports = router;