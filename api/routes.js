const controller = require('./controller');

module.exports = function (app) {
    app.route('/')
        .get(function(req,res) {
            res.render("home");
        });

    app.route('/')
    .post(controller.addData);

    app.route('/authenticate')
    .post(controller.validate);

    app.route('/thumbnail')
    .post(controller.generateThumbnail);

    app.route("/patch")
    .get(controller.patch);

};