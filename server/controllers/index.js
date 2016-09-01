/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose,passport,LocalStrategy) {

    app.api = {};

    require('./users')(app,mongoose,passport,LocalStrategy);

};