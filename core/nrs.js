/**
 * @author Sean Zhao
 */
var fs = require("fs");
var ejs = require('ejs');
var url = require("url");

var app = exports = module.exports = {};

app.init = function() {
    this.cache = {};
    this.mapping = {};
    this.settings = {};
    this.settings["views"] = "views";
}

app.set = function(name, value) {
    if (name != "views") {
        console.info("Not support setting '" + name + "'");
        return;
    }

    this.settings[name] = value;
}

app.load = function(name) {
    var path = this.settings["views"] + "/" + name + ".ejs";
    var text = fs.readFileSync(path).toString();
    var template = ejs.compile(text, {cache: true, filename: name});
    this.cache[name] = template;
    //console.info("View " + name + " loaded.");
}

app.render = function(name, data, req, res) {
    var template = this.cache[name];
    if (template && typeof template === "function") {
        return template(data);
    }
    console.info("Template " + name + " not found.")
    return "";
}

app.use = function(path, router) {
    this.mapping[path] = router;
    //console.info("use " + path + " to " + router);
}

app.route = function(req, res, exptionHandler) {
    var path = url.parse(req.url).pathname;
    var execptionHandler = this.execptionHandler;
    if (typeof this.mapping[path] === "function") {
        try {
            var routers = this.mapping;
            if (req.method == 'GET') {
                routers[path](req, res);
            } else if (req.method == "POST") {
                var body = "";
                req.on("data", function(data) {
                    body += data;
                    if (body.length > 1e6) {
                        req.connection.destroy();
                    }
                });
                req.on("end", function() {
                    try {
                        var content_type = req.headers["content-type"];
                        if (content_type == null || content_type == "") {
                            throw new exception("content-type不能为空.");
                        }
                        switch (content_type) {
                            case "application/json" :
                                console.info(">>> JSON: " + body);
                                req.body = JSON.parse(body);
                                break;
                        }
                        routers[path](req, res);
                    } catch (ex) {
                        console.info(ex);
                        execptionHandler({title: "Server error.", message : ex, error: {status : 500, stack : ex.stack}}, res);
                    }
                });
            } else {

            }
        } catch (ex) {
            console.info(ex);
            execptionHandler({title: "Server error.", message : ex, error: {status : 500, stack : ex}}, res);
        }
    } else {
        execptionHandler({title: "File not found.", message : path + " not found!", error: {status : 404, stack : ""}}, res)
    }
}

app.execptionHandler = function(exObj, res) {
    res.write(app.render("error", exObj));
    res.end();
}

app.init();