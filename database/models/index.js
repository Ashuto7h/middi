const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');
const User = require('./user');
const Inhaler = require('./inhaler');
const Puff = require('./puff');

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

db.User= User(sequelize, Sequelize.DataTypes);
db.Inhaler = Inhaler(sequelize, Sequelize.DataTypes);
db.Puff= Puff(sequelize, Sequelize.DataTypes);

module.exports = db;