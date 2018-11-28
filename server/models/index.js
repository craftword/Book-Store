import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.js';
import dotenv from 'dotenv';

// load environment
dotenv.load();

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV ||'test';
//console.log(env.replace(/\s/g, ''));
const data = config[env];
//console.log(data)
const db = {};

// This check the Environment in use whether local and online

let sequelize;


if (data.url) {
    sequelize = new Sequelize(data.url);
   
} else {
    sequelize = new Sequelize(
        data.database, data.username, data.password, data
    );
}

fs
    .readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {

        const model = sequelize.import(path.join(__dirname, file));
        //console.log(model);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
