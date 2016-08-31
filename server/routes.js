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
    app.post('/login ', app.api.User.login);

    app.get('/logout', app.api.User.logout);

    app.post('/profile', app.api.User.profile);



}