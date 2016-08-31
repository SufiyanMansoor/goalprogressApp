/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose) {
    app.api.User = {};


    app.api.User.signup = function (req, res, next) {
         app.db.models.basicSchema(
                {    "userFullName":req.body.userFullName,
                     "userEmail":req.body.userEmail,
                     "userPassword":req.body.userPassword
                     /*"userStatus":req.body.userStatus*/
                }).save( function( err)
        { if(!err){
            console.log("Saved new user in database")
        }
        else{
            console.log("its error because user is already in database")
            console.log(err)

        }
        }

        );
    res.send("Hello Its sign  up")
    };
    app.api.User.login = function (req, res, next) {
        res.send("hello its signup")

    };
    app.api.User.logout = function (req, res, next) {
        res.send("hello its signup")

    }
    app.api.User.profile = function (req, res, next) {
        res.send("hello its signup")

    }





}