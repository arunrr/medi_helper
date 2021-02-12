// Knex config

require("dotenv").config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      user:     process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
