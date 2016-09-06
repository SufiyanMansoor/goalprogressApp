/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose) {
    app.api.User = {};


    app.api.User.signup = function (req, res, next) {
        app.db.models.basicSchema(
            {
                "userFullName": req.body.userFullName,
                "userEmail": req.body.userEmail,
                "userPassword": req.body.userPassword
                /*"userStatus":req.body.userStatus*/
            }).save(function (err) {
                if (!err) {
                    console.log("Saved new user in database")
                }
                else {
                    console.log("its error because user is already in database")
                    console.log(err)

                }
            }
        );
        res.send("Hello Its sign  up")
    };
    /*app.api.User.signin = function (req, res, next) {

        res.send("hello its login")

    };*/
    app.api.User.login = function (req, res, next) {
        res.send('helllo its login')
    };


    app.api.User.showgoal = function (req, res, next) {
        app.db.models.userGoalSchema.find({}, function(err, users) {
            if(!err){
                res.send(users);
            }
        });

    }
    app.api.User.profile = function (req, res, next) {
        app.db.models.userGoalSchema(
            {   "day":req.body.day,
                "userGoal":req.body.userGoal,
                "userDescription":req.body.userDescription
                /*"userStatus":req.body.userStatus*/
            }).save( function( err)
            { if(!err){
                console.log("Saved Your Goal In Database")
            }
            else{
                console.log("its error because your parameter is not saved")
                console.log(err)

            }
            }

        );
        res.send("Hello Its saved your goal in data base")
    };





}