const dotenv = require('dotenv').config();

module.exports = {
  development: {
    "username": "craftword",
    "password": "godword20",
    "database": "book-store",
    "host": "127.0.0.1",
    "dialect": "mysql"
 },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_NAME,
    host: process.env.TEST_HOST,
    "dialect": "mysql"
  },
  production: {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};