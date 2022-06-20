const { Pool } = require('pg');

const { config } = require('./../config/config');

//for security we enconde the variables
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//to conect to a remote database using dotenv
const pool = new Pool({ connectionString: URI });
// const pool = new Pool({
//   host: '',
//   port: ,
//   user: '',
//   password: '',
//   database: '',
// });

module.exports = pool;
