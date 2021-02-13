const knex = require('knex');

const knexConfig = require('../knexfile');

// Generate connection config based on environment
const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

const connection = knex(connectionConfig);

module.exports = connection;
