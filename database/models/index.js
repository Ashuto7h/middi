const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');
const userDef = require('./user');
const habitDef = require('./habit');
const completedTaskDef = require('./completedTask');

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const User = sequelize.define('User', userDef);
const Habit = sequelize.define('Habit', habitDef);
const CompletedTask = sequelize.define('CompletedTask', completedTaskDef);

Habit.hasMany(CompletedTask, {
  onDelete: 'CASCADE'
});
CompletedTask.belongsTo(Habit);
User.hasMany(Habit, {
  onDelete: 'CASCADE'
});
Habit.belongsTo(User);

sequelize.sync({ alter: true })
db.Habit = Habit;
db.CompletedTask = CompletedTask;
db.User = User;

module.exports = db;