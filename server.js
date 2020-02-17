const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const routes = require("./api/routes");
const session = require("express-session");
const passport = require("passport");

const app = express();  
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "The man is a fool",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
routes(app);

app.listen(5000, function() {
  console.log("App is running on port 5000");
});