/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app, mongoose,passport,LocalStrategy) {


    /**
     * GET HOME PAGE
     *
     * */
    app.get('/', function (req, res, next) {
        res.sendStatus(200);
    });

    app.post('/signup', app.api.User.signup);
    app.post('/login',app.api.User.login,
        passport.authenticate('local', { successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true }));
    /*app.post('/signin', app.api.User.signin);*/

    app.post('/showgoal', app.api.User.showgoal);

    app.post('/profile', app.api.User.profile);



}