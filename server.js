/**
 * @author Sean Zhao
 */

//var debug = require('debug')('noderepo:server');
var http = require("http");

var routes = require("./routes/index");
var log = require("./routes/log");
var app = require("./core/nrs");
var ejs = require('ejs');

app.load("error");
app.load("index");
app.use("/", routes.index);
app.use("/create", routes.create);
app.use("/list", routes.list);
app.use("/create_db", routes.create_db);
app.use("/log/create", log.create);
app.use("/log/list", log.list);

var port = process.env.PORT || '3000';

var server = http.createServer(function(req, res) {
    app.route(req, res);
});
server.on("clientError", function(err, socket) {
    console.info(err);
});
server.listen(port);