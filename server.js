const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// VIEWS ROUTES
app.get("/", (req, res) => {
    res.render("index");
})


// API ROUTES

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
