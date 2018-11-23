const dotenv = require('dotenv').config();


module.exports = {
  development: {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql" 
    
 },
  test: {
    "username": process.env.TEST_USERNAME,
    "password": process.env.TEST_PASSWORD,
    "database": process.env.TEST_NAME,
    "host":"127.0.0.1",
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