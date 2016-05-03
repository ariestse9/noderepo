/**
 * @author Sean Zhao
 */

var app = require("../core/nrs");

function index(req, res) {
    var html = app.render("index", {title : "Node Repo"});
    res.write(html);
}

function store(req, res) {
    console.info(req.body);
    //console.info(JSON.parse(req.body));
    if (req.body && req.body.data) {
        try {
            var data = JSON.parse(req.body.data);
            console.info(data);
        } catch (exception) {
            console.info(exception);
        }
    }
}

exports.index = index;
exports.store = store;