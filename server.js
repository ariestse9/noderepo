/**
 * @author Sean Zhao
 */

var debug = require('debug')('noderepo:server');
var http = require("http");

var routes = require("./routes/index");
var app = require("./core/nrs");
var ejs = require('ejs');

app.load("error");
app.load("index");
app.use("/", routes.index);
app.use("/store", routes.store);

http.createServer(function(req, res) {
    app.route(req, res);
}).listen(3000);