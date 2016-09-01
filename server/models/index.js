/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose,passport,LocalStrategy) {
    require('./user')(app, mongoose,passport,LocalStrategy);


};