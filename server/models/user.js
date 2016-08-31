/**
 * Created by Sufiyan on 8/31/2016.
 */
module.exports = function (app, mongoose) {

    /* User Basic Schema*/
    var userSchema = new mongoose.Schema({
        userFullName: {type: String, required: true},
        userMobile: {type: String, unique: true, required: true},
        userEmail: {type: String, unique: true, required: true, index: true},
        userPassword: {type: String, required: true},
        userStatus: {type: String, required: true},
        userPlivoRules: {type: String, required: true, default: 'true'},
        userDeviceToken: {type: String},
        userDeviceType: {type: String},
        userCaregiverNumber: {type: String},
        userDisableOutgoingCalls: {type: Boolean, default: 'true'},
        userJoinDate: {type: Date, default: Date.now}
    });

    app.db.model('User', userSchema);
}