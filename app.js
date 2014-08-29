// Generated by CoffeeScript 1.6.3
var app, body_parser, express;

express = require('express');

body_parser = require('body-parser');

app = express();

app.use(body_parser.json());

app.use(express["static"]("" + __dirname + "/html"));

app.set("views", "" + __dirname + "/jade");

app.set("view engine", "jade");

app.use("/css", express["static"]("" + __dirname + "/stylus/css"));

app.use("/js", express["static"]("" + __dirname + "/coffee/js"));

app.use("/lib", express["static"]("" + __dirname + "/lib"));

app.use("/img", express["static"]("" + __dirname + "/img"));

app.get("/", function(request, response) {
  return response.render("index");
});

app.get("/index", function(request, response) {
  return response.render("index");
});

app.get("/kiero", function(request, response) {
  return response.render("kiero");
});

console.log('Escuchando en el puerto ' + 8080);

app.listen(8080);
