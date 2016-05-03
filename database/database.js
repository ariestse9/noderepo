/**
 * @author Sean Zhao
 */

var Sequelize = require('sequelize');
var database_url = process.env.DATABASE_URL || 'postgres://noderepo:noderepo@localhost:5432/noderepo';
var sequelize = new Sequelize(database_url);
console.info(process.env.DATABASE_URL);

var db = module.exports = {};


db.initialize = function(force) {
    db.User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
            field: 'name'
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        email: {
            type: Sequelize.STRING
        }
    });

    sequelize.sync({force: force ? true : false});
}

db.load = function() {
    db.initialize(false);
}