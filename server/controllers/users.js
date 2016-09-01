/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose,passport,LocalStrategy) {
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
        passport.use(new LocalStrategy(
            function(userEmail, userPassword, done) {
                app.db.models.findOne({ userEmail: userEmail }, function(err, user) {
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    if (!user.userPassword(userPassword)) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                    return done(null, user);





                });
                res.send("Hello its Login")
            }

        ));


    };


    app.api.User.showgoal = function (req, res, next) {
        res.send("hello its show goal")

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