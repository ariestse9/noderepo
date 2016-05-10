/**
 * @author Sean Zhao
 */

var app = require("../core/nrs");
var db = require("../database/database");

function create(req, res) {
    console.info(req.body);
    if (req.body) {
        db.load();
        console.info(db.Log);
        db.Log.create(req.body).then(function(log) {
            //res.write(JSON.stringify(user.dataValues));
            res.write("1");
            res.end();
        });
    }
}

function list(req, res) {
    db.load();
    db.Log.findAndCountAll().then(function(result) {
        res.write(JSON.stringify(result));
        res.end();
    });
}

exports.create = create;
exports.list = list;