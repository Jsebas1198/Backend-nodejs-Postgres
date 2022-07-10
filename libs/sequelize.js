const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  //with login true ir will show us the commands for the query
  logging: true,
});
setupModels(sequelize);

//with sequelize.sync() we create tables but is not recommended for production
// sequelize.sync();

//we are going to use migration instead of sync
module.exports = sequelize;
