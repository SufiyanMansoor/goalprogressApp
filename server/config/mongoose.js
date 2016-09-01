/**
 * Created by Sufiyan on 8/31/2016.
 */

exports = module.exports = function(app, mongoose,passport,LocalStrategy) {

    mongoose.connect(app.config.mongodbURL);
    app.db = mongoose.connection;
    app.db.on('error', console.error.bind(console, 'connection error:'));
    app.db.once('open', function () {
        // Wait for the database connection to establish, then start the app.
        console.log('CONNECTION OPENED!!')
    });
};