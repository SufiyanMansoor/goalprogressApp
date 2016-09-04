/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app, mongoose) {


    /**
     * GET HOME PAGE
     *
     * */
    app.get('/', function (req, res, next) {
        res.sendStatus(200);
    });

    app.post('/signup', app.api.User.signup);
    app.post('/login',app.api.User.login);
    /*app.post('/signin', app.api.User.signin);*/

    app.post('/showgoal', app.api.User.showgoal);

    app.post('/profile', app.api.User.profile);



}