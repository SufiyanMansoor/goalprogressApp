/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app,mongoose) {

    app.api = {};

    require('./users')(app,mongoose);

};