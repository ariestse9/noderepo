/**
 * @author Sean Zhao
 */

var Sequelize = require('sequelize');
var database_url = process.env.DATABASE_URL || 'postgres://noderepo:noderepo@localhost:5432/noderepo';
var sequelize = new Sequelize(database_url);
console.info("> Database: " + database_url);

var db = module.exports = {};

db.initialize = function(force) {
    db.Log = sequelize.define('log', {
        bid: {
            type: Sequelize.STRING,
            field: 'bid'
        },
        uid: {
            type: Sequelize.STRING,
            field: 'uid'
        },
        odid: {
            type: Sequelize.STRING,
            field: 'odid'
        },
        tdid: {
            type: Sequelize.STRING,
            field: 'tdid'
        },
        iidy: {
            type: Sequelize.STRING,
            field: 'iidy'
        },
        dir: {
            type: Sequelize.STRING,
            field: 'dir'
        },
        offset: {
            type: Sequelize.STRING,
            field: 'offset'
        },
        ip: {
            type: Sequelize.STRING,
            field: 'ip'
        },
        vl: {
            type: Sequelize.STRING,
            field: 'vl'
        },
        iidf: {
            type: Sequelize.STRING,
            field: 'iidf'
        },
        tday: {
            type: Sequelize.STRING,
            field: 'tday'
        },
        ttime: {
            type: Sequelize.STRING,
            field: 'ttime'
        },
        iids: {
            type: Sequelize.STRING,
            field: 'iids'
        },
        stat: {
            type: Sequelize.STRING,
            field: 'stat'
        }
    });
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