/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose) {
    app.api.User = {};


    app.api.User.signup = function (req, res, next) {
        res.send("hello its signup")

    }
    app.api.User.login = function (req, res, next) {
        res.send("hello its signup")

    }
    app.api.User.logout = function (req, res, next) {
        res.send("hello its signup")

    }
    app.api.User.profile = function (req, res, next) {
        res.send("hello its signup")

    }





}