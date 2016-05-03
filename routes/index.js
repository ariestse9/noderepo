/**
 * @author Sean Zhao
 */

var app = require("../core/nrs");
var db = require("../database/database");

function index(req, res) {
    var html = app.render("index", {title : "Node Repo"});
    res.write(html);
}

function create(req, res) {
    console.info(req.body);
    if (req.body) {
        db.load();
        console.info(db.User);
        db.User.create(req.body).then(function(user) {
            res.write(JSON.stringify(user.dataValues));
            res.end();
        });
    }
}

function create_db() {
    db.initialize(true);
}

exports.index = index;
exports.create = create;
exports.create_db = create_db;