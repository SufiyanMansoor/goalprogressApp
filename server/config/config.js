/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app, mongoose) {
// mongodb://bearertest:bearertest@ds017258.mlab.com:17258/bearertest
// mongodb://bearer:bearer@ds011168.mlab.com:11168/bearer
    var config = {
        development: {
            mongodbURL: "mongodb://goalprogress:shoot1256@ds147965.mlab.com:47965/goalprogressapp"
        }
    };

    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    //process.env.NODE_ENV = process.env.NODE_ENV || "development";
    console.log("Node Environment = " + process.env.NODE_ENV);

    app.config = config[process.env.NODE_ENV];

    require('./mongoose')(app, mongoose);

};