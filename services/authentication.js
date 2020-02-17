const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

mongoose.connect("mongodb://localhost:27018/testDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var authenticate = {
    addData: function(req,res){
        User.register({ username: req.body.username }, req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                res.send("An error occured");
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.send("Registered successfully");
                });
            }
        });
    },
    validate:function(req,res){
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        
        req.login(user, function (err) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.send("Authorized");
                });
            }
        });
    }
};

module.exports = authenticate;